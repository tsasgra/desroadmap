#!/usr/bin/env python3
"""
Máy chủ cục bộ cho Roadmap 30 Ngày Design có lưu trạng thái tự động vào progress_data.json.
Cách chạy:
    python3 server.py
Mọi thao tác tick ngày, ghi chú, đổi giao diện và kéo Lab HSB sẽ được ghi thẳng
vào file progress_data.json trong cùng thư mục — tắt tab hay tắt máy không bị mất!
"""

import http.server
import json
import os
import socketserver
import threading
import webbrowser

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(DIRECTORY, "progress_data.json")


class RoadmapHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        if self.path.split("?")[0] == "/api/state":
            try:
                if os.path.exists(DATA_FILE):
                    with open(DATA_FILE, "r", encoding="utf-8") as f:
                        raw = f.read().strip() or "{}"
                else:
                    raw = "{}"
                data = raw.encode("utf-8")
                self.send_response(200)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Content-Length", str(len(data)))
                self.end_headers()
                self.wfile.write(data)
            except Exception as exc:
                err = json.dumps({"error": str(exc)}).encode("utf-8")
                self.send_response(500)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.end_headers()
                self.wfile.write(err)
            return
        super().do_GET()

    def do_POST(self):
        if self.path.split("?")[0] == "/api/state":
            try:
                length = int(self.headers.get("Content-Length", "0"))
                body = self.rfile.read(length).decode("utf-8")
                parsed = json.loads(body)
                with open(DATA_FILE, "w", encoding="utf-8") as f:
                    json.dump(parsed, f, ensure_ascii=False, indent=2)
                ok = json.dumps({"status": "saved"}).encode("utf-8")
                self.send_response(200)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Content-Length", str(len(ok)))
                self.end_headers()
                self.wfile.write(ok)
            except Exception as exc:
                err = json.dumps({"error": str(exc)}).encode("utf-8")
                self.send_response(400)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.end_headers()
                self.wfile.write(err)
            return
        self.send_error(404, "Not Found")


def open_browser(port: int) -> None:
    webbrowser.open(f"http://127.0.0.1:{port}/index.html")


def main() -> None:
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("127.0.0.1", PORT), RoadmapHandler) as httpd:
        url = f"http://127.0.0.1:{PORT}/index.html"
        print(f"Đang chạy Roadmap 30 Ngày Design tại: {url}")
        print(f"File lưu trạng thái tự động: {DATA_FILE}")
        print("Nhấn Ctrl + C để dừng máy chủ.")
        threading.Timer(0.6, open_browser, args=(PORT,)).start()
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nĐã dừng máy chủ.")


if __name__ == "__main__":
    main()
