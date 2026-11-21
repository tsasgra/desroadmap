#!/usr/bin/env python3
"""
Máy chủ cục bộ cho Roadmap 30 Ngày Design:
- Hỗ trợ đăng ký / đăng nhập tài khoản Email (mã hóa mật khẩu PBKDF2-SHA256) lưu vào users_db.json.
- Tự động lưu trữ trạng thái học tập riêng biệt cho từng Email vào progress_data.json.
Cách chạy:
    python3 server.py
"""

import hashlib
import http.server
import json
import os
import secrets
import socketserver
import threading
import urllib.parse
import webbrowser

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(DIRECTORY, "progress_data.json")
USERS_FILE = os.path.join(DIRECTORY, "users_db.json")


def read_json_file(path: str, default):
    if not os.path.exists(path):
        return default
    try:
        with open(path, "r", encoding="utf-8") as f:
            raw = f.read().strip()
            return json.loads(raw) if raw else default
    except Exception:
        return default


def write_json_file(path: str, obj) -> None:
    with open(path, "w", encoding="utf-8") as f:
        json.dump(obj, f, ensure_ascii=False, indent=2)


def hash_password(password: str, salt: str) -> str:
    dk = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), salt.encode("utf-8"), 100_000)
    return dk.hex()


class RoadmapHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def send_json(self, status: int, payload: dict) -> None:
        data = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def read_json_body(self) -> dict:
        length = int(self.headers.get("Content-Length", "0"))
        body = self.rfile.read(length).decode("utf-8")
        return json.loads(body) if body else {}

    def do_GET(self):
        parsed_url = urllib.parse.urlparse(self.path)
        if parsed_url.path == "/api/state":
            qs = urllib.parse.parse_qs(parsed_url.query)
            email_key = (qs.get("email", ["guest"])[0] or "guest").strip().lower()
            db = read_json_file(DATA_FILE, {"accounts": {}})
            accounts = db.get("accounts", {})
            state_obj = accounts.get(email_key, {})
            self.send_json(200, state_obj)
            return
        super().do_GET()

    def do_POST(self):
        parsed_url = urllib.parse.urlparse(self.path)

        if parsed_url.path == "/api/state":
            try:
                body = self.read_json_body()
                email_key = str(body.get("email") or "guest").strip().lower()
                state_obj = body.get("state", body)
                db = read_json_file(DATA_FILE, {"accounts": {}})
                if "accounts" not in db or not isinstance(db["accounts"], dict):
                    db = {"accounts": {}}
                db["accounts"][email_key] = state_obj
                write_json_file(DATA_FILE, db)
                self.send_json(200, {"status": "saved", "email": email_key})
            except Exception as exc:
                self.send_json(400, {"error": str(exc)})
            return

        if parsed_url.path == "/api/register":
            try:
                body = self.read_json_body()
                name = str(body.get("name", "")).strip()
                email = str(body.get("email", "")).strip().lower()
                password = str(body.get("password", ""))
                initial_state = body.get("initialState") or {}

                if not name or "@" not in email or len(password) < 6:
                    self.send_json(400, {"error": "Thông tin đăng ký chưa hợp lệ (mật khẩu tối thiểu 6 ký tự)."})
                    return

                users = read_json_file(USERS_FILE, {})
                if email in users:
                    self.send_json(409, {"error": "Email này đã được đăng ký. Hãy chuyển sang tab Đăng nhập."})
                    return

                salt = secrets.token_hex(16)
                users[email] = {
                    "name": name,
                    "email": email,
                    "salt": salt,
                    "passwordHash": hash_password(password, salt),
                }
                write_json_file(USERS_FILE, users)

                db = read_json_file(DATA_FILE, {"accounts": {}})
                if "accounts" not in db or not isinstance(db["accounts"], dict):
                    db = {"accounts": {}}
                db["accounts"][email] = initial_state
                write_json_file(DATA_FILE, db)

                self.send_json(201, {"user": {"name": name, "email": email}})
            except Exception as exc:
                self.send_json(400, {"error": str(exc)})
            return

        if parsed_url.path == "/api/login":
            try:
                body = self.read_json_body()
                email = str(body.get("email", "")).strip().lower()
                password = str(body.get("password", ""))

                users = read_json_file(USERS_FILE, {})
                user_rec = users.get(email)
                if not user_rec:
                    self.send_json(401, {"error": "Không tìm thấy tài khoản với Email này."})
                    return

                expected = hash_password(password, user_rec.get("salt", ""))
                if not secrets.compare_digest(expected, user_rec.get("passwordHash", "")):
                    self.send_json(401, {"error": "Mật khẩu không đúng. Vui lòng thử lại."})
                    return

                db = read_json_file(DATA_FILE, {"accounts": {}})
                user_state = db.get("accounts", {}).get(email, {})
                self.send_json(200, {
                    "user": {"name": user_rec["name"], "email": user_rec["email"]},
                    "state": user_state,
                })
            except Exception as exc:
                self.send_json(400, {"error": str(exc)})
            return

        self.send_error(404, "Not Found")


def open_browser(port: int) -> None:
    webbrowser.open(f"http://127.0.0.1:{port}/index.html")


def main() -> None:
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("127.0.0.1", PORT), RoadmapHandler) as httpd:
        url = f"http://127.0.0.1:{PORT}/index.html"
        print(f"Đang chạy Roadmap 30 Ngày Design tại: {url}")
        print(f"File tài khoản Email: {USERS_FILE}")
        print(f"File tiến độ theo Email: {DATA_FILE}")
        print("Nhấn Ctrl + C để dừng máy chủ.")
        threading.Timer(0.6, open_browser, args=(PORT,)).start()
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nĐã dừng máy chủ.")


if __name__ == "__main__":
    main()
