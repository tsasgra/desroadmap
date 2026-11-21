(function () {
      'use strict';

      // =========================================================================
      // 1. DỮ LIỆU ĐẦY ĐỦ 4 GIAI ĐOẠN & 30 NGÀY (KÈM WEB/APP, BƯỚC LÀM & VÍ DỤ MẪU)
      // =========================================================================
      const PHASES = [
        {
          id: 1,
          title: 'Giai đoạn 1: Nền tảng & Xây kho tư liệu',
          range: 'Ngày 1 – 7',
          goal: 'Làm chủ thông số màu HSB, hiểu quy tắc phối màu cơ bản và hình thành thói quen phân tích thiết kế.',
          accentClass: 'bg-indigo-500',
          badgeClass: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/60',
        },
        {
          id: 2,
          title: 'Giai đoạn 2: Phân tích & Tái tạo',
          range: 'Ngày 8 – 14',
          goal: 'Kiểm soát độ tương phản, biết dùng màu trung tính và thành thạo Moodboard + Mindmap.',
          accentClass: 'bg-amber-500',
          badgeClass: 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800/60',
        },
        {
          id: 3,
          title: 'Giai đoạn 3: Ứng dụng & Biến tấu',
          range: 'Ngày 15 – 22',
          goal: 'Làm chủ kỹ thuật phối màu nâng cao (Hue Shifting, Color System) và sáng tạo ý tưởng bằng SCAMPER.',
          accentClass: 'bg-emerald-500',
          badgeClass: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60',
        },
        {
          id: 4,
          title: 'Giai đoạn 4: Phản biện & Tinh chỉnh',
          range: 'Ngày 23 – 30',
          goal: 'Biết tự phát hiện lỗi sai, thiết kế tinh gọn và hoàn thành sản phẩm cuối khóa.',
          accentClass: 'bg-rose-500',
          badgeClass: 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border-rose-200 dark:border-rose-800/60',
        }
      ];

      const ROADMAP_DAYS = [
        // ==================== GIAI ĐOẠN 1 (NGÀY 1 - 7) ====================
        {
          day: 1, phase: 1, category: 'Phối màu',
          task: 'Tìm hiểu hệ màu HSB/HSL. Mở công cụ thiết kế, chọn 1 màu bất kỳ và tự kéo 3 thanh Hue, Saturation, Brightness để xem sự thay đổi.',
          outcome: 'Hiểu cách tinh chỉnh sắc độ, độ tươi và độ sáng thay vì chọn màu theo cảm tính.',
          tools: [
            { name: 'Lab HSB (Ngay trên web)', url: '#hsb-lab', role: 'Kéo thử 3 thanh H-S-B trực tiếp' },
            { name: 'Color Game (Method.ac)', url: 'https://color.method.ac/', role: 'Chơi game luyện mắt khớp màu' },
            { name: 'Adobe Color', url: 'https://color.adobe.com/create/color-wheel', role: 'Đổi chế độ màu sang HSB để thử' }
          ],
          steps: [
            'Bấm nút "Lab HSB & 60-30-10" ở góc trên phải web này (chưa cần cài phần mềm gì cả).',
            'Giữ nguyên Hue = 220° (xanh dương), chỉ kéo thanh Saturation từ 90% xuống 20% để thấy màu dịu đi thế nào.',
            'Tiếp tục giữ nguyên Hue và Saturation = 60%, kéo Brightness từ 95% xuống 30% để hiểu cách tạo màu đậm.',
            'Mở Color Game (color.method.ac) và chơi qua 2 vòng đầu (Hue & Saturation) trong 10 phút.'
          ],
          example: 'Bài tập mẫu Ngày 01 (Từ 1 màu gốc Xanh Dương H:220°):\n• Màu Pastel dịu mắt: H=220°, S=25%, B=95% (#B6CFF2)\n• Màu Nhấn chuẩn (Accent): H=220°, S=75%, B=90% (#397BE6)\n• Màu Đậm làm chữ/nền tối: H=220°, S=65%, B=25% (#162540)\n👉 Hãy thử kéo Lab HSB để tự tạo 3 sắc thái tương tự cho màu Cam (H=25°)!'
        },
        {
          day: 2, phase: 1, category: 'Lên Idea',
          task: 'Tạo tài khoản Pinterest/Behance/Mobbin. Lập 3 thư mục: Layout, Color, Typography. Lưu 15 mẫu đầu tiên.',
          outcome: 'Xây dựng được bộ khung "Visual Library" cá nhân.',
          tools: [
            { name: 'Pinterest', url: 'https://www.pinterest.com', role: 'Tạo 3 Board lưu ảnh nhanh nhất' },
            { name: 'Behance', url: 'https://www.behance.net', role: 'Xem dự án thiết kế chuyên nghiệp' },
            { name: 'Mobbin', url: 'https://mobbin.com', role: 'Tham khảo giao diện App/Web thật' }
          ],
          steps: [
            'Đăng ký miễn phí tài khoản Pinterest bằng Google.',
            'Tạo 3 Board (bảng) đặt tên: "01 - Layout", "02 - Color Palette", "03 - Typography".',
            'Gõ các từ khóa mẫu bên dưới vào ô tìm kiếm và lưu 5 mẫu bạn thấy đẹp nhất vào mỗi bảng (tổng 15 mẫu).'
          ],
          example: 'Từ khóa tìm kiếm chuẩn cho Newbie trên Pinterest:\n• Cho bảng Layout: "minimal poster layout grid", "modern landing page ui"\n• Cho bảng Color: "editorial color palette design", "packaging color inspiration"\n• Cho bảng Typography: "bold typography poster", "clean magazine typography"'
        },
        {
          day: 3, phase: 1, category: 'Phối màu',
          task: 'Học 5 quy tắc phối màu trên Bánh xe màu (Đơn sắc, Tương đồng, Tương phản, Bổ túc xen kẽ, Bộ ba) qua Adobe Color.',
          outcome: 'Nhận diện được cấu trúc hài hòa của các cặp màu.',
          tools: [
            { name: 'Adobe Color Wheel', url: 'https://color.adobe.com/create/color-wheel', role: 'Chọn 5 chế độ phối màu trên bánh xe' },
            { name: 'Color Game (Method.ac)', url: 'https://color.method.ac/', role: 'Chơi vòng Complementary & Analogous' }
          ],
          steps: [
            'Mở Adobe Color Wheel, nhìn cột bên trái mục "Color Harmony Rule".',
            'Lần lượt bấm qua 5 mục: Monochromatic (Đơn sắc), Analogous (Tương đồng), Complementary (Tương phản), Split Complementary (Bổ túc xen kẽ), Triad (Bộ ba).',
            'Kéo chấm tròn chính trên bánh xe và chụp màn hình lại 1 bảng màu bạn thích nhất ở mỗi quy tắc.'
          ],
          example: 'Ví dụ 5 quy tắc từ màu gốc Xanh Lam (#2563EB):\n1. Đơn sắc (An toàn nhất cho Newbie): Xanh nhạt #DBEAFE + Xanh vừa #3B82F6 + Xanh đậm #1E3A8A\n2. Tương đồng (Mềm mại): Xanh tím #6366F1 + Xanh lam #2563EB + Xanh ngọc #06B6D4\n3. Tương phản (Nổi bật mạnh): Xanh lam #2563EB + Cam đất #EA580C'
        },
        {
          day: 4, phase: 1, category: 'Phối màu',
          task: 'Học quy tắc 60-30-10. Hút màu từ 3 poster/website bạn thích và đo ước lượng tỷ lệ màu của chúng.',
          outcome: 'Biết cách phân bổ diện tích màu để thiết kế không bị rối.',
          tools: [
            { name: 'Adobe Color (Hút từ ảnh)', url: 'https://color.adobe.com/create/image', role: 'Tải ảnh poster lên để lấy bảng màu' },
            { name: 'Realtime Colors', url: 'https://www.realtimecolors.com', role: 'Xem trực quan 60-30-10 trên web' },
            { name: 'Lab HSB (Ngay trên web)', url: '#hsb-lab', role: 'Xem thanh tỷ lệ 60-30-10 tự động' }
          ],
          steps: [
            'Chọn 3 ảnh poster hoặc giao diện bạn đã lưu ở Ngày 2 trên Pinterest.',
            'Tải lần lượt từng ảnh lên Adobe Color (Extract Theme) để lấy ra 5 mã màu chủ đạo.',
            'Nheo mắt nhìn ảnh gốc và ghi chú: Màu nào phủ nhiều nhất (~60% nền)? Màu nào làm chữ/khối (~30%)? Màu nào làm nút/điểm nhấn (~10%)?'
          ],
          example: 'Ví dụ phân tích 1 Poster Quán Cà Phê:\n• 60% Nền: Kem giấy ấm (#F7F3EB) — giúp mắt dễ chịu.\n• 30% Khối & Chữ: Nâu Espresso (#2D1E17) — tạo cấu trúc rõ ràng.\n• 10% Điểm nhấn: Cam cháy (#D95D24) — chỉ dùng cho nút "Đặt ngay" và giá khuyến mãi.'
        },
        {
          day: 5, phase: 1, category: 'Lên Idea',
          task: 'Thực hành Đọc Brief: Chọn 2 mẫu thiết kế đẹp, viết ngược lại Brief của nó (Đối tượng? Cảm xúc? Mục tiêu?).',
          outcome: 'Tư duy thiết kế giải quyết vấn đề thay vì chỉ trang trí.',
          tools: [
            { name: 'Behance', url: 'https://www.behance.net', role: 'Chọn 2 poster/web case study để phân tích' },
            { name: 'Pinterest', url: 'https://www.pinterest.com', role: 'Lấy mẫu từ kho đã lưu ở Ngày 2' }
          ],
          steps: [
            'Chọn 2 mẫu thiết kế bất kỳ trong kho Pinterest/Behance của bạn.',
            'Trả lời 4 câu hỏi vào ô Ghi chú của Ngày 5: (1) Thiết kế này dành cho ai? (2) Nó muốn người xem làm hành động gì? (3) 3 tính từ mô tả cảm xúc? (4) Vì sao họ chọn màu đó?'
          ],
          example: 'Mẫu viết ngược Brief cho 1 Poster nhạc Jazz buổi tối:\n• Đối tượng: Người trẻ 22–35 tuổi thích không gian chill, nghệ thuật.\n• Mục tiêu: Thu hút quét mã QR đặt vé đêm nhạc thứ 7.\n• Cảm xúc: Ấm cúng, cổ điển, sâu lắng.\n• Lý do chọn màu: Nền xanh đêm đậm (#0F172A) + chữ vàng đồng (#EAB308) gợi ánh đèn sân khấu.'
        },
        {
          day: 6, phase: 1, category: 'Tổng hợp',
          task: 'Lưu thêm 15 mẫu thiết kế mới. Với mỗi mẫu, ghi chú 1 dòng ngắn: Họ dùng quy tắc màu gì? Điểm nhấn nằm ở đâu?',
          outcome: 'Rèn "con mắt" phân tích thiết kế chuyên nghiệp.',
          tools: [
            { name: 'Pinterest', url: 'https://www.pinterest.com', role: 'Lưu thêm 15 mẫu & viết Note ngay dưới Pin' },
            { name: 'Color Hunt', url: 'https://colorhunt.co/', role: 'Xem thêm bảng màu xu hướng theo tag' }
          ],
          steps: [
            'Tìm thêm 15 mẫu (gồm 5 Poster, 5 Web/App, 5 Bao bì sản phẩm) trên Pinterest.',
            'Với mỗi mẫu, tự nhẩm hoặc viết 1 dòng ngắn: "[Quy tắc màu] + [60-30-10] + [Điểm hút mắt đầu tiên]".'
          ],
          example: 'Mẫu ghi chú 1 dòng siêu ngắn:\n• Mẫu #1 (App tài chính): Đơn sắc xanh dương | 60% trắng kem, 30% chữ xanh đen, 10% nút chuyển tiền xanh tươi | Điểm nhấn: Con số tổng tài sản ở giữa.'
        },
        {
          day: 7, phase: 1, category: 'Nghỉ & Ôn',
          task: 'Xem lại toàn bộ ghi chú tuần 1. Tự kiểm tra: Nhìn một ảnh bất kỳ có gọi tên được quy tắc màu của nó không?',
          outcome: 'Chốt vững nền tảng lý thuyết.',
          tools: [
            { name: 'Color Game (Method.ac)', url: 'https://color.method.ac/', role: 'Chơi lại để phá kỷ lục điểm tuần 1' },
            { name: 'Pinterest', url: 'https://www.pinterest.com', role: 'Mở lại 30 mẫu đã lưu để tự đố bản thân' }
          ],
          steps: [
            'Mở ngẫu nhiên 5 ảnh trong kho Pinterest của bạn.',
            'Tự đọc to: Đây là màu đơn sắc/tương đồng/tương phản? Màu nào chiếm 60%? Màu nào chiếm 10%?',
            'Nghỉ ngơi thư giãn, không cần làm bài tập nặng.'
          ],
          example: 'Mini Quiz tự kiểm tra Tuần 1:\n1. Muốn màu đỡ chói mắt, ta giảm thanh nào trong HSB? (Đáp án: Saturation)\n2. Tỷ lệ màu nhấn nên chiếm khoảng bao nhiêu % diện tích? (Đáp án: ~10%)\n3. Trước khi mở app thiết kế, cần xác định gì trước? (Đáp án: Brief — đối tượng & mục tiêu)'
        },

        // ==================== GIAI ĐOẠN 2 (NGÀY 8 - 14) ====================
        {
          day: 8, phase: 2, category: 'Phối màu',
          task: 'Tìm hiểu Tâm lý học màu sắc. Lập danh sách 6 nhóm ngành (Công nghệ, Ẩm thực, Tài chính, Thời trang, Giáo dục, Y tế) và màu đặc trưng của chúng.',
          outcome: 'Chọn đúng màu theo ngữ cảnh và cảm xúc thương hiệu.',
          tools: [
            { name: 'Color Hunt', url: 'https://colorhunt.co/', role: 'Lọc bảng màu theo cảm xúc Warm/Cold/Pastel' },
            { name: 'Coolors Explore', url: 'https://coolors.co/palettes', role: 'Tìm bảng màu theo từ khóa ngành nghề' }
          ],
          steps: [
            'Mở Coolors Explore hoặc Color Hunt.',
            'Với mỗi ngành trong 6 ngành, chọn 1 bảng màu đại diện và ghi vào ô Ghi chú lý do ngành đó hay dùng màu ấy.'
          ],
          example: 'Bảng gợi ý Tâm lý học màu sắc cho Newbie:\n• Công nghệ / Tài chính: Xanh dương đậm (#1D4ED8) — Tin cậy, ổn định.\n• Ẩm thực / F&B: Đỏ, Cam ấm (#EA580C) — Kích thích vị giác, năng lượng.\n• Y tế / Sức khỏe: Xanh lá, Xanh ngọc (#0D9488) — An toàn, tươi mới.\n• Thời trang cao cấp: Đen than, Kem, Vàng đồng (#1C1917 / #D6D3D1) — Sang trọng.\n• Giáo dục: Xanh dương sáng + Vàng (#F59E0B) — Thân thiện, khơi gợi sáng tạo.'
        },
        {
          day: 9, phase: 2, category: 'Phối màu',
          task: 'Học về Độ tương phản (Contrast) và chuẩn WCAG. Dùng WebAIM Contrast Checker kiểm tra 5 cặp màu chữ/nền tự chọn.',
          outcome: 'Đảm bảo chữ luôn dễ đọc, không gây mỏi/rung mắt.',
          tools: [
            { name: 'WebAIM Contrast Checker', url: 'https://webaim.org/resources/contrastchecker/', role: 'Nhập mã màu Chữ & Nền để chấm điểm AA/AAA' },
            { name: 'Adobe Contrast Analyzer', url: 'https://color.adobe.com/create/color-contrast-analyzer', role: 'Tự động gợi ý cách chỉnh màu nếu bị Fail' }
          ],
          steps: [
            'Mở WebAIM Contrast Checker.',
            'Nhập mã màu chữ vào ô "Foreground Color" và màu nền vào ô "Background Color".',
            'Kiểm tra xem mục "Normal Text - WCAG AA" có hiện chữ PASS (tỷ lệ >= 4.5:1) hay không.',
            'Thử nhập 5 cặp màu bẫy ở ví dụ bên dưới rồi tự chỉnh Brightness cho đến khi tất cả đều PASS!'
          ],
          example: '5 cặp màu bài tập để bạn test ngay trên WebAIM:\n1. Chữ #9CA3AF trên nền #FFFFFF -> FAIL (2.54:1) — Lỗi Newbie hay mắc nhất!\n2. Chữ #FFFFFF trên nền #FACC15 (vàng tươi) -> FAIL (1.51:1) — Đổi chữ sang #1F2937 sẽ PASS!\n3. Chữ #22C55E trên nền #FFFFFF -> FAIL (2.28:1) — Kéo tối xuống #15803D sẽ PASS!\n4. Chữ #1E293B trên nền #F8FAFC -> PASS AAA (14.6:1)\n5. Chữ #FFFFFF trên nền #4F46E5 -> PASS AA (6.29:1)'
        },
        {
          day: 10, phase: 2, category: 'Phối màu',
          task: 'Thực hành pha Màu trung tính (Neutrals): Pha 5–10% màu chủ đạo vào màu trắng và đen để tạo màu nền/chữ mượt hơn.',
          outcome: 'Biết cách tránh dùng đen chết (#000000) và xám nhạt nhòa.',
          tools: [
            { name: 'Lab HSB (Ngay trên web)', url: '#hsb-lab', role: 'Xem cách hệ thống tự pha 60% & 30% từ Hue' },
            { name: 'Figma', url: 'https://www.figma.com', role: 'Vẽ 4 ô vuông so sánh Trắng/Đen thuần vs Pha sắc' }
          ],
          steps: [
            'Chọn 1 màu thương hiệu, ví dụ Xanh Dương (Hue = 220°).',
            'Để tạo nền trắng mượt: đặt H=220°, S=4%, B=98% (thay vì #FFFFFF).',
            'Để tạo chữ đen có chiều sâu: đặt H=220°, S=25%, B=15% (thay vì #000000).',
            'Đặt 2 bảng màu cạnh nhau trên Canva hoặc Figma để thấy sự khác biệt rõ rệt.'
          ],
          example: 'Công thức pha Neutrals chuẩn Studio (Newbie cứ áp dụng y hệt):\n• Nếu thương hiệu màu Nâu Cà Phê (H=28°): Nền #FAF7F2 (S=3%, B=98%) | Chữ #261C15 (S=44%, B=15%)\n• Nếu thương hiệu màu Xanh Lá (H=150°): Nền #F4FAF7 (S=2%, B=98%) | Chữ #12261C (S=52%, B=15%)'
        },
        {
          day: 11, phase: 2, category: 'Lên Idea',
          task: 'Học kỹ thuật Mindmap: Chọn từ khóa "Cà phê sáng", vẽ sơ đồ tư duy 3 tầng để tìm ra ít nhất 5 hình ảnh ẩn dụ mới lạ.',
          outcome: 'Thoát khỏi lối mòn ý tưởng (không cứ cà phê là vẽ cái cốc).',
          tools: [
            { name: 'FigJam', url: 'https://www.figma.com/figjam/', role: 'Dùng template Mind Map có sẵn cực nhanh' },
            { name: 'Milanote', url: 'https://milanote.com', role: 'Kéo thả thẻ ghi chú và nối mũi tên' }
          ],
          steps: [
            'Mở FigJam (hoặc lấy giấy bút), viết chữ "CÀ PHÊ SÁNG" vào chính giữa.',
            'Tầng 1: Vẽ 4 nhánh lớn (Cảm giác, Âm thanh, Thời gian, Không gian).',
            'Tầng 2 & 3: Từ mỗi nhánh, nghĩ tiếp 2–3 hình ảnh cụ thể không liên quan trực tiếp đến cái ly cà phê.',
            'Khoanh tròn 5 hình ảnh ẩn dụ thú vị nhất!'
          ],
          example: 'Ví dụ Mindmap 3 tầng "Cà phê sáng":\n• Nhánh "Tỉnh táo" -> Nạp pin -> Cột pin 100% hình hạt cà phê (Ẩn dụ #1)\n• Nhánh "Ánh sáng" -> Nắng xiên qua cửa sổ -> Vệt nắng đổ bóng thành dòng chữ (Ẩn dụ #2)\n• Nhánh "Khởi đầu" -> Đồng hồ báo thức -> Nút Snooze biến thành nút "Pha phin" (Ẩn dụ #3)\n• Nhánh "Hương thơm" -> Khói bay -> Làn khói vẽ thành nốt nhạc buổi sáng (Ẩn dụ #4)'
        },
        {
          day: 12, phase: 2, category: 'Lên Idea',
          task: 'Học làm Moodboard: Từ kết quả Mindmap ngày 11, gom 8–10 ảnh (ánh sáng, chất liệu, font, màu) lên 1 bảng (FigJam/Milanote).',
          outcome: 'Định hình được "vibe" tổng thể trước khi bắt tay vào làm.',
          tools: [
            { name: 'Milanote', url: 'https://milanote.com', role: 'Tạo bảng Moodboard đẹp như studio' },
            { name: 'FigJam', url: 'https://www.figma.com/figjam/', role: 'Dán ảnh copy từ Pinterest cực nhanh' },
            { name: 'Pinterest', url: 'https://www.pinterest.com', role: 'Nguồn tìm ảnh chất liệu & ánh sáng' }
          ],
          steps: [
            'Mở 1 bảng mới trên Milanote hoặc FigJam.',
            'Tìm và dán lên đúng 4 nhóm (mỗi nhóm 2–3 ảnh): (1) Ánh sáng/Không khí, (2) Chất liệu bề mặt (giấy kraft, gỗ, gốm), (3) Kiểu chữ (Font), (4) 3–4 ô màu chủ đạo.',
            'Xóa bớt những ảnh bị "lạc tông" để cả bảng nhìn vào thấy chung 1 cảm xúc.'
          ],
          example: 'Checklist 1 Moodboard chuẩn cho đề tài "Cà phê sáng tối giản":\n• 3 ảnh ánh nắng sáng chiếu lên bàn gỗ.\n• 2 ảnh chất liệu giấy nhám màu kem.\n• 2 ảnh mẫu font Serif thanh mảnh kết hợp Sans-serif gọn gàng.\n• 1 dải 4 ô màu: #F7F3EB, #D6C7B2, #3A2618, #D95D24.'
        },
        {
          day: 13, phase: 2, category: 'Thực hành',
          task: 'Bài tập Re-color: Lấy 1 layout/wireframe có sẵn, phối lại theo 3 phong cách: Sang trọng, Năng động, Tối giản.',
          outcome: 'Cảm nhận rõ sức mạnh của màu sắc lên cùng 1 bố cục.',
          tools: [
            { name: 'Canva Templates', url: 'https://www.canva.com/templates/', role: 'Chọn 1 poster miễn phí rồi nhân bản thành 3 trang' },
            { name: 'Coolors Visualizer', url: 'https://coolors.co/visualizer', role: 'Thử đổi màu nhanh trên các layout có sẵn' },
            { name: 'Figma', url: 'https://www.figma.com', role: 'Dành cho bạn muốn tập dùng Figma' }
          ],
          steps: [
            'Mở Canva Templates, gõ "Coffee Poster" hoặc "Event Poster", chọn 1 mẫu đơn giản miễn phí.',
            'Bấm "Nhân bản trang" (Duplicate) thành 3 bản giống hệt nhau về chữ và hình.',
            'Chỉ đổi MÀU SẮC (không sửa bố cục) của 3 bản theo 3 bộ mã màu mẫu bên dưới.'
          ],
          example: '3 bộ màu mẫu để bạn áp vào bài Re-color Ngày 13:\n1. Sang trọng (Luxury): Nền #141210 (60%) | Chữ #F3EFE6 (30%) | Nhấn Vàng đồng #C8A253 (10%)\n2. Năng động (Energetic): Nền #FFFBEB (60%) | Chữ #1E1B4B (30%) | Nhấn Cam/Hồng #F97316 (10%)\n3. Tối giản (Minimal): Nền #F8FAFC (60%) | Chữ #0F172A (30%) | Nhấn Xanh Olive #4D7C0F (10%)'
        },
        {
          day: 14, phase: 2, category: 'Nghỉ & Ôn',
          task: 'Đánh giá lại 3 bản Re-color của ngày 13. Kiểm tra độ tương phản chữ trên cả 3 bản.',
          outcome: 'Hoàn thiện kỹ năng tái tạo và kiểm soát màu.',
          tools: [
            { name: 'WebAIM Contrast Checker', url: 'https://webaim.org/resources/contrastchecker/', role: 'Đo lại màu chữ & nền của 3 bản Ngày 13' }
          ],
          steps: [
            'Đặt cả 3 bản Re-color của Ngày 13 cạnh nhau (chế độ Grid View trên Canva/Figma).',
            'Chấm điểm từng bản: Bản nào dễ đọc nhất? Bản nào nhìn "đắt tiền" nhất? Bản nào bị chói mắt?',
            'Dùng WebAIM kiểm tra lại dòng chữ nhỏ nhất trên cả 3 bản và sửa nếu bị Fail.'
          ],
          example: 'Câu hỏi tự chấm điểm cuối Tuần 2:\n• Có bản nào bạn lỡ dùng màu đen thuần #000000 không?\n• Màu nhấn có vượt quá 10–15% diện tích khiến mắt bị phân tán không?'
        },

        // ==================== GIAI ĐOẠN 3 (NGÀY 15 - 22) ====================
        {
          day: 15, phase: 3, category: 'Phối màu',
          task: 'Học kỹ thuật Hue Shifting: Tạo dải màu từ sáng đến tối (5 bước) cho màu xanh dương và màu đỏ có dịch chuyển Hue.',
          outcome: 'Tạo được dải màu có chiều sâu, tự nhiên, không bị xỉn.',
          tools: [
            { name: 'UI Colors Generator', url: 'https://uicolors.app/generate', role: 'Xem cách dải màu sáng-tối tự dịch Hue' },
            { name: 'Figma', url: 'https://www.figma.com', role: 'Vẽ 5 hình tròn cạnh nhau và chỉnh HSB thủ công' }
          ],
          steps: [
            'Hiểu quy tắc vàng: Khi làm màu SÁNG hơn -> xoay Hue về phía màu Vàng (60°); Khi làm màu TỐI hơn -> xoay Hue về phía màu Xanh tím/Tím (240°–270°).',
            'Mở Figma hoặc Canva, vẽ 5 ô vuông nằm ngang cho màu Đỏ.',
            'Áp thử công thức bên dưới rồi so sánh với cách chỉ kéo thanh Brightness thông thường.'
          ],
          example: 'Dải 5 bước Hue Shifting mẫu cho Màu Đỏ (không bị bợt hay bùn):\n• Rất sáng (ngả Cam vàng): #FCA5A5 (H:0° -> dịch sang H:12° #FDBA74)\n• Sáng: #F87171 (H:6°)\n• Gốc: #EF4444 (H:0°)\n• Tối (ngả Đỏ rượu): #BE123C (H:345°)\n• Rất tối (ngả Tím đậm): #881337 (H:338°)'
        },
        {
          day: 16, phase: 3, category: 'Phối màu',
          task: 'Tìm hiểu Color System: Cách chia nhóm Primary, Secondary, Neutral và Semantic (Success, Warning, Error).',
          outcome: 'Biết cách xây dựng hệ thống màu dùng được cho dự án lớn/Web UI.',
          tools: [
            { name: 'UI Colors (Tailwind)', url: 'https://uicolors.app/tailwind-colors', role: 'Tham khảo hệ thống màu chuẩn 50–950' },
            { name: 'Realtime Colors', url: 'https://www.realtimecolors.com', role: 'Xem cấu trúc Primary/Secondary/Accent' }
          ],
          steps: [
            'Mở UI Colors Tailwind và xem cách họ đặt tên thang màu từ 50 (sáng nhất) đến 950 (tối nhất).',
            'Ghi nhớ 4 nhóm màu bắt buộc của 1 dự án: Primary (Màu thương hiệu), Neutral (Nền, viền, chữ), Accent (Điểm nhấn), và Semantic (Xanh lá = Thành công, Vàng = Cảnh báo, Đỏ = Lỗi).'
          ],
          example: 'Khung Color System tối giản cho Newbie (chỉ cần 7 màu là đủ làm app):\n• Primary: #4F46E5 (Nút chính)\n• Neutral Bg: #F8FAFC (Nền) | Neutral Surface: #FFFFFF (Thẻ) | Neutral Text: #0F172A (Chữ)\n• Semantic: Success #16A34A | Warning #D97706 | Error #DC2626'
        },
        {
          day: 17, phase: 3, category: 'Phối màu',
          task: 'Thực hành tạo 1 Color System hoàn chỉnh trên Figma/Realtime Colors cho một ứng dụng giả lập.',
          outcome: 'Thành thạo việc áp dụng màu hệ thống vào giao diện thực tế.',
          tools: [
            { name: 'Realtime Colors', url: 'https://www.realtimecolors.com', role: 'Thử màu lên trang web mẫu ngay lập tức' },
            { name: 'Huemint', url: 'https://huemint.com/', role: 'AI gợi ý bảng màu áp trực tiếp lên UI' },
            { name: 'Figma', url: 'https://www.figma.com', role: 'Tạo bảng swatch Color System lưu lại' }
          ],
          steps: [
            'Mở Realtime Colors, bấm vào 5 ô màu ở thanh dưới cùng (Text, Background, Primary, Secondary, Accent).',
            'Chọn chủ đề "Ứng dụng đặt lịch tập Yoga" và tinh chỉnh 5 ô màu cho đến khi giao diện nhìn hài hòa.',
            'Bấm nút "Export" trên Realtime Colors hoặc chụp ảnh màn hình lưu vào ghi chú.'
          ],
          example: 'Đề mẫu Ngày 17 — App Quản lý Chi tiêu Cá nhân "FinMate":\n• Background: #F4F7F6 | Text: #11241E\n• Primary: #0F766E (Xanh ngọc tin cậy) | Secondary: #CCFBF1 | Accent: #F59E0B (Vàng nhấn nút "+ Thêm khoản chi")'
        },
        {
          day: 18, phase: 3, category: 'Lên Idea',
          task: 'Học kỹ thuật SCAMPER: Lấy 1 poster sự kiện có sẵn, áp dụng ít nhất 3 chữ cái (VD: Thay thế, Kết hợp, Đảo ngược) để biến tấu.',
          outcome: 'Biết cách biến ý tưởng tham khảo thành của riêng mình.',
          tools: [
            { name: 'FigJam', url: 'https://www.figma.com/figjam/', role: 'Dán poster gốc và viết ghi chú 7 chữ SCAMPER' },
            { name: 'Pinterest', url: 'https://www.pinterest.com', role: 'Chọn 1 poster sự kiện bất kỳ làm mẫu gốc' }
          ],
          steps: [
            'Chọn 1 poster sự kiện âm nhạc trên Pinterest và dán vào FigJam.',
            'Thử áp dụng 3 trong 7 câu hỏi SCAMPER: S (Thay thế ảnh bằng chữ khổng lồ?), C (Kết hợp ảnh thật + nét vẽ tay?), R (Đảo ngược nền tối thành nền sáng?).',
            'Phác thảo nhanh bản biến tấu mới ra giấy trong 10 phút.'
          ],
          example: 'Ví dụ SCAMPER trên 1 Poster Đêm Nhạc Acoustic:\n• Mẫu gốc: Ảnh ca sĩ cầm đàn guitar nền đen, chữ trắng nhỏ ở dưới.\n• S (Substitute - Thay thế): Thay ảnh ca sĩ bằng hình phóng to 6 dây đàn guitar kéo chéo toàn poster.\n• M (Magnify - Phóng đại): Phóng tên đêm nhạc to chiếm 50% khổ giấy.\n• R (Reverse - Đảo ngược): Đổi nền đen sang nền giấy báo màu kem (#F5EFE6) + chữ đỏ đô.'
        },
        {
          day: 19, phase: 3, category: 'Lên Idea',
          task: 'Học về Visual Hierarchy (Phân cấp thị giác): Thực hành sắp xếp Tiêu đề – Hình ảnh – Mô tả – Nút bấm sao cho mắt người xem đi đúng thứ tự.',
          outcome: 'Dẫn dắt được ánh nhìn của người xem theo ý đồ.',
          tools: [
            { name: 'Canva', url: 'https://www.canva.com/vi_vn/', role: 'Tạo khung 1080x1350px để tập xếp 4 thành phần chữ' },
            { name: 'Figma', url: 'https://www.figma.com', role: 'Tập căn lề, kích thước font và khoảng trống' }
          ],
          steps: [
            'Tạo 1 khung trắng trên Canva/Figma chỉ chứa 4 dòng chữ ở ví dụ bên dưới (chưa cần thêm hình cầu kỳ).',
            'Tạo phân cấp rõ ràng bằng 3 đòn bẩy: Cỡ chữ (To nhất -> Nhỏ nhất), Độ đậm (Bold vs Regular), và Màu sắc (Màu nhấn chỉ cho nút CTA).',
            'Lùi xa màn hình 1 mét: Mắt bạn có nhìn thấy Tiêu đề đầu tiên, rồi đến Nút bấm không?'
          ],
          example: 'Nội dung mẫu để xếp Visual Hierarchy (Workshop Phối Màu):\n1. [Nhỏ nhất, in hoa, mờ]: WORKSHOP ONLINE MIỄN PHÍ\n2. [To nhất, đậm nhất]: LÀM CHỦ PHỐI MÀU TRONG 90 PHÚT\n3. [Cỡ vừa, màu xám đậm]: Thứ 7, 20:00 • Dành cho người mới bắt đầu từ con số 0\n4. [Nút nổi bật màu 10%]: ĐĂNG KÝ GIỮ CHỖ NGAY'
        },
        {
          day: 20, phase: 3, category: 'Thực hành',
          task: 'Mini-project (Phần 1): Chọn 1 đề bài (VD: Poster/Landing page sự kiện âm nhạc). Viết Brief -> Mindmap -> Moodboard.',
          outcome: 'Chạy mượt quy trình tiền kỳ lên ý tưởng.',
          tools: [
            { name: 'Trình Tạo Đề (Ngay trên web)', url: '#brief-generator', role: 'Sinh đề bài tiếng Việt có sẵn gợi ý' },
            { name: 'Good Brief', url: 'https://goodbrief.io/', role: 'Tạo đề bài tiếng Anh như khách hàng thật' },
            { name: 'FigJam', url: 'https://www.figma.com/figjam/', role: 'Gom Brief + Mindmap + Moodboard vào 1 bảng' }
          ],
          steps: [
            'Mở tab "3. Tạo Đề Bài (Brief)" ở mục Trung Tâm Thực Hành bên dưới (hoặc dùng Good Brief) để chọn 1 đề bài Mini-project.',
            'Dán đề bài lên FigJam/Milanote, dành 15 phút vẽ Mindmap tìm 3 hình ảnh chủ đạo.',
            'Dành 25 phút gom 8 ảnh Moodboard (màu, font, bố cục, ánh sáng).'
          ],
          example: 'Đề mẫu sẵn cho Mini-Project Ngày 20–22:\n• Dự án: Poster đêm nhạc indie ngoài trời "HOÀNG HÔN ACOUSTIC"\n• Đối tượng: Sinh viên & người đi làm 18–28 tuổi.\n• Cảm xúc: Lãng mạn, tự do, ấm áp ánh chiều tà.\n• Thông tin bắt buộc: Tên sự kiện, Ngày 28/11 • 17:30, Địa điểm: Sân thượng Hồ Tây, Giá vé: 150K.'
        },
        {
          day: 21, phase: 3, category: 'Thực hành',
          task: 'Mini-project (Phần 2): Phác thảo nhanh 3 bố cục trên giấy (15 phút), chọn 1 bản tốt nhất và chốt bảng màu 60-30-10.',
          outcome: 'Biết cách chọn lọc phương án tối ưu trước khi lên máy.',
          tools: [
            { name: 'Lab HSB (Ngay trên web)', url: '#hsb-lab', role: 'Chốt 3 mã màu 60-30-10 và test tương phản' },
            { name: 'Coolors', url: 'https://coolors.co/', role: 'Tinh chỉnh và khóa bảng màu hoàn chỉnh' }
          ],
          steps: [
            'Lấy 1 tờ giấy A4, kẻ 3 ô chữ nhật nhỏ (mỗi ô chỉ tốn 5 phút vẽ nét nguệch ngoạc, không cần vẽ đẹp!).',
            'Ô 1: Tiêu đề ở trên cùng, ảnh ở giữa. Ô 2: Ảnh tràn viền, chữ đè góc trái. Ô 3: Chia đôi khung (trái chữ, phải ảnh).',
            'Chọn ô nhìn thoáng và rõ thông tin nhất, sau đó chốt bảng màu 60-30-10 trên Lab HSB.'
          ],
          example: 'Bảng màu 60-30-10 mẫu cho "HOÀNG HÔN ACOUSTIC":\n• 60% Nền: Tím than chiều tà (#1E1B2E) hoặc Kem nắng (#FDF6EC)\n• 30% Khối/Chữ: Hồng đất ấm (#D98880) & Chữ sáng (#FAF5EE)\n• 10% Nhấn: Cam hoàng hôn rực (#F97316) cho ngày giờ & nút đặt vé.'
        },
        {
          day: 22, phase: 3, category: 'Thực hành',
          task: 'Mini-project (Phần 3): Lên máy hoàn thiện bản thiết kế từ bản phác thảo ngày 21.',
          outcome: 'Kết hợp trọn vẹn Idea + Phối màu thành sản phẩm thực tế.',
          tools: [
            { name: 'Canva', url: 'https://www.canva.com/vi_vn/', role: 'Dựng poster nhanh nhất cho Newbie' },
            { name: 'Figma', url: 'https://www.figma.com', role: 'Dựng Landing Page hoặc Poster chuẩn pixel' }
          ],
          steps: [
            'Mở Canva hoặc Figma, tạo khung kích thước (Poster dọc: 1080×1350px hoặc Landing Page: 1440×900px).',
            'Đổ màu nền 60% trước, sau đó đặt chữ theo đúng bố cục đã chọn ở Ngày 21.',
            'Thêm hình ảnh minh họa, đổ màu nhấn 10% cho đúng 1–2 chi tiết quan trọng nhất, rồi xuất ảnh PNG lưu lại.'
          ],
          example: 'Quy tắc vàng khi lên máy cho Newbie:\n• Chỉ dùng tối đa 2 font chữ (1 font tiêu đề + 1 font nội dung).\n• Chừa lề (Margin) xung quanh khung ít nhất 60–80px để thiết kế không bị "ngộp thở".'
        },

        // ==================== GIAI ĐOẠN 4 (NGÀY 23 - 30) ====================
        {
          day: 23, phase: 4, category: 'Phối màu',
          task: 'Thực hành Grayscale Check: Chuyển sản phẩm ngày 22 sang trắng đen để kiểm tra độ tách lớp và độ nổi bật của chữ.',
          outcome: 'Kiểm soát được giá trị độ sáng (Value) độc lập với màu sắc.',
          tools: [
            { name: 'Lab HSB (Nút Grayscale)', url: '#hsb-lab', role: 'Bật thử nút Grayscale Check để hiểu nguyên lý' },
            { name: 'Canva / Figma', url: 'https://www.canva.com/vi_vn/', role: 'Kéo Saturation ảnh về -100 để soi trắng đen' }
          ],
          steps: [
            'Tải ảnh PNG sản phẩm Ngày 22 vào Canva (hoặc tạo 1 lớp màu đen đặt chế độ Hòa trộn "Color" trên Figma).',
            'Kéo thanh Độ bão hòa (Saturation) về mức thấp nhất để toàn bộ thiết kế thành trắng đen.',
            'Quan sát: Tiêu đề và nút bấm có bị "chìm nghỉm" vào nền xám không? Nếu có, tăng độ sáng/tối của chữ lên rồi bỏ bộ lọc trắng đen.'
          ],
          example: 'Dấu hiệu PASS bài kiểm tra Grayscale Check:\n• Nhìn bản trắng đen vẫn đọc rõ chữ ngay lập tức.\n• Phân biệt được 3 sắc độ rõ ràng: Sáng (nền/chữ), Xám vừa (khối phụ), Đậm (tiêu đề/nút chính).'
        },
        {
          day: 24, phase: 4, category: 'Phối màu',
          task: 'Thử thách Tiết chế (2-Color Challenge): Thiết kế 1 bố cục đơn giản chỉ dùng đúng 1 màu trung tính + 1 màu nhấn.',
          outcome: 'Rèn tư duy tối giản, tránh lạm dụng quá nhiều màu.',
          tools: [
            { name: 'Canva', url: 'https://www.canva.com/vi_vn/', role: 'Tạo nhanh 1 thẻ Quote hoặc Poster tối giản' },
            { name: 'Figma', url: 'https://www.figma.com', role: 'Thiết kế 1 card sản phẩm chỉ dùng 2 màu' }
          ],
          steps: [
            'Chọn đúng 1 cặp 2 màu ở ví dụ bên dưới (tuyệt đối không thêm màu thứ 3!).',
            'Thiết kế 1 ảnh vuông Instagram (1080×1080px) giới thiệu 1 câu nói truyền cảm hứng hoặc 1 sản phẩm yêu thích.',
            'Tạo điểm nhấn bằng kích thước chữ lớn/nhỏ và khoảng trống thay vì thêm màu.'
          ],
          example: '3 cặp màu cực đẹp cho Thử thách 2-Color Challenge:\n• Cặp 1 (Hiện đại): Kem nhạt #F6F4EF + Xanh Cobalt #1D4ED8\n• Cặp 2 (Nghệ thuật): Đen than #161618 + Xanh Lime #BEF264\n• Cặp 3 (Ấm áp): Giấy Kraft nhạt #F3EAE0 + Đỏ Gạch #B91C1C'
        },
        {
          day: 25, phase: 4, category: 'Lên Idea',
          task: 'Thực hành Self-Critique: Mở lại sản phẩm ngày 22, liệt kê 3 điểm chưa ổn (thừa chi tiết, màu chói, chữ khó đọc) và sửa lại.',
          outcome: 'Hình thành tư duy phản biện, không thỏa mãn với bản nháp đầu tiên.',
          tools: [
            { name: 'Canva / Figma', url: 'https://www.figma.com', role: 'Nhân bản bản Ngày 22 thành V2 để so sánh Trước/Sau' },
            { name: 'WebAIM Contrast Checker', url: 'https://webaim.org/resources/contrastchecker/', role: 'Soi lại tương phản bản V2' }
          ],
          steps: [
            'Đừng xóa bản Ngày 22! Nhân bản nó sang trang mới đặt tên là "V2".',
            'Tự đóng vai khách hàng khó tính, tìm đúng 3 lỗi và viết vào ô Ghi chú.',
            'Sửa 3 lỗi đó trên bản V2 (thường là: bỏ bớt icon thừa, căn thẳng hàng chữ, giảm độ chói màu nền).'
          ],
          example: '3 lỗi kinh điển Newbie dễ tìm thấy nhất khi Self-Critique:\n1. Quá nhiều cỡ chữ khác nhau -> Gom về tối đa 3 cỡ chữ.\n2. Khoảng cách giữa các dòng quá sát -> Tăng Line-height lên 1.3–1.5.\n3. Thừa khung viền/họa tiết trang trí -> Xóa bớt 20% chi tiết cho thoáng mắt.'
        },
        {
          day: 26, phase: 4, category: 'Dự án cuối',
          task: 'Chọn 1 đề bài hoàn chỉnh mới. Hoàn thành: Brief -> Mindmap -> Moodboard.',
          outcome: 'Ứng dụng độc lập quy trình lên Idea.',
          tools: [
            { name: 'Trình Tạo Đề (Ngay trên web)', url: '#brief-generator', role: 'Bấm tạo đề bài Dự án cuối của riêng bạn' },
            { name: 'Sharpen Design', url: 'https://sharpen.design/', role: 'Hoặc lấy đề ngẫu nhiên từ Sharpen' },
            { name: 'Milanote / FigJam', url: 'https://milanote.com', role: 'Trình bày bảng tiền kỳ gọn gàng' }
          ],
          steps: [
            'Mở tab "3. Tạo Đề Bài (Brief)" (hoặc Sharpen/FakeClients) chọn 1 đề tài khác hẳn Mini-project Ngày 20.',
            'Lần này hãy làm độc lập toàn bộ 3 bước: Viết Brief 4 dòng -> Mindmap 3 tầng -> Moodboard 8–10 ảnh.'
          ],
          example: 'Gợi ý 2 đề Dự án cuối cực tốt để đưa vào Portfolio:\n• Đề A (Graphic): Bộ 3 ảnh Instagram + Poster khai trương thương hiệu Trà Sữa / Cà phê Matcha.\n• Đề B (Web UI): Màn hình Hero Landing Page cho ứng dụng học ngoại ngữ hoặc đặt phòng homestay.'
        },
        {
          day: 27, phase: 4, category: 'Dự án cuối',
          task: 'Xây dựng Color System (kèm Hue Shifting & Neutrals) và phác thảo 3 hướng bố cục.',
          outcome: 'Ứng dụng độc lập quy trình phối màu.',
          tools: [
            { name: 'UI Colors Generator', url: 'https://uicolors.app/generate', role: 'Tạo bảng thang màu chuẩn Hue Shifting' },
            { name: 'Realtime Colors', url: 'https://www.realtimecolors.com', role: 'Thử nghiệm bộ màu trước khi dựng' },
            { name: 'Lab HSB (Ngay trên web)', url: '#hsb-lab', role: 'Kiểm tra tỷ lệ 60-30-10 & WCAG' }
          ],
          steps: [
            'Chốt 1 bảng màu gồm: 60% Neutral nền pha sắc, 30% Neutral chữ/khối, 10% Primary Accent + 1 dải sáng/tối Hue Shifting.',
            'Phác thảo 3 phương án bố cục trên giấy (mỗi phương án 5 phút) và khoanh chọn phương án tốt nhất.'
          ],
          example: 'Mẹo chốt màu nhanh cho Dự án cuối:\n• Đưa bảng màu của bạn vào WebAIM Contrast Checker ngay từ bước này để chắc chắn chữ đọc rõ trước khi bắt đầu vẽ.'
        },
        {
          day: 28, phase: 4, category: 'Dự án cuối',
          task: 'Hoàn thiện thiết kế trên phần mềm.',
          outcome: 'Thực thi sản phẩm hoàn chỉnh.',
          tools: [
            { name: 'Figma', url: 'https://www.figma.com', role: 'Dựng sản phẩm hoàn chỉnh (khuyên dùng cho Web/UI)' },
            { name: 'Canva', url: 'https://www.canva.com/vi_vn/', role: 'Dựng Poster/Social Media nhanh đẹp' }
          ],
          steps: [
            'Dựng khung, đổ màu hệ thống đã chốt ở Ngày 27 và sắp xếp chữ theo đúng Visual Hierarchy.',
            'Kiểm tra căn lề thẳng hàng và khoảng trắng thở đều ở 4 cạnh.',
            'Lưu link dự án vào ô "Link bài làm" ngay trong khung ghi chú của ngày này.'
          ],
          example: 'Checklist trước khi xuất file Dự án cuối:\n✓ Đúng tỷ lệ 60-30-10?\n✓ Tối đa 2 font chữ?\n✓ Mắt người xem đọc đúng thứ tự Tiêu đề -> Nội dung -> Nút/Thông tin chính?'
        },
        {
          day: 29, phase: 4, category: 'Phản biện',
          task: 'Chạy Grayscale Check, kiểm tra Contrast. Đăng lên cộng đồng/nhóm bạn để xin Feedback theo câu hỏi cụ thể.',
          outcome: 'Biết cách tiếp nhận và lọc góp ý từ người khác.',
          tools: [
            { name: 'WebAIM Contrast Checker', url: 'https://webaim.org/resources/contrastchecker/', role: 'Chấm điểm tương phản lần cuối' },
            { name: 'Behance', url: 'https://www.behance.net', role: 'Đăng thử dự án hoặc gửi link cho bạn bè góp ý' }
          ],
          steps: [
            'Chuyển sản phẩm Ngày 28 sang trắng đen (Grayscale Check) để tự soát lỗi trước.',
            'Gửi ảnh cho 2–3 người bạn hoặc đăng lên nhóm học thiết kế kèm mẫu câu hỏi cụ thể bên dưới (đừng chỉ hỏi "Đẹp không mọi người?").'
          ],
          example: 'Mẫu câu hỏi xin Feedback chuyên nghiệp (Copy dùng ngay):\n"Mình mới tập thiết kế Poster/UI cho [Tên dự án] hướng đến cảm giác [Sang trọng/Trẻ trung]. Nhờ mọi người xem giúp mình 2 điểm:\n1. Khi nhìn vào 3 giây đầu, mắt bạn chú ý vào đâu đầu tiên?\n2. Chữ có chỗ nào khó đọc hoặc màu sắc có bị chói không ạ?"'
        },
        {
          day: 30, phase: 4, category: 'Tổng kết',
          task: 'Chỉnh sửa bản cuối dựa trên Feedback. Đặt sản phẩm Ngày 30 cạnh sản phẩm Ngày 13 để nhìn thấy sự tiến bộ.',
          outcome: 'Hoàn thành lộ trình 30 ngày!',
          tools: [
            { name: 'Behance', url: 'https://www.behance.net', role: 'Đăng Case Study đầu tay gồm Brief -> Moodboard -> Thành phẩm' },
            { name: 'Canva / Figma', url: 'https://www.figma.com', role: 'Ghép ảnh Before (Ngày 13) & After (Ngày 30)' }
          ],
          steps: [
            'Lọc các góp ý hợp lý từ Ngày 29 và tinh chỉnh bản Final.',
            'Tạo 1 khung ảnh ghép sản phẩm Ngày 13 bên trái và Dự án cuối Ngày 30 bên phải để lưu làm kỷ niệm.',
            'Xuất file .JSON / .CSV ở góc trên để lưu lại toàn bộ hành trình 30 ngày của bạn!'
          ],
          example: 'Chúc mừng bạn đã tốt nghiệp 30 ngày! 🎉\nGợi ý bước tiếp theo: Mỗi tuần chọn 1 đề bài mới từ mục "Tạo Đề Bài (Brief)" trên web này để luyện thêm 1 sản phẩm cho Portfolio của bạn.'
        }
      ];

      // 6 Bài tập mẫu hoàn chỉnh trong Trung tâm thực hành cho Newbie
      const STARTER_EXERCISES = [
        {
          id: 'ex1',
          dayRef: 1,
          level: 'Cấp 1 • Làm quen màu',
          title: 'Bài 1: Chơi Color Game & Pha 3 sắc thái từ 1 màu gốc',
          desc: 'Chưa cần biết dùng app gì! Mở Color Game luyện mắt 10 phút, rồi mở Lab HSB trên web này kéo tạo 1 màu Pastel, 1 màu Nhấn và 1 màu Đậm từ màu Cam (H=25°).',
          promptText: 'BÀI TẬP 1 (NGÀY 01): Từ Hue = 25° (Cam), hãy dùng Lab HSB tạo ra:\n1. Màu nền Pastel (S: 10-20%, B: 96%)\n2. Màu nút Nhấn (S: 75%, B: 90%)\n3. Màu chữ Đậm (S: 45%, B: 18%)\nSau đó chơi Color Game (color.method.ac) đạt ít nhất điểm "Good" ở vòng Hue & Saturation.',
          tools: [
            { name: 'Mở Lab HSB', url: '#hsb-lab' },
            { name: 'Color Game', url: 'https://color.method.ac/' }
          ]
        },
        {
          id: 'ex2',
          dayRef: 9,
          level: 'Cấp 1 • Luyện mắt đọc chữ',
          title: 'Bài 2: Giải cứu 3 cặp màu "bẫy" trên WebAIM Contrast',
          desc: 'Người mới thường chọn chữ xám nhạt hoặc chữ trắng trên nền vàng khiến người xem đau mắt. Hãy nhập 3 cặp màu lỗi vào WebAIM và chỉnh lại cho đạt chuẩn WCAG AA (>= 4.5:1).',
          promptText: 'BÀI TẬP 2 (NGÀY 09): Vào webaim.org/resources/contrastchecker/ và sửa 3 cặp màu FAIL sau thành PASS AA:\n• Cặp A: Chữ #9CA3AF trên nền #FFFFFF\n• Cặp B: Chữ #FFFFFF trên nền #FACC15\n• Cặp C: Chữ #38BDF8 trên nền #F0F9FF\nGhi lại 3 mã màu mới đạt chuẩn vào ô Ghi chú Ngày 09.',
          tools: [
            { name: 'WebAIM Contrast', url: 'https://webaim.org/resources/contrastchecker/' },
            { name: 'Adobe Contrast', url: 'https://color.adobe.com/create/color-contrast-analyzer' }
          ]
        },
        {
          id: 'ex3',
          dayRef: 11,
          level: 'Cấp 2 • Lên ý tưởng',
          title: 'Bài 3: Mindmap 3 tầng & Moodboard "Cà phê sáng"',
          desc: 'Tập thoát khỏi lối mòn vẽ "cái ly cà phê". Dùng FigJam vẽ 3 tầng từ khóa tìm 5 hình ảnh ẩn dụ, sau đó gom 8 ảnh ánh sáng + chất liệu + font từ Pinterest lên 1 bảng.',
          promptText: 'BÀI TẬP 3 (NGÀY 11-12): Mở FigJam -> Tạo Mindmap trung tâm "Cà phê sáng" -> Vẽ 4 nhánh (Âm thanh, Ánh sáng, Cảm giác, Thời gian) -> Tìm 5 hình ảnh ẩn dụ mới -> Gom 8 ảnh lên Moodboard (3 ảnh ánh sáng, 2 ảnh chất liệu, 2 ảnh font, 1 bảng 4 màu).',
          tools: [
            { name: 'FigJam', url: 'https://www.figma.com/figjam/' },
            { name: 'Pinterest', url: 'https://www.pinterest.com' },
            { name: 'Milanote', url: 'https://milanote.com' }
          ]
        },
        {
          id: 'ex4',
          dayRef: 13,
          level: 'Cấp 2 • Phối màu 60-30-10',
          title: 'Bài 4: Thử thách Re-color 1 mẫu Canva thành 3 phong cách',
          desc: 'Lấy 1 mẫu Poster miễn phí trên Canva, nhân bản thành 3 trang và đổi màu theo 3 cảm xúc hoàn toàn khác nhau: Sang trọng, Năng động và Tối giản.',
          promptText: 'BÀI TẬP 4 (NGÀY 13): Chọn 1 poster trên Canva Templates -> Nhân bản 3 bản -> Đổi màu theo 60-30-10:\n• Bản 1 (Sang trọng): #141210 / #F3EFE6 / #C8A253\n• Bản 2 (Năng động): #FFFBEB / #1E1B4B / #F97316\n• Bản 3 (Tối giản): #F8FAFC / #0F172A / #4D7C0F',
          tools: [
            { name: 'Canva Templates', url: 'https://www.canva.com/templates/' },
            { name: 'Coolors Visualizer', url: 'https://coolors.co/visualizer' }
          ]
        },
        {
          id: 'ex5',
          dayRef: 18,
          level: 'Cấp 3 • Biến tấu ý tưởng',
          title: 'Bài 5: Dùng SCAMPER "làm mới" 1 Poster sự kiện có sẵn',
          desc: 'Không bao giờ bí ý tưởng hay bị nói là đạo nhái: lấy 1 poster bất kỳ trên Pinterest và áp dụng 3 kỹ thuật Thay thế (S), Phóng đại (M), Đảo ngược (R) để tạo ra bản thiết kế của riêng bạn.',
          promptText: 'BÀI TẬP 5 (NGÀY 18): Chọn 1 poster trên Pinterest -> Dán vào FigJam -> Viết 3 ý tưởng cải biến:\n• S (Thay thế): Đổi nhân vật/vật thể chính thành đồ vật ẩn dụ khác.\n• M (Phóng đại): Phóng to 1 chi tiết hoặc tiêu đề chiếm 50% khung.\n• R (Đảo ngược): Đổi nền tối thành sáng (hoặc ngược lại).',
          tools: [
            { name: 'Pinterest', url: 'https://www.pinterest.com' },
            { name: 'FigJam', url: 'https://www.figma.com/figjam/' }
          ]
        },
        {
          id: 'ex6',
          dayRef: 20,
          level: 'Cấp 3 • Dự án thực chiến',
          title: 'Bài 6: Mini-Project Poster "Hoàng Hôn Acoustic" từ A–Z',
          desc: 'Thực hành trọn vẹn quy trình 3 ngày: Đọc Brief -> Phác thảo 3 bố cục trên giấy -> Chốt bảng màu 60-30-10 -> Dựng trên Canva/Figma -> Chạy Grayscale Check.',
          promptText: 'BÀI TẬP 6 (NGÀY 20-23): Thiết kế Poster dọc (1080x1350px) cho đêm nhạc "HOÀNG HÔN ACOUSTIC" (28/11 • 17:30 • Sân thượng Hồ Tây • Vé 150K). Phong cách: Ấm áp, lãng mạn chiều tà. Chạy Grayscale Check sau khi xong để chắc chắn chữ nổi bật.',
          tools: [
            { name: 'Canva', url: 'https://www.canva.com/vi_vn/' },
            { name: 'Figma', url: 'https://www.figma.com' },
            { name: 'Realtime Colors', url: 'https://www.realtimecolors.com' }
          ]
        }
      ];

      // Dữ liệu cho Brief Generator (Tạo Đề Bài Tự Động)
      const BRIEF_GEN_DATA = {
        types: {
          poster: { label: 'Poster sự kiện / Khuyến mãi (1080×1350px)', app: 'Canva hoặc Figma', appUrl: 'https://www.canva.com/vi_vn/' },
          social: { label: 'Bộ 3 ảnh Carousel Instagram / Facebook (1080×1080px)', app: 'Canva Templates', appUrl: 'https://www.canva.com/templates/' },
          landing: { label: 'Hero Section Landing Page Website (1440×900px)', app: 'Figma + Realtime Colors', appUrl: 'https://www.realtimecolors.com' },
          menu: { label: 'Thẻ Menu / Bảng giá sản phẩm (Khổ A5 dọc)', app: 'Canva hoặc Figma', appUrl: 'https://www.canva.com/vi_vn/' },
          app: { label: 'Màn hình chính ứng dụng di động (390×844px)', app: 'Figma + Mobbin', appUrl: 'https://www.figma.com' }
        },
        industries: {
          coffee: {
            brandNames: ['Tiệm Cà Phê Nắng Sớm', 'Mộc Roastery', 'Phin & Giấy', 'Koffi Lab'],
            audience: 'Nhân viên văn phòng và sinh viên 20–32 tuổi yêu thích không gian yên tĩnh, đồ uống thủ công.',
            goal: 'Thu hút khách ghé trải nghiệm menu đồ uống mới mùa thu và ưu đãi 20% khung giờ sáng.',
            elements: ['Tên thương hiệu + Slogan ngắn', 'Tên món nổi bật / Ưu đãi 20%', 'Giờ mở cửa & Địa chỉ', 'Nút hoặc mã QR đặt món']
          },
          music: {
            brandNames: ['Đêm Nhạc Phố Cũ', 'Indigo Live Session', 'Sóng Acoustic', 'Vinyl Night Club'],
            audience: 'Giới trẻ 18–28 tuổi yêu nhạc indie, thích tụ tập cuối tuần cùng bạn bè.',
            goal: 'Kêu gọi người xem bấm đặt vé sớm (Early Bird) trước thứ 6 tuần này.',
            elements: ['Tên đêm nhạc nổi bật', 'Ngày giờ & Địa điểm tổ chức', 'Tên 2 nghệ sĩ khách mời', 'Giá vé & Nút "Đặt vé ngay"']
          },
          tech: {
            brandNames: ['FocusFlow App', 'LingoSpark', 'MindNote AI', 'FinTrack'],
            audience: 'Sinh viên và người đi làm bận rộn muốn quản lý thời gian, học tập hiệu quả hơn.',
            goal: 'Thuyết phục người dùng tải ứng dụng và dùng thử miễn phí 14 ngày.',
            elements: ['Tiêu đề lợi ích chính (1 câu ngắn)', 'Mô tả 2 dòng ngắn gọn', 'Hình minh họa giao diện hoặc biểu tượng', 'Nút CTA "Dùng thử miễn phí"']
          },
          fashion: {
            brandNames: ['Linen & Calm', 'Tối Giản Studio', 'Sợi Mộc Wear', 'Urban Basic'],
            audience: 'Khách hàng 22–35 tuổi chuộng phong cách ăn mặc tinh tế, chất liệu tự nhiên.',
            goal: 'Ra mắt Bộ sưu tập mới và dẫn khách vào xem danh mục sản phẩm.',
            elements: ['Tên Bộ sưu tập (VD: Autumn 2026)', '1 câu mô tả tinh thần BST', 'Ảnh sản phẩm chủ đạo', 'Nút "Khám phá ngay"']
          },
          wellness: {
            brandNames: ['An Nhiên Yoga', 'Pulse Run Club', 'GreenBowl Kitchen', 'Breathe Studio'],
            audience: 'Người trẻ sống ở thành phố muốn rèn luyện sức khỏe, giảm căng thẳng sau giờ làm.',
            goal: 'Mời đăng ký buổi tập thử miễn phí cuối tuần này.',
            elements: ['Tiêu đề truyền cảm hứng sống khỏe', 'Lịch học / Giờ hoạt động', '3 lợi ích ngắn gọn (icon)', 'Nút "Đăng ký tập thử"']
          }
        },
        moods: {
          minimal: {
            label: 'Tối giản, sạch sẽ, nhiều khoảng trắng',
            palette: { bg60: '#F7F8FA', text30: '#141923', accent10: '#2563EB' },
            tip: 'Chừa ít nhất 35% diện tích trống, chỉ dùng 1 font không chân (Inter/Be Vietnam Pro) với 3 cỡ chữ rõ ràng.'
          },
          energetic: {
            label: 'Năng động, trẻ trung, nổi bật',
            palette: { bg60: '#FFFBEB', text30: '#1E1B4B', accent10: '#F97316' },
            tip: 'Dùng tiêu đề in hoa cỡ lớn, tạo tương phản mạnh giữa chữ đậm và nút CTA màu cam rực.'
          },
          luxury: {
            label: 'Sang trọng, tinh tế, nền tối sâu',
            palette: { bg60: '#121318', text30: '#F3EFE6', accent10: '#D4A853' },
            tip: 'Không dùng đen #000000 mà dùng đen pha sắc #121318; kết hợp font có chân (Serif) cho tiêu đề.'
          },
          warm: {
            label: 'Ấm áp, gần gũi, thủ công (Earthy)',
            palette: { bg60: '#F7F2EA', text30: '#2E1F16', accent10: '#C2592A' },
            tip: 'Tận dụng tông kem giấy và nâu đất; ưu tiên ánh sáng ấm, bo góc mềm mại cho khung ảnh.'
          }
        }
      };

      // 5 Năng lực cốt lõi kèm danh sách các ngày liên quan để gợi ý tự động
      const CORE_COMPETENCIES = [
        {
          id: 'c1',
          text: 'Không còn bị "bí ý tưởng" trước màn hình trắng vì đã có quy trình: Brief -> Mindmap -> Moodboard -> Sketch.',
          relatedDays: [2, 5, 11, 12, 20, 21, 26]
        },
        {
          id: 'c2',
          text: 'Tự tin chọn bảng màu hài hòa theo tỷ lệ 60-30-10 mà không cần phụ thuộc hoàn toàn vào các bảng màu có sẵn.',
          relatedDays: [1, 3, 4, 8, 13, 21, 24]
        },
        {
          id: 'c3',
          text: 'Biết cách xử lý màu sáng/tối tự nhiên bằng Hue Shifting và Neutrals.',
          relatedDays: [10, 15, 16, 17, 27]
        },
        {
          id: 'c4',
          text: 'Đảm bảo mọi thiết kế đều dễ đọc, có chiều sâu nhờ Contrast Check và Grayscale Check.',
          relatedDays: [9, 14, 19, 23, 25, 29]
        },
        {
          id: 'c5',
          text: 'Có ít nhất 2 sản phẩm hoàn chỉnh (Mini-project & Dự án cuối) để lưu vào Portfolio.',
          relatedDays: [22, 28, 30]
        }
      ];

      // 16 Công cụ khuyên dùng (có gắn nhãn Cho Newbie và nhóm lọc)
      const RECOMMENDED_TOOLS = [
        { name: 'Canva', tag: 'Thiết kế dễ nhất', group: 'idea', newbie: true, desc: 'Thiết kế Poster, Slide, Social Media bằng kéo-thả siêu dễ cho người mới 0 kinh nghiệm.', url: 'https://www.canva.com/vi_vn/' },
        { name: 'Color Game (Method.ac)', tag: 'Game luyện mắt', group: 'color', newbie: true, desc: 'Trò chơi khớp màu trực tiếp trên trình duyệt giúp rèn cảm quan Hue, Saturation & Harmony.', url: 'https://color.method.ac/' },
        { name: 'Adobe Color', tag: 'Phối màu', group: 'color', newbie: true, desc: 'Tạo bảng màu theo 5 quy tắc bánh xe màu & trích xuất màu tự động từ bất kỳ ảnh nào.', url: 'https://color.adobe.com/create/color-wheel' },
        { name: 'Coolors', tag: 'Phối màu', group: 'color', newbie: true, desc: 'Sinh nhanh bộ màu hài hòa và xem trước bảng màu trên layout mẫu bằng Visualizer.', url: 'https://coolors.co/' },
        { name: 'Color Hunt', tag: 'Bảng màu mẫu', group: 'color', newbie: true, desc: 'Thư viện bảng màu 4 ô chọn lọc sẵn theo chủ đề Ấm, Lạnh, Pastel, Tối giản.', url: 'https://colorhunt.co/' },
        { name: 'WebAIM Contrast Checker', tag: 'Tương phản', group: 'color', newbie: true, desc: 'Kiểm tra tỷ lệ tương phản chữ/nền theo chuẩn WCAG AA/AAA để chữ luôn dễ đọc.', url: 'https://webaim.org/resources/contrastchecker/' },
        { name: 'Realtime Colors', tag: 'Color System', group: 'color', newbie: false, desc: 'Xem trước bộ màu 60-30-10 trên bố cục website thực tế ngay lập tức.', url: 'https://www.realtimecolors.com' },
        { name: 'UI Colors (Tailwind)', tag: 'Hue Shifting', group: 'color', newbie: false, desc: 'Tạo tự động dải 11 sắc độ sáng-tối có Hue Shifting cực mượt từ 1 mã màu HEX.', url: 'https://uicolors.app/generate' },
        { name: 'Huemint', tag: 'AI Phối màu', group: 'color', newbie: false, desc: 'Dùng AI gợi ý bảng màu và ướm trực tiếp lên mẫu website, poster, thương hiệu.', url: 'https://huemint.com/' },
        { name: 'Pinterest', tag: 'Lên Idea', group: 'idea', newbie: true, desc: 'Xây dựng Visual Library phân loại theo Layout, Color và Typography.', url: 'https://www.pinterest.com' },
        { name: 'Behance', tag: 'Lên Idea', group: 'idea', newbie: false, desc: 'Nghiên cứu case study hoàn chỉnh từ Brief, Moodboard đến thành phẩm.', url: 'https://www.behance.net' },
        { name: 'Mobbin', tag: 'Web/UI Idea', group: 'idea', newbie: false, desc: 'Thư viện tham khảo luồng giao diện và hệ thống màu ứng dụng thực tế.', url: 'https://mobbin.com' },
        { name: 'Milanote', tag: 'Moodboard', group: 'idea', newbie: true, desc: 'Sắp xếp Moodboard, ảnh tham khảo và ghi chú ý tưởng trực quan cực mượt.', url: 'https://milanote.com' },
        { name: 'FigJam', tag: 'Mindmap', group: 'idea', newbie: true, desc: 'Vẽ Mindmap 3 tầng, chạy SCAMPER và gom Moodboard trực tuyến miễn phí.', url: 'https://www.figma.com/figjam/' },
        { name: 'Figma', tag: 'Thực thi UI', group: 'idea', newbie: false, desc: 'Công cụ chuẩn ngành miễn phí để xây Color System và thiết kế giao diện.', url: 'https://www.figma.com' },
        { name: 'Good Brief & Sharpen', tag: 'Tạo Đề Bài', group: 'idea', newbie: true, desc: 'Tự động sinh đề bài khách hàng giả lập để luyện tập làm Mini-project & Portfolio.', url: 'https://goodbrief.io/' }
      ];

      // Màu sắc nhãn cho từng mảng kỹ năng
      const CATEGORY_STYLES = {
        'Phối màu': 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-800/60',
        'Lên Idea': 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800/60',
        'Thực hành': 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800/60',
        'Dự án cuối': 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800/60',
        'Tổng hợp': 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-300 dark:border-sky-800/60',
        'Nghỉ & Ôn': 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800/80 dark:text-slate-300 dark:border-slate-700',
        'Phản biện': 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-800/60',
        'Tổng kết': 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-300 dark:border-teal-800/60'
      };

      const REVIEW_GROUP_CATEGORIES = ['Tổng hợp', 'Nghỉ & Ôn', 'Phản biện', 'Tổng kết'];
      const STORAGE_KEY = 'studio_roadmap_30_days_v1';
      const USERS_STORAGE_KEY = 'studio_roadmap_users_v1';
      const SESSION_STORAGE_KEY = 'studio_roadmap_session_v1';
      let currentUser = null; // { name, email } hoặc null (chế độ Khách)
      let activeAuthTab = 'register'; // 'login' | 'register'

      // =========================================================================
      // 2. QUẢN LÝ TRẠNG THÁI (STATE) & LOCALSTORAGE
      // =========================================================================
      let state = {
        completedDays: {},       // { [dayNumber]: true }
        notes: {},               // { [dayNumber]: { text: '', link: '' } }
        competencies: {},        // { [compId]: true }
        viewMode: 'roadmap',     // 'roadmap' | 'table'
        theme: 'system',         // 'light' | 'dark' | 'system'
      };

      let filters = {
        search: '',
        phase: 'all',
        category: 'all',
        status: 'all'
      };

      let activeModalDay = null;
      let activeHubTab = 'guide';
      let activeToolFilter = 'all';
      let currentGeneratedBriefText = '';

      // State cho Widget HSB & 60-30-10 (hỗ trợ cả Tự động & Chỉnh riêng từng phần)
      let hsbState = {
        mode: 'auto',          // 'auto' | 'manual'
        activePart: 'accent10', // 'bg60' | 'text30' | 'accent10'
        h: 243,
        s: 69,
        b: 90,
        parts: {
          bg60: { h: 243, s: 8, b: 97 },
          text30: { h: 243, s: 28, b: 22 },
          accent10: { h: 243, s: 69, b: 90 }
        },
        previewDark: false,
        grayscale: false,
        currentHex60: '#F6F6FC',
        currentHex30: '#1D1C33',
        currentHex10: '#4F46E5'
      };

      function updateSaveStatusUI(customLabel) {
        const el = document.getElementById('saveStatusLabel');
        if (!el) return;
        const now = new Date();
        const hh = String(now.getHours()).padStart(2, '0');
        const mm = String(now.getMinutes()).padStart(2, '0');
        const text = customLabel || `Đã tự động lưu lúc ${hh}:${mm}`;
        el.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span><span>${escapeHtml(text)}</span>`;
      }

      /** Gom toàn bộ trạng thái hiện tại của website thành 1 object để lưu/xuất */
      function buildFullStateSnapshot() {
        return {
          version: 2,
          updatedAt: new Date().toISOString(),
          completedDays: state.completedDays,
          notes: state.notes,
          competencies: state.competencies,
          viewMode: state.viewMode,
          theme: state.theme,
          filters: { ...filters },
          activeHubTab: activeHubTab,
          activeToolFilter: activeToolFilter,
          hsbState: {
            mode: hsbState.mode,
            activePart: hsbState.activePart,
            h: hsbState.h,
            s: hsbState.s,
            b: hsbState.b,
            parts: {
              bg60: { ...hsbState.parts.bg60 },
              text30: { ...hsbState.parts.text30 },
              accent10: { ...hsbState.parts.accent10 }
            },
            previewDark: hsbState.previewDark,
            grayscale: hsbState.grayscale
          }
        };
      }

      /** Áp dụng dữ liệu trạng thái đã lưu (từ localStorage, file JSON hoặc server local) */
      function applyLoadedSnapshot(parsed) {
        if (!parsed || typeof parsed !== 'object') return false;
        // Hỗ trợ cả định dạng xuất cũ (progress) và định dạng đầy đủ mới (completedDays)
        const srcProgress = parsed.completedDays || parsed.progress;
        if (srcProgress && typeof srcProgress === 'object') state.completedDays = srcProgress;
        if (parsed.notes && typeof parsed.notes === 'object') state.notes = parsed.notes;
        if (parsed.competencies && typeof parsed.competencies === 'object') state.competencies = parsed.competencies;
        if (parsed.viewMode === 'table' || parsed.viewMode === 'roadmap') state.viewMode = parsed.viewMode;
        if (parsed.theme === 'light' || parsed.theme === 'dark' || parsed.theme === 'system') state.theme = parsed.theme;

        if (parsed.filters && typeof parsed.filters === 'object') {
          filters.search = typeof parsed.filters.search === 'string' ? parsed.filters.search : '';
          filters.phase = parsed.filters.phase || 'all';
          filters.category = parsed.filters.category || 'all';
          filters.status = parsed.filters.status || 'all';
        }
        if (['guide', 'exercises', 'generator'].includes(parsed.activeHubTab)) {
          activeHubTab = parsed.activeHubTab;
        }
        if (['all', 'newbie', 'color', 'idea'].includes(parsed.activeToolFilter)) {
          activeToolFilter = parsed.activeToolFilter;
        }
        if (parsed.hsbState && typeof parsed.hsbState === 'object') {
          const hs = parsed.hsbState;
          if (hs.mode === 'manual' || hs.mode === 'auto') hsbState.mode = hs.mode;
          if (['bg60', 'text30', 'accent10'].includes(hs.activePart)) hsbState.activePart = hs.activePart;
          if (typeof hs.h === 'number') hsbState.h = hs.h;
          if (typeof hs.s === 'number') hsbState.s = hs.s;
          if (typeof hs.b === 'number') hsbState.b = hs.b;
          if (hs.parts && hs.parts.bg60 && hs.parts.text30 && hs.parts.accent10) {
            hsbState.parts = {
              bg60: { ...hs.parts.bg60 },
              text30: { ...hs.parts.text30 },
              accent10: { ...hs.parts.accent10 }
            };
          }
          if (typeof hs.previewDark === 'boolean') hsbState.previewDark = hs.previewDark;
          if (typeof hs.grayscale === 'boolean') hsbState.grayscale = hs.grayscale;
        }
        return true;
      }

      /** Đồng bộ các ô lọc giao diện với biến filters sau khi tải trạng thái */
      function syncFilterControlsUI() {
        const sEl = document.getElementById('searchInput');
        const pEl = document.getElementById('phaseFilter');
        const cEl = document.getElementById('categoryFilter');
        const stEl = document.getElementById('statusFilter');
        if (sEl) sEl.value = filters.search;
        if (pEl) pEl.value = filters.phase;
        if (cEl) cEl.value = filters.category;
        if (stEl) stEl.value = filters.status;
      }

      function getActiveStorageKey() {
        return currentUser && currentUser.email
          ? `${STORAGE_KEY}::${currentUser.email.toLowerCase()}`
          : STORAGE_KEY;
      }

      function resetStateToDefaultsInMemory() {
        state.completedDays = {};
        state.notes = {};
        state.competencies = {};
        state.viewMode = 'roadmap';
        filters = { search: '', phase: 'all', category: 'all', status: 'all' };
        activeHubTab = 'guide';
        activeToolFilter = 'all';
      }

      /** Tải trạng thái từ localStorage an toàn (theo tài khoản đang đăng nhập hoặc Khách) */
      function loadState() {
        resetStateToDefaultsInMemory();
        try {
          const raw = localStorage.getItem(getActiveStorageKey());
          if (raw) {
            applyLoadedSnapshot(JSON.parse(raw));
          }
        } catch (err) {
          console.warn('Không thể đọc localStorage:', err);
        }
      }

      /** Lưu toàn bộ trạng thái hiện tại của website */
      function saveState() {
        const snapshot = buildFullStateSnapshot();
        try {
          localStorage.setItem(getActiveStorageKey(), JSON.stringify(snapshot));
          const labelSuffix = currentUser ? ` (${currentUser.email})` : '';
          const now = new Date();
          const hh = String(now.getHours()).padStart(2, '0');
          const mm = String(now.getMinutes()).padStart(2, '0');
          updateSaveStatusUI(`Đã tự động lưu lúc ${hh}:${mm}${labelSuffix}`);
        } catch (err) {
          console.warn('Không thể ghi localStorage:', err);
        }
        if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
          const emailKey = currentUser && currentUser.email ? currentUser.email.toLowerCase() : 'guest';
          fetch('api/state', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: emailKey, state: snapshot })
          }).then((res) => {
            if (res.ok) updateSaveStatusUI(`Đã lưu vào progress_data.json (${emailKey})`);
          }).catch(() => {});
        }
      }

      // =========================================================================
      // HỆ THỐNG TÀI KHOẢN EMAIL (ĐĂNG KÝ / ĐĂNG NHẬP / ĐĂNG XUẤT)
      // =========================================================================
      async function hashPasswordClient(email, password) {
        const raw = `${email.toLowerCase()}::studio_roadmap_salt::${password}`;
        try {
          if (window.crypto && window.crypto.subtle) {
            const data = new TextEncoder().encode(raw);
            const hashBuf = await window.crypto.subtle.digest('SHA-256', data);
            return Array.from(new Uint8Array(hashBuf)).map((b) => b.toString(16).padStart(2, '0')).join('');
          }
        } catch (err) {
          // Fallback hash nhẹ nếu trình duyệt không hỗ trợ crypto.subtle
        }
        let h = 2166136261;
        for (let i = 0; i < raw.length; i++) {
          h ^= raw.charCodeAt(i);
          h = Math.imul(h, 16777619);
        }
        return 'fnv_' + (h >>> 0).toString(16);
      }

      function loadLocalUsersMap() {
        try {
          return JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) || '{}');
        } catch (err) {
          return {};
        }
      }

      function saveLocalUsersMap(map) {
        try {
          localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(map));
        } catch (err) {
          console.warn('Không thể lưu danh sách tài khoản:', err);
        }
      }

      function loadSessionUser() {
        try {
          const raw = localStorage.getItem(SESSION_STORAGE_KEY);
          if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && parsed.email) currentUser = parsed;
          }
        } catch (err) {
          currentUser = null;
        }
      }

      function saveSessionUser(userObj) {
        currentUser = userObj;
        try {
          if (userObj) {
            localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(userObj));
          } else {
            localStorage.removeItem(SESSION_STORAGE_KEY);
          }
        } catch (err) {
          console.warn('Không thể lưu phiên đăng nhập:', err);
        }
      }

      function updateAuthHeaderUI() {
        const avatarEl = document.getElementById('authHeaderAvatar');
        const labelEl = document.getElementById('authHeaderLabel');
        if (!avatarEl || !labelEl) return;

        if (currentUser && currentUser.email) {
          const initial = (currentUser.name || currentUser.email).trim().charAt(0).toUpperCase();
          avatarEl.textContent = initial;
          avatarEl.className = 'w-5 h-5 rounded-full bg-accent text-white flex items-center justify-center text-[11px] font-bold shrink-0';
          labelEl.textContent = currentUser.name || currentUser.email;
        } else {
          avatarEl.innerHTML = '<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
          avatarEl.className = 'w-5 h-5 rounded-full bg-accent/15 text-accent dark:text-accent-dark flex items-center justify-center text-[11px] font-bold shrink-0';
          labelEl.textContent = 'Đăng nhập';
        }
      }

      function showAuthError(msg) {
        const box = document.getElementById('authErrorBox');
        if (!box) return;
        if (!msg) {
          box.classList.add('hidden');
          box.textContent = '';
        } else {
          box.textContent = msg;
          box.classList.remove('hidden');
        }
      }

      function switchAuthTab(tab) {
        activeAuthTab = tab;
        showAuthError('');
        const loginBtn = document.getElementById('authTabLoginBtn');
        const regBtn = document.getElementById('authTabRegisterBtn');
        const loginForm = document.getElementById('loginForm');
        const regForm = document.getElementById('registerForm');

        const activeCls = ['bg-studio-card', 'dark:bg-studio-darkCard', 'text-accent', 'dark:text-accent-dark', 'shadow-sm'];
        const inactiveCls = ['text-studio-muted', 'dark:text-studio-darkMuted'];

        if (tab === 'login') {
          loginBtn.classList.add(...activeCls);
          loginBtn.classList.remove(...inactiveCls);
          regBtn.classList.remove(...activeCls);
          regBtn.classList.add(...inactiveCls);
          loginForm.classList.remove('hidden');
          regForm.classList.add('hidden');
        } else {
          regBtn.classList.add(...activeCls);
          regBtn.classList.remove(...inactiveCls);
          loginBtn.classList.remove(...activeCls);
          loginBtn.classList.add(...inactiveCls);
          regForm.classList.remove('hidden');
          loginForm.classList.add('hidden');
        }
      }

      function openAuthModal(defaultTab = 'register') {
        showAuthError('');
        const formsView = document.getElementById('authFormsView');
        const profileView = document.getElementById('authProfileView');

        if (currentUser && currentUser.email) {
          formsView.classList.add('hidden');
          profileView.classList.remove('hidden');
          const doneCount = ROADMAP_DAYS.filter((d) => state.completedDays[d.day]).length;
          document.getElementById('profileAvatarCircle').textContent = (currentUser.name || currentUser.email).charAt(0).toUpperCase();
          document.getElementById('profileNameText').textContent = currentUser.name || 'Học viên Design';
          document.getElementById('profileEmailText').textContent = currentUser.email;
          document.getElementById('profileProgressSummary').textContent = `Đã hoàn thành ${doneCount} / 30 ngày`;
        } else {
          profileView.classList.add('hidden');
          formsView.classList.remove('hidden');
          switchAuthTab(defaultTab);
        }

        const modal = document.getElementById('authModal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }

      function closeAuthModal() {
        const modal = document.getElementById('authModal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }

      function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      }

      async function handleRegisterSubmit(e) {
        e.preventDefault();
        const name = document.getElementById('regNameInput').value.trim();
        const email = document.getElementById('regEmailInput').value.trim().toLowerCase();
        const password = document.getElementById('regPasswordInput').value;
        const confirmPw = document.getElementById('regConfirmPasswordInput').value;

        if (!name) return showAuthError('Vui lòng nhập tên hiển thị của bạn.');
        if (!isValidEmail(email)) return showAuthError('Địa chỉ Email chưa đúng định dạng (VD: ten@gmail.com).');
        if (password.length < 6) return showAuthError('Mật khẩu cần tối thiểu 6 ký tự.');
        if (password !== confirmPw) return showAuthError('Mật khẩu nhập lại chưa khớp.');

        const currentGuestSnapshot = buildFullStateSnapshot();

        if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
          try {
            const res = await fetch('api/register', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ name, email, password, initialState: currentGuestSnapshot })
            });
            const data = await res.json();
            if (!res.ok) return showAuthError(data.error || 'Không thể đăng ký tài khoản.');
            saveSessionUser({ name: data.user.name, email: data.user.email });
            applyLoadedSnapshot(currentGuestSnapshot);
            saveState();
            updateAuthHeaderUI();
            closeAuthModal();
            document.getElementById('registerForm').reset();
            showToast(`Đã đăng ký & lưu tài khoản ${email} vào users_db.json!`, 'success');
            return;
          } catch (err) {
            // Rơi về localStorage nếu không chạy qua server.py
          }
        }

        const users = loadLocalUsersMap();
        if (users[email]) {
          return showAuthError('Email này đã được đăng ký trước đó. Hãy chuyển sang tab Đăng nhập.');
        }

        const passwordHash = await hashPasswordClient(email, password);
        users[email] = { name, email, passwordHash, createdAt: new Date().toISOString() };
        saveLocalUsersMap(users);

        saveSessionUser({ name, email });
        applyLoadedSnapshot(currentGuestSnapshot);
        saveState();
        updateAuthHeaderUI();
        closeAuthModal();
        document.getElementById('registerForm').reset();
        showToast(`Chào mừng ${name}! Đã tạo tài khoản ${email} thành công.`, 'success');
      }

      async function handleLoginSubmit(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmailInput').value.trim().toLowerCase();
        const password = document.getElementById('loginPasswordInput').value;

        if (!isValidEmail(email)) return showAuthError('Vui lòng nhập đúng địa chỉ Email.');
        if (!password) return showAuthError('Vui lòng nhập mật khẩu.');

        if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
          try {
            const res = await fetch('api/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            if (!res.ok) return showAuthError(data.error || 'Email hoặc mật khẩu không đúng.');
            saveSessionUser({ name: data.user.name, email: data.user.email });
            resetStateToDefaultsInMemory();
            if (data.state && Object.keys(data.state).length > 0) {
              applyLoadedSnapshot(data.state);
            } else {
              loadState();
            }
            applyTheme();
            syncFilterControlsUI();
            switchHubTab(activeHubTab);
            renderTools();
            syncSlidersToActiveHsb();
            renderAll();
            updateAuthHeaderUI();
            closeAuthModal();
            document.getElementById('loginForm').reset();
            showToast(`Chào mừng trở lại, ${data.user.name}!`, 'success');
            return;
          } catch (err) {
            // Rơi về localStorage nếu không chạy qua server.py
          }
        }

        const users = loadLocalUsersMap();
        const userRec = users[email];
        if (!userRec) {
          return showAuthError('Không tìm thấy tài khoản với Email này. Hãy bấm tab Đăng ký Email.');
        }

        const passwordHash = await hashPasswordClient(email, password);
        if (userRec.passwordHash !== passwordHash) {
          return showAuthError('Mật khẩu không đúng. Vui lòng thử lại.');
        }

        saveSessionUser({ name: userRec.name, email: userRec.email });
        loadState();
        applyTheme();
        syncFilterControlsUI();
        switchHubTab(activeHubTab);
        renderTools();
        syncSlidersToActiveHsb();
        renderAll();
        updateAuthHeaderUI();
        closeAuthModal();
        document.getElementById('loginForm').reset();
        showToast(`Đã đăng nhập tài khoản ${userRec.name} (${userRec.email})!`, 'success');
      }

      function handleLogout() {
        const oldEmail = currentUser ? currentUser.email : '';
        saveSessionUser(null);
        loadState();
        applyTheme();
        syncFilterControlsUI();
        switchHubTab(activeHubTab);
        renderTools();
        syncSlidersToActiveHsb();
        renderAll();
        updateAuthHeaderUI();
        closeAuthModal();
        showToast(`Đã đăng xuất khỏi ${oldEmail}.`, 'info');
      }

      // =========================================================================
      // 3. TIỆN ÍCH CHUNG (TOAST, COPY, ESCAPE HTML, FORMAT)
      // =========================================================================

      /** Hiển thị thông báo Toast góc dưới phải */
      function showToast(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        const colorClasses =
          type === 'success'
            ? 'bg-emerald-600 text-white border-emerald-500'
            : type === 'error'
              ? 'bg-rose-600 text-white border-rose-500'
              : 'bg-studio-ink dark:bg-studio-darkSubtle text-white border-slate-700';

        toast.className = `pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium shadow-studio-lg border transition-all duration-300 translate-y-2 opacity-0 ${colorClasses}`;
        toast.textContent = message;
        container.appendChild(toast);

        requestAnimationFrame(() => {
          toast.classList.remove('translate-y-2', 'opacity-0');
        });

        setTimeout(() => {
          toast.classList.add('translate-y-2', 'opacity-0');
          setTimeout(() => toast.remove(), 300);
        }, 2800);
      }

      /** Copy văn bản bằng document.execCommand('copy') để tương thích iframe */
      function copyTextToClipboard(text, customMessage) {
        try {
          const textarea = document.createElement('textarea');
          textarea.value = text;
          textarea.setAttribute('readonly', '');
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          showToast(customMessage || `Đã sao chép ${text}`, 'success');
        } catch (err) {
          showToast('Không thể sao chép tự động, vui lòng copy thủ công.', 'error');
        }
      }

      /** Tránh XSS khi hiển thị dữ liệu chuỗi */
      function escapeHtml(str) {
        return String(str || '')
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;');
      }

      function formatDayNum(day) {
        return day < 10 ? `0${day}` : `${day}`;
      }

      function getCategoryBadgeClass(cat) {
        return CATEGORY_STYLES[cat] || 'bg-slate-100 text-slate-700 border-slate-200';
      }

      /** Render chip website/app thực hành (hỗ trợ cả link ngoài và shortcut nội bộ) */
      function renderToolChipHtml(tool, compact = false) {
        const sizeClass = compact ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs';
        if (tool.url === '#hsb-lab') {
          return `
            <button
              type="button"
              data-shortcut-action="open-hsb"
              class="inline-flex items-center gap-1 ${sizeClass} rounded-lg font-semibold bg-accent-light text-accent dark:bg-accent/20 dark:text-accent-dark border border-accent/20 hover:bg-accent hover:text-white transition-colors"
            >
              <span>${escapeHtml(tool.name)}</span>
            </button>
          `;
        }
        if (tool.url === '#brief-generator') {
          return `
            <button
              type="button"
              data-shortcut-action="open-brief-gen"
              class="inline-flex items-center gap-1 ${sizeClass} rounded-lg font-semibold bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 hover:bg-amber-500 hover:text-white transition-colors"
            >
              <span>${escapeHtml(tool.name)}</span>
            </button>
          `;
        }
        return `
          <a
            href="${escapeHtml(tool.url)}"
            target="_blank"
            rel="noopener noreferrer"
            data-stop-row="true"
            class="inline-flex items-center gap-1 ${sizeClass} rounded-lg font-semibold bg-studio-subtle dark:bg-studio-darkSubtle text-studio-ink dark:text-studio-darkInk border border-studio-border dark:border-studio-darkBorder hover:border-accent hover:text-accent dark:hover:text-accent-dark transition-colors"
          >
            <span>${escapeHtml(tool.name)}</span>
            <svg class="w-3 h-3 opacity-60 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        `;
      }

      // =========================================================================
      // 4. LIGHT / DARK MODE
      // =========================================================================
      function applyTheme() {
        const htmlEl = document.documentElement;
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const useDark = state.theme === 'dark' || (state.theme === 'system' && prefersDark);

        if (useDark) {
          htmlEl.classList.add('dark');
        } else {
          htmlEl.classList.remove('dark');
        }
      }

      function toggleTheme() {
        const isCurrentlyDark = document.documentElement.classList.contains('dark');
        state.theme = isCurrentlyDark ? 'light' : 'dark';
        applyTheme();
        saveState();
      }

      // =========================================================================
      // 5. LỌC DỮ LIỆU & RENDER DASHBOARD
      // =========================================================================
      function getFilteredDays() {
        const query = filters.search.trim().toLowerCase();

        return ROADMAP_DAYS.filter((item) => {
          if (filters.phase !== 'all' && String(item.phase) !== String(filters.phase)) {
            return false;
          }

          if (filters.category !== 'all') {
            if (filters.category === 'review_group') {
              if (!REVIEW_GROUP_CATEGORIES.includes(item.category)) return false;
            } else if (item.category !== filters.category) {
              return false;
            }
          }

          const isDone = Boolean(state.completedDays[item.day]);
          if (filters.status === 'done' && !isDone) return false;
          if (filters.status === 'todo' && isDone) return false;

          if (query) {
            const noteObj = state.notes[item.day] || {};
            const toolNames = (item.tools || []).map((t) => t.name).join(' ');
            const haystack = [
              `ngày ${item.day}`,
              `ngày ${formatDayNum(item.day)}`,
              item.category,
              item.task,
              item.outcome,
              toolNames,
              item.example || '',
              noteObj.text || '',
              noteObj.link || ''
            ].join(' ').toLowerCase();

            if (!haystack.includes(query)) return false;
          }

          return true;
        });
      }

      /** Cập nhật toàn bộ số liệu Dashboard */
      function renderDashboard() {
        const total = ROADMAP_DAYS.length;
        const completedCount = ROADMAP_DAYS.filter((d) => state.completedDays[d.day]).length;
        const percent = Math.round((completedCount / total) * 100);

        document.getElementById('totalCompletedCount').textContent = completedCount;
        document.getElementById('totalProgressPercent').textContent = `${percent}%`;
        document.getElementById('totalProgressBar').style.width = `${percent}%`;

        const statusBadge = document.getElementById('statusBadgeText');
        if (completedCount === 0) {
          statusBadge.textContent = 'Sẵn sàng khởi động Ngày 01 • 1–1.5 giờ/ngày';
        } else if (completedCount < 8) {
          statusBadge.textContent = 'Đang xây dựng nền tảng vững chắc';
        } else if (completedCount < 15) {
          statusBadge.textContent = 'Đang tăng tốc phân tích & tái tạo';
        } else if (completedCount < 23) {
          statusBadge.textContent = 'Đang làm chủ kỹ thuật nâng cao';
        } else if (completedCount < 30) {
          statusBadge.textContent = 'Sắp cán đích 30 ngày! Cố lên!';
        } else {
          statusBadge.textContent = 'Chúc mừng! Bạn đã hoàn thành trọn vẹn Roadmap 30 ngày!';
        }

        const phaseStatsEl = document.getElementById('phaseStatsContainer');
        phaseStatsEl.innerHTML = PHASES.map((phase) => {
          const daysInPhase = ROADMAP_DAYS.filter((d) => d.phase === phase.id);
          const doneInPhase = daysInPhase.filter((d) => state.completedDays[d.day]).length;
          const pct = Math.round((doneInPhase / daysInPhase.length) * 100);
          const isSelected = String(filters.phase) === String(phase.id);

          return `
            <button
              type="button"
              data-quick-phase="${phase.id}"
              class="text-left p-3.5 rounded-xl border transition-all active:scale-[0.99] ${
                isSelected
                  ? 'border-accent bg-accent-light/50 dark:bg-accent/15'
                  : 'border-studio-border dark:border-studio-darkBorder bg-studio-bg/60 dark:bg-studio-darkSubtle/60 hover:border-accent/50'
              }"
            >
              <div class="flex items-center justify-between gap-2 mb-1">
                <span class="text-xs font-bold text-studio-ink dark:text-studio-darkInk truncate">Giai đoạn ${phase.id}</span>
                <span class="text-xs font-mono font-bold text-studio-muted dark:text-studio-darkMuted">${doneInPhase}/${daysInPhase.length}</span>
              </div>
              <p class="text-[11px] text-studio-muted dark:text-studio-darkMuted truncate mb-2.5">${escapeHtml(phase.title.replace(/^Giai đoạn \d:\s*/, ''))}</p>
              <div class="w-full h-2 rounded-full bg-studio-border/80 dark:bg-studio-darkBorder overflow-hidden">
                <div class="h-full rounded-full ${phase.accentClass} transition-all duration-500" style="width: ${pct}%"></div>
              </div>
            </button>
          `;
        }).join('');

        phaseStatsEl.querySelectorAll('[data-quick-phase]').forEach((btn) => {
          btn.addEventListener('click', () => {
            const clickedPhase = btn.getAttribute('data-quick-phase');
            filters.phase = filters.phase === clickedPhase ? 'all' : clickedPhase;
            document.getElementById('phaseFilter').value = filters.phase;
            renderAll();
          });
        });

        const skillGroups = [
          { label: 'Phối màu', colorBar: 'bg-indigo-500', matcher: (d) => d.category === 'Phối màu' },
          { label: 'Lên Idea', colorBar: 'bg-amber-500', matcher: (d) => d.category === 'Lên Idea' },
          { label: 'Thực hành & Dự án', colorBar: 'bg-emerald-500', matcher: (d) => d.category === 'Thực hành' || d.category === 'Dự án cuối' },
          { label: 'Ôn tập, Tổng hợp & Phản biện', colorBar: 'bg-sky-500', matcher: (d) => REVIEW_GROUP_CATEGORIES.includes(d.category) }
        ];

        const catStatsEl = document.getElementById('categoryStatsContainer');
        catStatsEl.innerHTML = skillGroups.map((grp) => {
          const matchedDays = ROADMAP_DAYS.filter(grp.matcher);
          const done = matchedDays.filter((d) => state.completedDays[d.day]).length;
          const pct = matchedDays.length ? Math.round((done / matchedDays.length) * 100) : 0;

          return `
            <div>
              <div class="flex items-center justify-between text-xs mb-1.5">
                <span class="font-semibold text-studio-ink dark:text-studio-darkInk">${grp.label}</span>
                <span class="font-mono text-studio-muted dark:text-studio-darkMuted">${done}/${matchedDays.length} ngày (${pct}%)</span>
              </div>
              <div class="w-full h-2.5 rounded-full bg-studio-subtle dark:bg-studio-darkSubtle overflow-hidden">
                <div class="h-full rounded-full ${grp.colorBar} transition-all duration-500" style="width: ${pct}%"></div>
              </div>
            </div>
          `;
        }).join('');
      }

      // =========================================================================
      // 6. RENDER VIEW SWITCHER & ROADMAP (VISUAL TIMELINE + BẢNG)
      // =========================================================================
      function updateViewSwitcherUI() {
        const roadmapBtn = document.getElementById('viewRoadmapBtn');
        const tableBtn = document.getElementById('viewTableBtn');

        const activeClasses = ['bg-studio-card', 'dark:bg-studio-darkCard', 'text-accent', 'dark:text-accent-dark', 'shadow-sm'];
        const inactiveClasses = ['text-studio-muted', 'dark:text-studio-darkMuted', 'hover:text-studio-ink', 'dark:hover:text-white'];

        if (state.viewMode === 'roadmap') {
          roadmapBtn.classList.add(...activeClasses);
          roadmapBtn.classList.remove(...inactiveClasses);
          tableBtn.classList.remove(...activeClasses);
          tableBtn.classList.add(...inactiveClasses);
        } else {
          tableBtn.classList.add(...activeClasses);
          tableBtn.classList.remove(...inactiveClasses);
          roadmapBtn.classList.remove(...activeClasses);
          roadmapBtn.classList.add(...inactiveClasses);
        }
      }

      function renderRoadmapContent() {
        const container = document.getElementById('roadmapDisplayArea');
        const filteredDays = getFilteredDays();

        const hasActiveFilter =
          filters.search.trim() !== '' ||
          filters.phase !== 'all' ||
          filters.category !== 'all' ||
          filters.status !== 'all';

        document.getElementById('filterResultInfo').textContent = `Đang hiển thị ${filteredDays.length} / 30 ngày`;
        document.getElementById('resetFiltersBtn').classList.toggle('hidden', !hasActiveFilter);
        document.getElementById('clearSearchBtn').classList.toggle('hidden', filters.search.trim() === '');

        if (filteredDays.length === 0) {
          container.innerHTML = `
            <div class="rounded-2xl bg-studio-card dark:bg-studio-darkCard border border-dashed border-studio-border dark:border-studio-darkBorder p-10 text-center space-y-3">
              <div class="w-12 h-12 mx-auto rounded-2xl bg-studio-subtle dark:bg-studio-darkSubtle flex items-center justify-center text-studio-muted">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <h4 class="text-base font-bold">Không tìm thấy ngày học phù hợp</h4>
              <p class="text-sm text-studio-muted dark:text-studio-darkMuted">Thử thay đổi từ khóa hoặc xóa bộ lọc đang áp dụng.</p>
              <button
                id="emptyResetFiltersBtn"
                type="button"
                class="inline-flex items-center px-4 py-2 rounded-xl bg-accent hover:bg-accent-hover text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                Hiển thị lại tất cả 30 ngày
              </button>
            </div>
          `;
          const btn = document.getElementById('emptyResetFiltersBtn');
          if (btn) btn.addEventListener('click', resetAllFilters);
          return;
        }

        if (state.viewMode === 'roadmap') {
          renderVisualRoadmap(container, filteredDays);
        } else {
          renderTableRoadmap(container, filteredDays);
        }

        bindDayInteractionEvents(container);
      }

      /** Chế độ 1: Visual Roadmap chia 4 chặng với trục nối timeline + web/app chips */
      function renderVisualRoadmap(container, filteredDays) {
        const phasesHtml = PHASES.map((phase) => {
          const daysForPhase = filteredDays.filter((d) => d.phase === phase.id);
          if (daysForPhase.length === 0) return '';

          const allDaysInPhase = ROADMAP_DAYS.filter((d) => d.phase === phase.id);
          const doneCount = allDaysInPhase.filter((d) => state.completedDays[d.day]).length;

          const dayCardsHtml = daysForPhase.map((item, idx) => {
            const isDone = Boolean(state.completedDays[item.day]);
            const noteData = state.notes[item.day];
            const hasNote = Boolean(noteData && (noteData.text?.trim() || noteData.link?.trim()));
            const isLast = idx === daysForPhase.length - 1;
            const toolsHtml = (item.tools || []).map((t) => renderToolChipHtml(t, true)).join('');

            return `
              <div class="relative pl-9 sm:pl-12 ${isLast ? '' : 'pb-5'}">
                ${!isLast ? '<div class="absolute left-[13px] sm:left-[17px] top-8 bottom-0 w-0.5 bg-studio-border dark:bg-studio-darkBorder"></div>' : ''}

                <button
                  type="button"
                  data-toggle-day="${item.day}"
                  aria-label="Đánh dấu hoàn thành Ngày ${formatDayNum(item.day)}"
                  title="${isDone ? 'Bỏ đánh dấu hoàn thành' : 'Đánh dấu hoàn thành'}"
                  class="absolute left-0 sm:left-0.5 top-3.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 transition-all z-10 cursor-pointer ${
                    isDone
                      ? 'bg-emerald-500 border-emerald-500 text-white shadow-sm scale-105'
                      : 'bg-studio-card dark:bg-studio-darkCard border-studio-border dark:border-studio-darkBorder text-studio-muted hover:border-accent hover:text-accent'
                  }"
                >
                  ${
                    isDone
                      ? '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>'
                      : `<span class="text-[11px] font-bold font-mono">${formatDayNum(item.day)}</span>`
                  }
                </button>

                <article
                  data-open-day="${item.day}"
                  class="group rounded-2xl border p-4 sm:p-5 cursor-pointer transition-all duration-200 ${
                    isDone
                      ? 'bg-emerald-50/35 dark:bg-emerald-950/15 border-emerald-200/80 dark:border-emerald-900/50 hover:border-emerald-400 dark:hover:border-emerald-700'
                      : 'bg-studio-card dark:bg-studio-darkCard border-studio-border dark:border-studio-darkBorder hover:border-accent/60 hover:shadow-studio'
                  }"
                >
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <div class="flex flex-wrap items-center gap-2">
                      <span class="text-xs font-extrabold tracking-wide uppercase ${isDone ? 'text-emerald-700 dark:text-emerald-400' : 'text-accent dark:text-accent-dark'}">
                        Ngày ${formatDayNum(item.day)}
                      </span>
                      <span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${getCategoryBadgeClass(item.category)}">
                        ${escapeHtml(item.category)}
                      </span>
                      <span class="px-2 py-0.5 rounded-full text-[11px] font-medium bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200/70 dark:border-amber-800/50">
                        Có hướng dẫn &amp; ví dụ
                      </span>
                      ${
                        hasNote
                          ? `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-studio-subtle dark:bg-studio-darkSubtle text-studio-muted dark:text-studio-darkMuted border border-studio-border dark:border-studio-darkBorder" title="Đã có ghi chú / link bài làm">
                               <svg class="w-3 h-3 text-accent dark:text-accent-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                               <span>Có ghi chú</span>
                             </span>`
                          : ''
                      }
                    </div>

                    <span class="text-xs font-semibold text-accent dark:text-accent-dark group-hover:underline transition-colors">
                      Xem bước làm &amp; ví dụ &rarr;
                    </span>
                  </div>

                  <!-- Nhiệm vụ -->
                  <p class="text-sm sm:text-[15px] font-semibold leading-relaxed mb-3 ${isDone ? 'line-through decoration-emerald-500/50 text-studio-muted dark:text-studio-darkMuted' : 'text-studio-ink dark:text-studio-darkInk'}">
                    ${escapeHtml(item.task)}
                  </p>

                  <!-- Website / App thực hành -->
                  <div class="flex flex-wrap items-center gap-1.5 mb-3">
                    <span class="text-[11px] font-semibold text-studio-muted dark:text-studio-darkMuted mr-1">Thực hành tại:</span>
                    ${toolsHtml}
                  </div>

                  <!-- Đã học được gì -->
                  <div class="flex items-start gap-2 text-xs sm:text-sm text-studio-muted dark:text-studio-darkMuted bg-studio-subtle/60 dark:bg-studio-darkSubtle/70 rounded-xl px-3.5 py-2.5">
                    <span class="shrink-0 font-bold text-emerald-600 dark:text-emerald-400">Đạt được:</span>
                    <span class="leading-relaxed">${escapeHtml(item.outcome)}</span>
                  </div>
                </article>
              </div>
            `;
          }).join('');

          return `
            <div class="mb-8 last:mb-0">
              <div class="rounded-2xl bg-studio-card dark:bg-studio-darkCard border border-studio-border dark:border-studio-darkBorder p-4 sm:p-5 mb-5 shadow-studio">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div class="space-y-1">
                    <div class="flex flex-wrap items-center gap-2">
                      <span class="px-2.5 py-0.5 rounded-lg text-xs font-bold border ${phase.badgeClass}">${escapeHtml(phase.range)}</span>
                      <h3 class="text-base sm:text-lg font-extrabold tracking-tight">${escapeHtml(phase.title)}</h3>
                    </div>
                    <p class="text-xs sm:text-sm text-studio-muted dark:text-studio-darkMuted">
                      <strong class="text-studio-ink dark:text-studio-darkInk">Mục tiêu:</strong> ${escapeHtml(phase.goal)}
                    </p>
                  </div>
                  <div class="shrink-0 flex items-center gap-2 self-start sm:self-center">
                    <span class="px-3 py-1.5 rounded-xl text-xs font-bold bg-studio-subtle dark:bg-studio-darkSubtle border border-studio-border dark:border-studio-darkBorder font-mono">
                      ${doneCount} / ${allDaysInPhase.length} xong
                    </span>
                  </div>
                </div>
              </div>

              <div class="pl-1 sm:pl-2">
                ${dayCardsHtml}
              </div>
            </div>
          `;
        }).join('');

        container.innerHTML = phasesHtml;
      }

      /** Chế độ 2: Bảng / Danh sách có thêm cột Web / App thực hành */
      function renderTableRoadmap(container, filteredDays) {
        const rowsHtml = filteredDays.map((item) => {
          const isDone = Boolean(state.completedDays[item.day]);
          const noteData = state.notes[item.day];
          const hasNote = Boolean(noteData && (noteData.text?.trim() || noteData.link?.trim()));
          const toolsHtml = (item.tools || []).map((t) => renderToolChipHtml(t, true)).join('');

          return `
            <tr
              data-open-day="${item.day}"
              class="cursor-pointer border-b border-studio-border/70 dark:border-studio-darkBorder/70 last:border-b-0 transition-colors ${
                isDone
                  ? 'bg-emerald-50/30 dark:bg-emerald-950/15 hover:bg-emerald-50/60 dark:hover:bg-emerald-950/25'
                  : 'hover:bg-studio-subtle/50 dark:hover:bg-studio-darkSubtle/60'
              }"
            >
              <td class="py-3.5 pl-4 pr-2 align-top w-12">
                <input
                  type="checkbox"
                  data-toggle-day="${item.day}"
                  ${isDone ? 'checked' : ''}
                  aria-label="Đánh dấu hoàn thành Ngày ${formatDayNum(item.day)}"
                  class="w-4.5 h-4.5 mt-0.5 rounded accent-emerald-600 cursor-pointer"
                />
              </td>
              <td class="py-3.5 px-3 align-top whitespace-nowrap">
                <div class="text-xs sm:text-sm font-bold font-mono ${isDone ? 'text-emerald-600 dark:text-emerald-400' : 'text-accent dark:text-accent-dark'}">
                  Ngày ${formatDayNum(item.day)}
                </div>
                <div class="text-[11px] text-studio-muted dark:text-studio-darkMuted">GĐ ${item.phase}</div>
              </td>
              <td class="py-3.5 px-3 align-top whitespace-nowrap">
                <span class="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${getCategoryBadgeClass(item.category)}">
                  ${escapeHtml(item.category)}
                </span>
              </td>
              <td class="py-3.5 px-3 align-top min-w-[230px]">
                <div class="text-xs sm:text-sm font-medium leading-relaxed ${isDone ? 'line-through text-studio-muted dark:text-studio-darkMuted' : 'text-studio-ink dark:text-studio-darkInk'}">
                  ${escapeHtml(item.task)}
                </div>
              </td>
              <td class="py-3.5 px-3 align-top min-w-[180px]">
                <div class="flex flex-wrap gap-1.5">
                  ${toolsHtml}
                </div>
              </td>
              <td class="py-3.5 px-3 align-top min-w-[180px] hidden xl:table-cell">
                <div class="text-xs sm:text-sm text-studio-muted dark:text-studio-darkMuted leading-relaxed">
                  ${escapeHtml(item.outcome)}
                </div>
              </td>
              <td class="py-3.5 pl-2 pr-4 align-top text-right whitespace-nowrap">
                <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold ${
                  hasNote
                    ? 'bg-accent-light text-accent dark:bg-accent/20 dark:text-accent-dark'
                    : 'bg-studio-subtle dark:bg-studio-darkSubtle text-studio-ink dark:text-studio-darkInk border border-studio-border dark:border-studio-darkBorder'
                }">
                  ${hasNote ? 'Ví dụ &amp; Ghi chú' : 'Hướng dẫn &amp; Ví dụ'}
                </span>
              </td>
            </tr>
          `;
        }).join('');

        container.innerHTML = `
          <div class="rounded-2xl bg-studio-card dark:bg-studio-darkCard border border-studio-border dark:border-studio-darkBorder shadow-studio overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="border-b border-studio-border dark:border-studio-darkBorder bg-studio-subtle/60 dark:bg-studio-darkSubtle text-[11px] font-bold uppercase tracking-wider text-studio-muted dark:text-studio-darkMuted">
                    <th class="py-3.5 pl-4 pr-2">Xong</th>
                    <th class="py-3.5 px-3">Ngày</th>
                    <th class="py-3.5 px-3">Mảng</th>
                    <th class="py-3.5 px-3">Nhiệm vụ cụ thể</th>
                    <th class="py-3.5 px-3">Web / App thực hành</th>
                    <th class="py-3.5 px-3 hidden xl:table-cell">Đã học được gì?</th>
                    <th class="py-3.5 pl-2 pr-4 text-right">Chi tiết</th>
                  </tr>
                </thead>
                <tbody>
                  ${rowsHtml}
                </tbody>
              </table>
            </div>
          </div>
        `;
      }

      /** Gắn sự kiện tick hoàn thành, link tool & mở modal chi tiết cho danh sách ngày */
      function bindDayInteractionEvents(container) {
        container.querySelectorAll('[data-toggle-day]').forEach((el) => {
          el.addEventListener('click', (e) => {
            e.stopPropagation();
            const dayNum = Number(el.getAttribute('data-toggle-day'));
            toggleDayComplete(dayNum);
          });
        });

        container.querySelectorAll('[data-stop-row]').forEach((el) => {
          el.addEventListener('click', (e) => {
            e.stopPropagation();
          });
        });

        container.querySelectorAll('[data-shortcut-action]').forEach((el) => {
          el.addEventListener('click', (e) => {
            e.stopPropagation();
            const action = el.getAttribute('data-shortcut-action');
            if (action === 'open-hsb') {
              openHsbModal();
            } else if (action === 'open-brief-gen') {
              switchHubTab('generator');
              document.getElementById('newbiePracticeHub').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          });
        });

        container.querySelectorAll('[data-open-day]').forEach((el) => {
          el.addEventListener('click', () => {
            const dayNum = Number(el.getAttribute('data-open-day'));
            openDayDetailModal(dayNum);
          });
        });
      }

      function toggleDayComplete(dayNum) {
        const wasDone = Boolean(state.completedDays[dayNum]);
        if (wasDone) {
          delete state.completedDays[dayNum];
        } else {
          state.completedDays[dayNum] = true;
        }
        saveState();
        renderAll();

        if (!wasDone) {
          showToast(`Tuyệt vời! Đã hoàn thành Ngày ${formatDayNum(dayNum)}`, 'success');
        }
      }

      // =========================================================================
      // 7. TRUNG TÂM THỰC HÀNH CHO NEWBIE (TABS, 6 BÀI TẬP MẪU & BRIEF GENERATOR)
      // =========================================================================
      function switchHubTab(tabName) {
        activeHubTab = tabName;
        const tabs = [
          { key: 'guide', btnId: 'hubTabGuideBtn', panelId: 'hubPanelGuide' },
          { key: 'exercises', btnId: 'hubTabExercisesBtn', panelId: 'hubPanelExercises' },
          { key: 'generator', btnId: 'hubTabGeneratorBtn', panelId: 'hubPanelGenerator' }
        ];

        const activeClasses = ['bg-studio-card', 'dark:bg-studio-darkCard', 'text-accent', 'dark:text-accent-dark', 'shadow-sm'];
        const inactiveClasses = ['text-studio-muted', 'dark:text-studio-darkMuted', 'hover:text-studio-ink', 'dark:hover:text-white'];

        tabs.forEach(({ key, btnId, panelId }) => {
          const btn = document.getElementById(btnId);
          const panel = document.getElementById(panelId);
          if (key === tabName) {
            btn.classList.add(...activeClasses);
            btn.classList.remove(...inactiveClasses);
            panel.classList.remove('hidden');
          } else {
            btn.classList.remove(...activeClasses);
            btn.classList.add(...inactiveClasses);
            panel.classList.add('hidden');
          }
        });
      }

      /** Tạo minh họa trực quan (đáp án mẫu) cho từng bài tập trong 6 bài tập khởi đầu */
      function buildExerciseSolutionHtml(exId) {
        if (exId === 'ex1') {
          return `
            <div class="space-y-3">
              <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Đáp án mẫu (Hue = 25° Cam) — Click mã màu để copy</div>
              <div class="grid grid-cols-3 gap-2 text-center">
                <button type="button" data-copy-hex="#F5E3D0" class="p-2 rounded-xl border border-studio-border dark:border-studio-darkBorder bg-studio-card dark:bg-studio-darkCard hover:border-accent transition-colors">
                  <div class="h-12 rounded-lg border border-black/10 mb-1.5" style="background:#F5E3D0"></div>
                  <div class="text-[10px] font-bold">1. Nền Pastel</div>
                  <div class="text-[10px] font-mono text-studio-muted dark:text-studio-darkMuted">S:15% B:96%</div>
                  <div class="text-[11px] font-mono font-bold text-accent dark:text-accent-dark">#F5E3D0</div>
                </button>
                <button type="button" data-copy-hex="#E68339" class="p-2 rounded-xl border border-studio-border dark:border-studio-darkBorder bg-studio-card dark:bg-studio-darkCard hover:border-accent transition-colors">
                  <div class="h-12 rounded-lg border border-black/10 mb-1.5" style="background:#E68339"></div>
                  <div class="text-[10px] font-bold">2. Nút Nhấn</div>
                  <div class="text-[10px] font-mono text-studio-muted dark:text-studio-darkMuted">S:75% B:90%</div>
                  <div class="text-[11px] font-mono font-bold text-accent dark:text-accent-dark">#E68339</div>
                </button>
                <button type="button" data-copy-hex="#2E2219" class="p-2 rounded-xl border border-studio-border dark:border-studio-darkBorder bg-studio-card dark:bg-studio-darkCard hover:border-accent transition-colors">
                  <div class="h-12 rounded-lg border border-black/10 mb-1.5" style="background:#2E2219"></div>
                  <div class="text-[10px] font-bold">3. Chữ Đậm</div>
                  <div class="text-[10px] font-mono text-studio-muted dark:text-studio-darkMuted">S:45% B:18%</div>
                  <div class="text-[11px] font-mono font-bold text-accent dark:text-accent-dark">#2E2219</div>
                </button>
              </div>
              <div class="rounded-xl p-3.5 border border-black/10 flex items-center justify-between gap-3" style="background:#F5E3D0; color:#2E2219;">
                <div>
                  <div class="text-[10px] font-bold uppercase tracking-wider opacity-75">Xem thử ghép 3 màu</div>
                  <div class="text-xs font-extrabold">Tiệm Bánh Cam Ấm</div>
                </div>
                <span class="px-3 py-1.5 rounded-lg text-[11px] font-bold text-white shadow-sm shrink-0" style="background:#E68339;">Đặt bánh ngay</span>
              </div>
              <button type="button" data-apply-ex1-hsb="true" class="w-full py-2 rounded-lg text-xs font-bold bg-accent hover:bg-accent-hover text-white transition-colors">
                Mở đáp án này trên Lab HSB để tự kéo thử &rarr;
              </button>
            </div>
          `;
        }

        if (exId === 'ex2') {
          return `
            <div class="space-y-2.5">
              <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Đáp án sửa 3 cặp màu "bẫy" (Trước vs Sau)</div>
              <div class="space-y-2 text-[11px]">
                <div class="grid grid-cols-2 gap-2">
                  <div class="p-2.5 rounded-xl border border-rose-300" style="background:#FFFFFF; color:#9CA3AF;">
                    <div class="font-bold">Cặp A (FAIL 2.54:1)</div>
                    <div class="font-mono text-[10px]">#9CA3AF / #FFFFFF</div>
                  </div>
                  <button type="button" data-copy-hex="#4B5563" class="p-2.5 rounded-xl border border-emerald-400 text-left" style="background:#FFFFFF; color:#4B5563;">
                    <div class="font-bold">Sửa &rarr; PASS AAA (7.56:1)</div>
                    <div class="font-mono text-[10px]">#4B5563 / #FFFFFF</div>
                  </button>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <div class="p-2.5 rounded-xl border border-rose-300" style="background:#FACC15; color:#FFFFFF;">
                    <div class="font-bold">Cặp B (FAIL 1.51:1)</div>
                    <div class="font-mono text-[10px]">#FFFFFF / #FACC15</div>
                  </div>
                  <button type="button" data-copy-hex="#1F2937" class="p-2.5 rounded-xl border border-emerald-400 text-left" style="background:#FACC15; color:#1F2937;">
                    <div class="font-bold">Sửa &rarr; PASS AAA (10.7:1)</div>
                    <div class="font-mono text-[10px]">#1F2937 / #FACC15</div>
                  </button>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <div class="p-2.5 rounded-xl border border-rose-300" style="background:#F0F9FF; color:#38BDF8;">
                    <div class="font-bold">Cặp C (FAIL 2.06:1)</div>
                    <div class="font-mono text-[10px]">#38BDF8 / #F0F9FF</div>
                  </div>
                  <button type="button" data-copy-hex="#0369A1" class="p-2.5 rounded-xl border border-emerald-400 text-left" style="background:#F0F9FF; color:#0369A1;">
                    <div class="font-bold">Sửa &rarr; PASS AA (5.66:1)</div>
                    <div class="font-mono text-[10px]">#0369A1 / #F0F9FF</div>
                  </button>
                </div>
              </div>
            </div>
          `;
        }

        if (exId === 'ex3') {
          return `
            <div class="space-y-3">
              <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Minh họa đáp án: Sơ đồ Mindmap &amp; Moodboard mẫu</div>
              <!-- Sơ đồ Mindmap SVG -->
              <div class="rounded-xl p-2.5 bg-studio-card dark:bg-studio-darkCard border border-studio-border dark:border-studio-darkBorder">
                <svg viewBox="0 0 420 135" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                  <line x1="210" y1="68" x2="95" y2="28" stroke="#D97706" stroke-width="1.5" stroke-dasharray="3 3"/>
                  <line x1="210" y1="68" x2="325" y2="28" stroke="#D97706" stroke-width="1.5" stroke-dasharray="3 3"/>
                  <line x1="210" y1="68" x2="95" y2="108" stroke="#D97706" stroke-width="1.5" stroke-dasharray="3 3"/>
                  <line x1="210" y1="68" x2="325" y2="108" stroke="#D97706" stroke-width="1.5" stroke-dasharray="3 3"/>
                  <rect x="150" y="48" width="120" height="40" rx="20" fill="#3A2618"/>
                  <text x="210" y="72" text-anchor="middle" fill="#FAF5EE" font-size="11" font-weight="700" font-family="Inter, sans-serif">CÀ PHÊ SÁNG</text>
                  <rect x="8" y="10" width="136" height="34" rx="10" fill="#FEF3C7" stroke="#F59E0B"/>
                  <text x="76" y="25" text-anchor="middle" fill="#78350F" font-size="9.5" font-weight="700" font-family="Inter, sans-serif">Tỉnh táo &rarr; Nạp pin</text>
                  <text x="76" y="37" text-anchor="middle" fill="#92400E" font-size="8.5" font-family="Inter, sans-serif">Pin 100% hình hạt cà phê</text>
                  <rect x="276" y="10" width="136" height="34" rx="10" fill="#FEF3C7" stroke="#F59E0B"/>
                  <text x="344" y="25" text-anchor="middle" fill="#78350F" font-size="9.5" font-weight="700" font-family="Inter, sans-serif">Ánh sáng &rarr; Nắng xiên</text>
                  <text x="344" y="37" text-anchor="middle" fill="#92400E" font-size="8.5" font-family="Inter, sans-serif">Vệt nắng đổ bóng chữ</text>
                  <rect x="8" y="90" width="136" height="34" rx="10" fill="#FEF3C7" stroke="#F59E0B"/>
                  <text x="76" y="105" text-anchor="middle" fill="#78350F" font-size="9.5" font-weight="700" font-family="Inter, sans-serif">Khởi đầu &rarr; Báo thức</text>
                  <text x="76" y="117" text-anchor="middle" fill="#92400E" font-size="8.5" font-family="Inter, sans-serif">Nút Snooze biến thành phin</text>
                  <rect x="276" y="90" width="136" height="34" rx="10" fill="#FEF3C7" stroke="#F59E0B"/>
                  <text x="344" y="105" text-anchor="middle" fill="#78350F" font-size="9.5" font-weight="700" font-family="Inter, sans-serif">Hương thơm &rarr; Khói</text>
                  <text x="344" y="117" text-anchor="middle" fill="#92400E" font-size="8.5" font-family="Inter, sans-serif">Làn khói vẽ nốt nhạc sáng</text>
                </svg>
              </div>
              <!-- Moodboard mini 4 ô -->
              <div class="grid grid-cols-4 gap-1.5 text-[10px]">
                <div class="rounded-lg p-2 text-center border border-black/10" style="background:linear-gradient(135deg,#FDE68A,#D97706); color:#451A03;">
                  <div class="font-bold">Ánh sáng</div>
                  <div class="opacity-80">Nắng sớm ấm</div>
                </div>
                <div class="rounded-lg p-2 text-center border border-black/10" style="background:#E7D8C9; color:#3A2618;">
                  <div class="font-bold">Chất liệu</div>
                  <div class="opacity-80">Giấy Kraft &amp; Gỗ</div>
                </div>
                <div class="rounded-lg p-2 text-center border border-black/10" style="background:#FAF7F2; color:#261C15;">
                  <div class="font-serif font-bold text-xs">Aa Bb</div>
                  <div class="opacity-75">Serif + Sans</div>
                </div>
                <div class="rounded-lg p-1.5 border border-black/10 bg-white flex flex-col justify-between">
                  <div class="grid grid-cols-2 gap-1 flex-1">
                    <span class="rounded" style="background:#F7F3EB"></span>
                    <span class="rounded" style="background:#D6C7B2"></span>
                    <span class="rounded" style="background:#3A2618"></span>
                    <span class="rounded" style="background:#D95D24"></span>
                  </div>
                  <div class="text-[9px] text-center font-bold text-slate-700 mt-1">Bảng 4 màu</div>
                </div>
              </div>
            </div>
          `;
        }

        if (exId === 'ex4') {
          return `
            <div class="space-y-2.5">
              <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Đáp án mẫu: Cùng 1 bố cục Poster Re-color theo 3 phong cách</div>
              <div class="grid grid-cols-3 gap-2">
                <!-- Luxury -->
                <div class="rounded-xl p-2.5 border border-white/15 flex flex-col justify-between h-36" style="background:#141210; color:#F3EFE6;">
                  <div class="text-[9px] tracking-widest uppercase opacity-70">Sang trọng</div>
                  <div>
                    <div class="text-xs font-extrabold leading-tight">MORNING BREW</div>
                    <div class="text-[9px] opacity-75 mt-0.5">Ưu đãi 20% sáng</div>
                  </div>
                  <div class="px-2 py-1 rounded text-[9px] font-bold text-center" style="background:#C8A253; color:#141210;">ĐẶT NGAY</div>
                </div>
                <!-- Energetic -->
                <div class="rounded-xl p-2.5 border border-amber-200 flex flex-col justify-between h-36" style="background:#FFFBEB; color:#1E1B4B;">
                  <div class="text-[9px] tracking-widest uppercase opacity-70">Năng động</div>
                  <div>
                    <div class="text-xs font-extrabold leading-tight">MORNING BREW</div>
                    <div class="text-[9px] opacity-75 mt-0.5">Ưu đãi 20% sáng</div>
                  </div>
                  <div class="px-2 py-1 rounded text-[9px] font-bold text-center text-white" style="background:#F97316;">ĐẶT NGAY</div>
                </div>
                <!-- Minimal -->
                <div class="rounded-xl p-2.5 border border-slate-200 flex flex-col justify-between h-36" style="background:#F8FAFC; color:#0F172A;">
                  <div class="text-[9px] tracking-widest uppercase opacity-70">Tối giản</div>
                  <div>
                    <div class="text-xs font-extrabold leading-tight">MORNING BREW</div>
                    <div class="text-[9px] opacity-75 mt-0.5">Ưu đãi 20% sáng</div>
                  </div>
                  <div class="px-2 py-1 rounded text-[9px] font-bold text-center text-white" style="background:#4D7C0F;">ĐẶT NGAY</div>
                </div>
              </div>
            </div>
          `;
        }

        if (exId === 'ex5') {
          return `
            <div class="space-y-2.5">
              <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Minh họa đáp án: Biến tấu SCAMPER (Trước &rarr; Sau)</div>
              <div class="grid grid-cols-2 gap-2.5">
                <!-- Mẫu gốc -->
                <div class="rounded-xl p-3 border border-slate-700 flex flex-col items-center justify-between h-40 text-center" style="background:#111827; color:#E5E7EB;">
                  <span class="text-[9px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">Mẫu gốc (Quen thuộc)</span>
                  <div class="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-[10px]">Ảnh ca sĩ</div>
                  <div>
                    <div class="text-[11px] font-bold">Acoustic Night</div>
                    <div class="text-[9px] opacity-70">Thứ 7 • 20:00</div>
                  </div>
                </div>
                <!-- Bản biến tấu SCAMPER -->
                <div class="rounded-xl p-3 border border-amber-300 relative overflow-hidden flex flex-col justify-between h-40" style="background:#F5EFE6; color:#7F1D1D;">
                  <!-- 6 dây đàn guitar kéo chéo (Substitute) -->
                  <svg class="absolute inset-0 w-full h-full opacity-25 pointer-events-none" viewBox="0 0 160 160" preserveAspectRatio="none">
                    <line x1="0" y1="120" x2="160" y2="10" stroke="#7F1D1D" stroke-width="1.5"/>
                    <line x1="0" y1="130" x2="160" y2="20" stroke="#7F1D1D" stroke-width="1.5"/>
                    <line x1="0" y1="140" x2="160" y2="30" stroke="#7F1D1D" stroke-width="1.5"/>
                    <line x1="0" y1="150" x2="160" y2="40" stroke="#7F1D1D" stroke-width="1.5"/>
                    <line x1="0" y1="160" x2="160" y2="50" stroke="#7F1D1D" stroke-width="1.5"/>
                  </svg>
                  <span class="relative z-10 self-start text-[9px] px-2 py-0.5 rounded font-bold bg-red-900 text-amber-50">SCAMPER (S + M + R)</span>
                  <div class="relative z-10">
                    <div class="text-xl font-black leading-none tracking-tight">ACOUSTIC<br/>NIGHT</div>
                  </div>
                  <div class="relative z-10 text-[9px] font-bold flex justify-between border-t border-red-900/20 pt-1">
                    <span>T7 • 20:00</span>
                    <span>Đảo nền sáng</span>
                  </div>
                </div>
              </div>
            </div>
          `;
        }

        if (exId === 'ex6') {
          return `
            <div class="space-y-2.5">
              <div class="flex items-center justify-between gap-2">
                <span class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Đáp án mẫu: Poster "Hoàng Hôn Acoustic"</span>
                <button type="button" data-toggle-ex6-gray="true" class="px-2 py-0.5 rounded-md text-[10px] font-bold border border-studio-border dark:border-studio-darkBorder bg-studio-card dark:bg-studio-darkCard hover:border-accent transition-colors">
                  Thử Grayscale Check
                </button>
              </div>
              <div data-ex6-poster="true" class="rounded-2xl p-4 relative overflow-hidden border border-white/10 transition-all duration-300" style="background:linear-gradient(160deg,#1E1B2E 0%,#2E223D 65%,#432639 100%); color:#FAF5EE;">
                <!-- Mặt trời hoàng hôn minh họa -->
                <div class="w-24 h-24 rounded-full absolute -right-5 -top-5 opacity-85" style="background:radial-gradient(circle,#FDBA74 0%,#F97316 65%,#C2410C 100%);"></div>
                <div class="relative z-10 space-y-2.5">
                  <div class="text-[9px] font-bold uppercase tracking-widest" style="color:#FDBA74;">INDIE LIVE SESSION • HỒ TÂY</div>
                  <div class="text-lg font-black leading-tight tracking-tight">HOÀNG HÔN<br/>ACOUSTIC</div>
                  <div class="text-[11px] opacity-85">28/11 • 17:30 • Sân thượng Hồ Tây</div>
                  <div class="flex items-center justify-between gap-2 pt-2 border-t border-white/15">
                    <div>
                      <div class="text-[9px] opacity-70">Giá vé Early Bird</div>
                      <div class="text-sm font-extrabold" style="color:#FDBA74;">150.000đ</div>
                    </div>
                    <span class="px-3 py-1.5 rounded-lg text-[11px] font-bold text-white shadow" style="background:#F97316;">Đặt vé ngay</span>
                  </div>
                </div>
              </div>
              <div class="text-[10px] text-studio-muted dark:text-studio-darkMuted">
                Mẹo: Bấm nút <strong>Thử Grayscale Check</strong> ở trên — bạn sẽ thấy dù mất màu, chữ tiêu đề trắng và nút cam vẫn tách lớp rõ rệt trên nền tối!
              </div>
            </div>
          `;
        }
        return '';
      }

      function renderStarterExercises() {
        const container = document.getElementById('starterExercisesContainer');
        container.innerHTML = STARTER_EXERCISES.map((ex) => {
          const toolsHtml = ex.tools.map((t) => renderToolChipHtml(t, true)).join('');
          const solutionHtml = buildExerciseSolutionHtml(ex.id);
          return `
            <div class="rounded-2xl p-4 sm:p-5 border border-studio-border dark:border-studio-darkBorder bg-studio-bg/60 dark:bg-studio-darkSubtle/40 flex flex-col justify-between gap-3.5">
              <div class="space-y-2.5">
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <span class="px-2.5 py-0.5 rounded-lg text-[11px] font-bold bg-accent-light text-accent dark:bg-accent/20 dark:text-accent-dark">
                    ${escapeHtml(ex.level)}
                  </span>
                  <button
                    type="button"
                    data-jump-day="${ex.dayRef}"
                    class="text-xs font-semibold text-studio-muted hover:text-accent dark:hover:text-accent-dark transition-colors"
                  >
                    Xem Ngày ${formatDayNum(ex.dayRef)} &rarr;
                  </button>
                </div>

                <h4 class="text-sm sm:text-base font-bold leading-snug">${escapeHtml(ex.title)}</h4>
                <p class="text-xs text-studio-muted dark:text-studio-darkMuted leading-relaxed">${escapeHtml(ex.desc)}</p>

                <div class="p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/25 border border-amber-200/70 dark:border-amber-900/50 text-xs leading-relaxed text-amber-950 dark:text-amber-100 whitespace-pre-line">
                  ${escapeHtml(ex.promptText)}
                </div>

                <!-- Nút mở / đóng Đáp án trực quan -->
                <div>
                  <button
                    type="button"
                    data-toggle-solution="${ex.id}"
                    class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/50 dark:hover:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 transition-colors"
                  >
                    <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    <span>Xem đáp án &amp; minh họa mẫu</span>
                  </button>
                  <div id="solutionPanel_${ex.id}" class="hidden mt-3 p-3.5 rounded-xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/60">
                    ${solutionHtml}
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-studio-border/60 dark:border-studio-darkBorder/60">
                <div class="flex flex-wrap items-center gap-1.5">
                  ${toolsHtml}
                </div>
                <button
                  type="button"
                  data-copy-exercise="${ex.id}"
                  class="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-studio-card dark:bg-studio-darkCard border border-studio-border dark:border-studio-darkBorder hover:border-accent transition-colors"
                >
                  Copy đề bài
                </button>
              </div>
            </div>
          `;
        }).join('');

        container.querySelectorAll('[data-jump-day]').forEach((btn) => {
          btn.addEventListener('click', () => {
            openDayDetailModal(Number(btn.getAttribute('data-jump-day')));
          });
        });

        container.querySelectorAll('[data-copy-exercise]').forEach((btn) => {
          btn.addEventListener('click', () => {
            const ex = STARTER_EXERCISES.find((e) => e.id === btn.getAttribute('data-copy-exercise'));
            if (ex) copyTextToClipboard(ex.promptText, `Đã sao chép đề "${ex.title}"`);
          });
        });

        container.querySelectorAll('[data-toggle-solution]').forEach((btn) => {
          btn.addEventListener('click', () => {
            const exId = btn.getAttribute('data-toggle-solution');
            const panel = document.getElementById(`solutionPanel_${exId}`);
            if (!panel) return;
            const isHidden = panel.classList.toggle('hidden');
            const labelSpan = btn.querySelector('span');
            if (labelSpan) {
              labelSpan.textContent = isHidden ? 'Xem đáp án & minh họa mẫu' : 'Ẩn đáp án mẫu';
            }
          });
        });

        container.querySelectorAll('[data-copy-hex]').forEach((btn) => {
          btn.addEventListener('click', () => {
            const hex = btn.getAttribute('data-copy-hex');
            copyTextToClipboard(hex, `Đã sao chép mã màu ${hex}`);
          });
        });

        container.querySelectorAll('[data-apply-ex1-hsb]').forEach((btn) => {
          btn.addEventListener('click', () => {
            hsbState.mode = 'manual';
            hsbState.parts = {
              bg60: { h: 25, s: 15, b: 96 },
              text30: { h: 25, s: 45, b: 18 },
              accent10: { h: 25, s: 75, b: 90 }
            };
            hsbState.activePart = 'bg60';
            syncSlidersToActiveHsb();
            openHsbModal();
            showToast('Đã nạp đáp án Bài 1 vào Lab HSB (Chỉnh từng phần)!', 'success');
          });
        });

        container.querySelectorAll('[data-toggle-ex6-gray]').forEach((btn) => {
          btn.addEventListener('click', () => {
            const poster = btn.closest('.space-y-2\\.5').querySelector('[data-ex6-poster]');
            if (!poster) return;
            const isGray = poster.style.filter === 'grayscale(100%)';
            poster.style.filter = isGray ? 'none' : 'grayscale(100%)';
            btn.textContent = isGray ? 'Thử Grayscale Check' : 'Bật lại màu gốc';
          });
        });

        container.querySelectorAll('[data-shortcut-action="open-hsb"]').forEach((btn) => {
          btn.addEventListener('click', openHsbModal);
        });
      }

      function pickRandomKey(obj) {
        const keys = Object.keys(obj);
        return keys[Math.floor(Math.random() * keys.length)];
      }

      function generateDesignBrief() {
        const typeVal = document.getElementById('genTypeSelect').value;
        const indVal = document.getElementById('genIndustrySelect').value;
        const moodVal = document.getElementById('genMoodSelect').value;

        const chosenTypeKey = typeVal === 'random' ? pickRandomKey(BRIEF_GEN_DATA.types) : typeVal;
        const chosenIndKey = indVal === 'random' ? pickRandomKey(BRIEF_GEN_DATA.industries) : indVal;
        const chosenMoodKey = moodVal === 'random' ? pickRandomKey(BRIEF_GEN_DATA.moods) : moodVal;

        const typeObj = BRIEF_GEN_DATA.types[chosenTypeKey];
        const indObj = BRIEF_GEN_DATA.industries[chosenIndKey];
        const moodObj = BRIEF_GEN_DATA.moods[chosenMoodKey];
        const brandName = indObj.brandNames[Math.floor(Math.random() * indObj.brandNames.length)];

        currentGeneratedBriefText = [
          `ĐỀ BÀI THỰC HÀNH: ${typeObj.label}`,
          `• Thương hiệu giả lập: ${brandName}`,
          `• Đối tượng khách hàng: ${indObj.audience}`,
          `• Mục tiêu thiết kế: ${indObj.goal}`,
          `• Phong cách: ${moodObj.label}`,
          `• Bảng màu 60-30-10 gợi ý: Nền 60% (${moodObj.palette.bg60}) | Chữ 30% (${moodObj.palette.text30}) | Nhấn 10% (${moodObj.palette.accent10})`,
          `• Nội dung cần có: ${indObj.elements.join(', ')}`,
          `• Mẹo thực hiện: ${moodObj.tip}`
        ].join('\n');

        const outputEl = document.getElementById('generatedBriefOutput');
        outputEl.innerHTML = `
          <div class="flex flex-wrap items-start justify-between gap-3">
            <div>
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-accent text-white">Đề bài thực hành sẵn sàng</span>
              <h4 class="text-lg font-extrabold mt-2">${escapeHtml(brandName)} — ${escapeHtml(typeObj.label)}</h4>
            </div>
            <button
              id="copyGeneratedBriefBtn"
              type="button"
              class="px-3 py-1.5 rounded-xl text-xs font-semibold bg-studio-subtle dark:bg-studio-darkSubtle border border-studio-border dark:border-studio-darkBorder hover:border-accent transition-colors"
            >
              Copy đề bài
            </button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div class="p-3 rounded-xl bg-studio-bg/70 dark:bg-studio-darkSubtle/60 border border-studio-border/60 dark:border-studio-darkBorder">
              <div class="font-bold text-studio-muted dark:text-studio-darkMuted uppercase text-[10px] mb-1">Đối tượng khách hàng</div>
              <p class="leading-relaxed">${escapeHtml(indObj.audience)}</p>
            </div>
            <div class="p-3 rounded-xl bg-studio-bg/70 dark:bg-studio-darkSubtle/60 border border-studio-border/60 dark:border-studio-darkBorder">
              <div class="font-bold text-studio-muted dark:text-studio-darkMuted uppercase text-[10px] mb-1">Mục tiêu &amp; Phong cách</div>
              <p class="leading-relaxed">${escapeHtml(indObj.goal)} <strong>(${escapeHtml(moodObj.label)})</strong></p>
            </div>
          </div>

          <!-- Bảng màu 60-30-10 gợi ý kèm ô màu thật -->
          <div class="space-y-2">
            <div class="text-xs font-bold text-studio-muted dark:text-studio-darkMuted">Gợi ý bảng màu 60-30-10 (Click mã màu để copy):</div>
            <div class="grid grid-cols-3 gap-2.5 text-xs">
              <button type="button" data-copy-hex="${moodObj.palette.bg60}" class="flex items-center gap-2 p-2 rounded-xl border border-studio-border dark:border-studio-darkBorder hover:border-accent transition-colors text-left">
                <span class="w-7 h-7 rounded-lg border border-black/15 shrink-0" style="background:${moodObj.palette.bg60}"></span>
                <span class="min-w-0">
                  <span class="block text-[10px] text-studio-muted dark:text-studio-darkMuted">60% Nền</span>
                  <span class="font-mono font-bold">${moodObj.palette.bg60}</span>
                </span>
              </button>
              <button type="button" data-copy-hex="${moodObj.palette.text30}" class="flex items-center gap-2 p-2 rounded-xl border border-studio-border dark:border-studio-darkBorder hover:border-accent transition-colors text-left">
                <span class="w-7 h-7 rounded-lg border border-black/15 shrink-0" style="background:${moodObj.palette.text30}"></span>
                <span class="min-w-0">
                  <span class="block text-[10px] text-studio-muted dark:text-studio-darkMuted">30% Chữ</span>
                  <span class="font-mono font-bold">${moodObj.palette.text30}</span>
                </span>
              </button>
              <button type="button" data-copy-hex="${moodObj.palette.accent10}" class="flex items-center gap-2 p-2 rounded-xl border border-studio-border dark:border-studio-darkBorder hover:border-accent transition-colors text-left">
                <span class="w-7 h-7 rounded-lg border border-black/15 shrink-0" style="background:${moodObj.palette.accent10}"></span>
                <span class="min-w-0">
                  <span class="block text-[10px] text-studio-muted dark:text-studio-darkMuted">10% Nhấn</span>
                  <span class="font-mono font-bold">${moodObj.palette.accent10}</span>
                </span>
              </button>
            </div>
          </div>

          <!-- Checklist thành phần cần đưa vào thiết kế -->
          <div class="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/25 border border-emerald-200/70 dark:border-emerald-900/50 space-y-1.5 text-xs">
            <div class="font-bold text-emerald-800 dark:text-emerald-300">4 thành phần bắt buộc trên bản thiết kế:</div>
            <div class="flex flex-wrap gap-1.5">
              ${indObj.elements.map((el) => `<span class="px-2 py-0.5 rounded-md bg-white/80 dark:bg-studio-darkCard border border-emerald-200 dark:border-emerald-800/60 font-medium">${escapeHtml(el)}</span>`).join('')}
            </div>
            <p class="text-emerald-900/90 dark:text-emerald-200/90 pt-1"><strong>Mẹo Newbie:</strong> ${escapeHtml(moodObj.tip)}</p>
          </div>

          <div class="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
            <span class="text-studio-muted dark:text-studio-darkMuted">App khuyên dùng: <strong class="text-studio-ink dark:text-studio-darkInk">${escapeHtml(typeObj.app)}</strong></span>
            <a href="${typeObj.appUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-accent hover:bg-accent-hover text-white font-semibold transition-colors">
              <span>Mở app thực hành ngay</span>
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        `;

        document.getElementById('copyGeneratedBriefBtn').addEventListener('click', () => {
          copyTextToClipboard(currentGeneratedBriefText, 'Đã sao chép toàn bộ Đề bài thực hành!');
        });

        outputEl.querySelectorAll('[data-copy-hex]').forEach((btn) => {
          btn.addEventListener('click', () => {
            const hex = btn.getAttribute('data-copy-hex');
            copyTextToClipboard(hex, `Đã sao chép mã màu ${hex}`);
          });
        });
      }

      // =========================================================================
      // 8. CHECKLIST 5 NĂNG LỰC CỐT LÕI & BỘ CÔNG CỤ KHUYÊN DÙNG
      // =========================================================================
      function renderCompetencies() {
        const container = document.getElementById('competenciesContainer');
        const checkedCount = CORE_COMPETENCIES.filter((c) => state.competencies[c.id]).length;
        document.getElementById('competencyScoreBadge').textContent = `${checkedCount} / ${CORE_COMPETENCIES.length}`;

        container.innerHTML = CORE_COMPETENCIES.map((comp) => {
          const isChecked = Boolean(state.competencies[comp.id]);
          const relatedDone = comp.relatedDays.filter((d) => state.completedDays[d]).length;
          const totalRelated = comp.relatedDays.length;
          const isReady = relatedDone === totalRelated;

          return `
            <label
              class="flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                isChecked
                  ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800/70'
                  : 'bg-studio-bg/60 dark:bg-studio-darkSubtle/50 border-studio-border dark:border-studio-darkBorder hover:border-accent/50'
              }"
            >
              <input
                type="checkbox"
                data-comp-id="${comp.id}"
                ${isChecked ? 'checked' : ''}
                class="w-4.5 h-4.5 mt-0.5 rounded accent-emerald-600 cursor-pointer shrink-0"
              />
              <div class="space-y-1.5 flex-1">
                <p class="text-xs sm:text-sm font-medium leading-relaxed ${isChecked ? 'text-emerald-900 dark:text-emerald-200' : 'text-studio-ink dark:text-studio-darkInk'}">
                  ${escapeHtml(comp.text)}
                </p>
                <div class="flex flex-wrap items-center gap-2 text-[11px]">
                  <span class="px-2 py-0.5 rounded-md font-medium ${
                    isReady
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300'
                      : 'bg-studio-subtle dark:bg-studio-darkSubtle text-studio-muted dark:text-studio-darkMuted'
                  }">
                    ${
                      isReady && !isChecked
                        ? `Gợi ý: Đủ ${relatedDone}/${totalRelated} ngày liên quan — Sẵn sàng tick!`
                        : `Tiến độ gợi ý: ${relatedDone}/${totalRelated} ngày liên quan`
                    }
                  </span>
                </div>
              </div>
            </label>
          `;
        }).join('');

        container.querySelectorAll('[data-comp-id]').forEach((input) => {
          input.addEventListener('change', () => {
            const id = input.getAttribute('data-comp-id');
            if (input.checked) {
              state.competencies[id] = true;
            } else {
              delete state.competencies[id];
            }
            saveState();
            renderCompetencies();
          });
        });
      }

      function renderTools() {
        const container = document.getElementById('toolsContainer');
        const filterBtns = document.querySelectorAll('#toolFilterBar [data-tool-filter]');

        filterBtns.forEach((btn) => {
          const key = btn.getAttribute('data-tool-filter');
          if (key === activeToolFilter) {
            btn.className = 'px-2.5 py-1 rounded-lg text-xs font-semibold bg-accent text-white transition-colors';
          } else {
            btn.className = 'px-2.5 py-1 rounded-lg text-xs font-semibold bg-studio-subtle dark:bg-studio-darkSubtle text-studio-muted dark:text-studio-darkMuted hover:text-studio-ink dark:hover:text-white transition-colors';
          }
        });

        const list = RECOMMENDED_TOOLS.filter((t) => {
          if (activeToolFilter === 'all') return true;
          if (activeToolFilter === 'newbie') return t.newbie;
          return t.group === activeToolFilter;
        });

        container.innerHTML = list.map((tool) => `
          <a
            href="${tool.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="group p-3.5 rounded-xl border border-studio-border dark:border-studio-darkBorder bg-studio-bg/50 dark:bg-studio-darkSubtle/40 hover:border-accent hover:bg-studio-card dark:hover:bg-studio-darkSubtle transition-all flex flex-col justify-between gap-2"
          >
            <div class="flex items-center justify-between gap-2">
              <div class="flex items-center gap-1.5 min-w-0">
                <span class="text-sm font-bold group-hover:text-accent dark:group-hover:text-accent-dark transition-colors truncate">
                  ${escapeHtml(tool.name)}
                </span>
                ${tool.newbie ? '<span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300 shrink-0">Newbie</span>' : ''}
              </div>
              <span class="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-studio-subtle dark:bg-studio-darkCard text-studio-muted dark:text-studio-darkMuted border border-studio-border dark:border-studio-darkBorder shrink-0">
                ${escapeHtml(tool.tag)}
              </span>
            </div>
            <p class="text-xs text-studio-muted dark:text-studio-darkMuted leading-relaxed">
              ${escapeHtml(tool.desc)}
            </p>
          </a>
        `).join('');
      }

      // =========================================================================
      // 9. MODAL CHI TIẾT NGÀY HỌC & GHI CHÚ
      // =========================================================================

      /** Tạo đáp án & minh họa trực quan cho toàn bộ 30 ngày học */
      function buildDailySolutionHtml(dayNum) {
        // Dùng lại minh họa siêu chi tiết đã có cho các ngày trùng với 6 bài tập mẫu
        if (dayNum === 1) return buildExerciseSolutionHtml('ex1');
        if (dayNum === 9) return buildExerciseSolutionHtml('ex2');
        if (dayNum === 11 || dayNum === 12) return buildExerciseSolutionHtml('ex3');
        if (dayNum === 13) return buildExerciseSolutionHtml('ex4');
        if (dayNum === 18) return buildExerciseSolutionHtml('ex5');
        if (dayNum === 22) return buildExerciseSolutionHtml('ex6');

        const swatchBtn = (hex, title, sub = '') => `
          <button type="button" data-copy-hex="${hex}" class="p-2 rounded-xl border border-studio-border dark:border-studio-darkBorder bg-studio-card dark:bg-studio-darkCard hover:border-accent text-left transition-colors">
            <div class="h-8 rounded-lg border border-black/10 mb-1" style="background:${hex}"></div>
            <div class="text-[10px] font-bold truncate">${title}</div>
            <div class="text-[10px] font-mono text-accent dark:text-accent-dark">${hex}${sub ? ' • ' + sub : ''}</div>
          </button>`;

        switch (dayNum) {
          case 2:
            return `
              <div class="space-y-2.5">
                <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Đáp án mẫu: Cấu trúc 3 Board Visual Library trên Pinterest</div>
                <div class="grid grid-cols-3 gap-2 text-[11px]">
                  <div class="p-2.5 rounded-xl bg-studio-card dark:bg-studio-darkCard border border-studio-border dark:border-studio-darkBorder space-y-1.5">
                    <div class="font-bold text-accent dark:text-accent-dark">01 - Layout</div>
                    <div class="grid grid-cols-2 gap-1 h-12">
                      <div class="rounded bg-indigo-100 dark:bg-indigo-900/50"></div>
                      <div class="rounded bg-slate-200 dark:bg-slate-700"></div>
                    </div>
                    <div class="text-[10px] text-studio-muted dark:text-studio-darkMuted">5 mẫu lưới Poster, Web Hero gọn gàng.</div>
                  </div>
                  <div class="p-2.5 rounded-xl bg-studio-card dark:bg-studio-darkCard border border-studio-border dark:border-studio-darkBorder space-y-1.5">
                    <div class="font-bold text-amber-600 dark:text-amber-400">02 - Color</div>
                    <div class="flex h-12 rounded overflow-hidden">
                      <span class="flex-1" style="background:#F7F3EB"></span>
                      <span class="flex-1" style="background:#2D1E17"></span>
                      <span class="flex-1" style="background:#D95D24"></span>
                    </div>
                    <div class="text-[10px] text-studio-muted dark:text-studio-darkMuted">5 bảng màu tạp chí &amp; bao bì đẹp.</div>
                  </div>
                  <div class="p-2.5 rounded-xl bg-studio-card dark:bg-studio-darkCard border border-studio-border dark:border-studio-darkBorder space-y-1.5">
                    <div class="font-bold text-emerald-600 dark:text-emerald-400">03 - Typography</div>
                    <div class="h-12 rounded bg-studio-subtle dark:bg-studio-darkSubtle flex items-center justify-center font-black text-base tracking-tight">Aa Bb</div>
                    <div class="text-[10px] text-studio-muted dark:text-studio-darkMuted">5 mẫu ghép cặp Font tiêu đề đẹp.</div>
                  </div>
                </div>
              </div>`;

          case 3:
            return `
              <div class="space-y-2.5">
                <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Đáp án mẫu: 5 quy tắc Bánh xe màu từ Xanh Lam (#2563EB)</div>
                <div class="space-y-1.5 text-[11px]">
                  ${[
                    ['1. Đơn sắc (An toàn nhất)', ['#DBEAFE', '#60A5FA', '#2563EB', '#1E3A8A']],
                    ['2. Tương đồng (Êm dịu)', ['#6366F1', '#2563EB', '#0284C7', '#06B6D4']],
                    ['3. Tương phản (Nổi bật mạnh)', ['#2563EB', '#1E3A8A', '#F97316', '#EA580C']],
                    ['4. Bổ túc xen kẽ (Đỡ gắt)', ['#2563EB', '#F59E0B', '#EF4444', '#F8FAFC']],
                    ['5. Bộ ba (Năng động)', ['#2563EB', '#EAB308', '#E11D48', '#F8FAFC']]
                  ].map(([name, cols]) => `
                    <div class="flex items-center justify-between gap-2 p-2 rounded-lg bg-studio-card dark:bg-studio-darkCard border border-studio-border dark:border-studio-darkBorder">
                      <span class="font-semibold">${name}</span>
                      <div class="flex gap-1">
                        ${cols.map(c => `<button type="button" data-copy-hex="${c}" title="Copy ${c}" class="w-6 h-6 rounded-md border border-black/15" style="background:${c}"></button>`).join('')}
                      </div>
                    </div>`).join('')}
                </div>
              </div>`;

          case 4:
            return `
              <div class="space-y-2.5">
                <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Đáp án mẫu: Phân tích tỷ lệ 60-30-10 trên Poster Cà Phê</div>
                <div class="flex h-9 rounded-xl overflow-hidden border border-black/10 text-[11px] font-bold">
                  <button type="button" data-copy-hex="#F7F3EB" class="w-[60%] flex items-center justify-center" style="background:#F7F3EB; color:#2D1E17;">60% #F7F3EB</button>
                  <button type="button" data-copy-hex="#2D1E17" class="w-[30%] flex items-center justify-center" style="background:#2D1E17; color:#F7F3EB;">30% #2D1E17</button>
                  <button type="button" data-copy-hex="#D95D24" class="w-[10%] flex items-center justify-center text-white" style="background:#D95D24;">10%</button>
                </div>
                <div class="rounded-xl p-3.5 border border-black/10 flex items-center justify-between gap-3" style="background:#F7F3EB; color:#2D1E17;">
                  <div>
                    <div class="text-[10px] font-bold opacity-70">60% Nền kem giúp mắt nghỉ ngơi</div>
                    <div class="text-sm font-extrabold">COLD BREW MÙA HÈ (30% Chữ đậm)</div>
                  </div>
                  <span class="px-3 py-1.5 rounded-lg text-[11px] font-bold text-white shrink-0" style="background:#D95D24;">10% Đặt ngay</span>
                </div>
              </div>`;

          case 5:
            return `
              <div class="space-y-2.5">
                <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Đáp án mẫu: Viết ngược Brief cho Poster Đêm Nhạc Jazz</div>
                <div class="grid grid-cols-2 gap-2 text-xs">
                  <div class="p-2.5 rounded-xl bg-studio-card dark:bg-studio-darkCard border border-studio-border dark:border-studio-darkBorder">
                    <div class="text-[10px] font-bold text-studio-muted uppercase">1. Đối tượng</div>
                    <div class="mt-0.5">Người trẻ 22–35 tuổi thích không gian nghệ thuật, chill cuối tuần.</div>
                  </div>
                  <div class="p-2.5 rounded-xl bg-studio-card dark:bg-studio-darkCard border border-studio-border dark:border-studio-darkBorder">
                    <div class="text-[10px] font-bold text-studio-muted uppercase">2. Mục tiêu</div>
                    <div class="mt-0.5">Quét mã QR đặt bàn/vé trước tối thứ 7.</div>
                  </div>
                  <div class="p-2.5 rounded-xl bg-studio-card dark:bg-studio-darkCard border border-studio-border dark:border-studio-darkBorder">
                    <div class="text-[10px] font-bold text-studio-muted uppercase">3. Cảm xúc</div>
                    <div class="mt-0.5">Ấm cúng, cổ điển, sâu lắng ánh đèn vàng.</div>
                  </div>
                  <div class="p-2.5 rounded-xl border border-amber-400/50" style="background:#0F172A; color:#F8FAFC;">
                    <div class="text-[10px] font-bold" style="color:#EAB308;">4. Bảng màu lý giải</div>
                    <div class="mt-0.5 text-[11px]">Nền #0F172A (đêm) + Nhấn #EAB308 (đèn sân khấu).</div>
                  </div>
                </div>
              </div>`;

          case 6:
            return `
              <div class="space-y-2">
                <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Đáp án mẫu: 3 dòng ghi chú phân tích chuẩn chuyên nghiệp</div>
                <div class="space-y-1.5 text-xs">
                  <div class="p-2.5 rounded-xl bg-studio-card dark:bg-studio-darkCard border border-studio-border dark:border-studio-darkBorder"><strong>Mẫu 1 (App Tài chính):</strong> Đơn sắc Xanh dương | 60% trắng xám, 30% chữ xanh đen, 10% nút Chuyển tiền | <em>Điểm nhấn:</em> Số dư in đậm ở giữa.</div>
                  <div class="p-2.5 rounded-xl bg-studio-card dark:bg-studio-darkCard border border-studio-border dark:border-studio-darkBorder"><strong>Mẫu 2 (Poster Burger):</strong> Tương phản Đỏ–Vàng | 60% nền kem, 30% ảnh burger nâu, 10% tem giá đỏ | <em>Điểm nhấn:</em> Tem "50% OFF" góc phải.</div>
                  <div class="p-2.5 rounded-xl bg-studio-card dark:bg-studio-darkCard border border-studio-border dark:border-studio-darkBorder"><strong>Mẫu 3 (Bao bì Trà):</strong> Tương đồng Xanh lá–Vàng nhạt | Tạo cảm giác thiên nhiên, sạch sẽ | <em>Điểm nhấn:</em> Logo lá trà dập nổi chính giữa.</div>
                </div>
              </div>`;

          case 7:
            return `
              <div class="space-y-2">
                <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Đáp án tự kiểm tra kiến thức Tuần 1</div>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div class="p-3 rounded-xl bg-studio-card dark:bg-studio-darkCard border border-studio-border dark:border-studio-darkBorder">
                    <div class="text-[10px] font-bold text-accent">Câu 1: Giảm độ chói?</div>
                    <div class="font-bold mt-1">Giảm Saturation (S)</div>
                  </div>
                  <div class="p-3 rounded-xl bg-studio-card dark:bg-studio-darkCard border border-studio-border dark:border-studio-darkBorder">
                    <div class="text-[10px] font-bold text-accent">Câu 2: Diện tích màu nhấn?</div>
                    <div class="font-bold mt-1">Khoảng 10% khung</div>
                  </div>
                  <div class="p-3 rounded-xl bg-studio-card dark:bg-studio-darkCard border border-studio-border dark:border-studio-darkBorder">
                    <div class="text-[10px] font-bold text-accent">Câu 3: Việc đầu tiên?</div>
                    <div class="font-bold mt-1">Đọc kỹ Brief trước</div>
                  </div>
                </div>
              </div>`;

          case 8:
            return `
              <div class="space-y-2.5">
                <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Đáp án mẫu: Bản đồ màu 6 nhóm ngành (Click mã màu để copy)</div>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  ${swatchBtn('#1D4ED8', 'Công nghệ', 'Tin cậy')}
                  ${swatchBtn('#EA580C', 'Ẩm thực F&B', 'Ngon miệng')}
                  ${swatchBtn('#0F766E', 'Tài chính', 'An toàn')}
                  ${swatchBtn('#1C1917', 'Thời trang', 'Sang trọng')}
                  ${swatchBtn('#F59E0B', 'Giáo dục', 'Sáng tạo')}
                  ${swatchBtn('#0D9488', 'Y tế', 'Sạch sẽ')}
                </div>
              </div>`;

          case 10:
            return `
              <div class="space-y-2.5">
                <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Đáp án trực quan: Trắng/Đen thuần vs Neutrals pha 5–10% sắc</div>
                <div class="grid grid-cols-2 gap-2.5 text-xs">
                  <div class="p-3 rounded-xl border border-slate-300" style="background:#FFFFFF; color:#000000;">
                    <div class="text-[10px] font-bold text-rose-600">Chưa pha (Cứng &amp; Gắt)</div>
                    <div class="font-extrabold mt-1">Nền #FFFFFF + Chữ #000000</div>
                    <div class="text-[10px] opacity-70 mt-0.5">Nhìn lạnh, thiếu chiều sâu thương hiệu.</div>
                  </div>
                  <div class="p-3 rounded-xl border border-amber-300" style="background:#FAF7F2; color:#261C15;">
                    <div class="text-[10px] font-bold text-emerald-700">Đã pha sắc Cà phê (Mượt)</div>
                    <div class="font-extrabold mt-1">Nền #FAF7F2 + Chữ #261C15</div>
                    <div class="text-[10px] opacity-80 mt-0.5">Êm mắt hơn, có chất ấm tự nhiên.</div>
                  </div>
                </div>
              </div>`;

          case 14:
            return `
              <div class="space-y-2">
                <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Đáp án tự chấm điểm 3 bản Re-color Ngày 13</div>
                <div class="grid grid-cols-3 gap-2 text-[11px]">
                  <div class="p-2.5 rounded-xl border border-black/10" style="background:#141210; color:#F3EFE6;">
                    <div class="font-bold" style="color:#C8A253;">1. Sang trọng</div>
                    <div class="mt-1">WCAG: 15.8:1 ✓</div>
                    <div class="opacity-75">Nền tối pha ấm, không dùng #000.</div>
                  </div>
                  <div class="p-2.5 rounded-xl border border-amber-200" style="background:#FFFBEB; color:#1E1B4B;">
                    <div class="font-bold" style="color:#F97316;">2. Năng động</div>
                    <div class="mt-1">WCAG: 13.9:1 ✓</div>
                    <div class="opacity-80">Chữ tím đậm cực dễ đọc trên nền kem.</div>
                  </div>
                  <div class="p-2.5 rounded-xl border border-slate-200" style="background:#F8FAFC; color:#0F172A;">
                    <div class="font-bold" style="color:#4D7C0F;">3. Tối giản</div>
                    <div class="mt-1">WCAG: 16.5:1 ✓</div>
                    <div class="opacity-80">Nút xanh olive dịu, không chói mắt.</div>
                  </div>
                </div>
              </div>`;

          case 15:
            return `
              <div class="space-y-2.5">
                <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Đáp án mẫu: Dải 5 bước Hue Shifting (Sáng ngả Vàng • Tối ngả Tím)</div>
                <div class="space-y-2">
                  <div>
                    <div class="text-[10px] font-bold mb-1">Dải Màu Đỏ có Hue Shifting (H: 12° &rarr; 0° &rarr; 338°):</div>
                    <div class="grid grid-cols-5 gap-1 text-center text-[10px] font-mono">
                      ${['#FDBA74', '#F87171', '#EF4444', '#BE123C', '#881337'].map((c, i) => `
                        <button type="button" data-copy-hex="${c}" class="p-1.5 rounded-lg border border-black/10 font-bold" style="background:${c}; color:${i < 2 ? '#111827' : '#FFFFFF'}">${c}</button>
                      `).join('')}
                    </div>
                  </div>
                  <div>
                    <div class="text-[10px] font-bold mb-1">Dải Xanh Dương có Hue Shifting (H: 200° &rarr; 220° &rarr; 245°):</div>
                    <div class="grid grid-cols-5 gap-1 text-center text-[10px] font-mono">
                      ${['#BAE6FD', '#38BDF8', '#2563EB', '#3730A3', '#1E1B4B'].map((c, i) => `
                        <button type="button" data-copy-hex="${c}" class="p-1.5 rounded-lg border border-black/10 font-bold" style="background:${c}; color:${i < 2 ? '#111827' : '#FFFFFF'}">${c}</button>
                      `).join('')}
                    </div>
                  </div>
                </div>
              </div>`;

          case 16:
            return `
              <div class="space-y-2.5">
                <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Đáp án mẫu: Bộ Color System tối giản 7 màu chuẩn UI</div>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  ${swatchBtn('#4F46E5', 'Primary (Chính)')}
                  ${swatchBtn('#F8FAFC', 'Neutral Bg')}
                  ${swatchBtn('#0F172A', 'Neutral Text')}
                  ${swatchBtn('#16A34A', 'Success')}
                </div>
                <div class="flex flex-wrap gap-2 text-[11px] font-bold pt-1">
                  <span class="px-2.5 py-1 rounded-full text-white" style="background:#16A34A;">✓ Success #16A34A</span>
                  <span class="px-2.5 py-1 rounded-full text-white" style="background:#D97706;">! Warning #D97706</span>
                  <span class="px-2.5 py-1 rounded-full text-white" style="background:#DC2626;">✕ Error #DC2626</span>
                </div>
              </div>`;

          case 17:
            return `
              <div class="space-y-2.5">
                <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Đáp án mẫu: Ứng dụng Color System lên App "FinMate"</div>
                <div class="rounded-2xl p-4 border border-black/10 max-w-sm mx-auto space-y-3" style="background:#F4F7F6; color:#11241E;">
                  <div class="flex justify-between items-center text-xs">
                    <span class="font-extrabold" style="color:#0F766E;">FinMate</span>
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-bold" style="background:#CCFBF1; color:#0F766E;">Tháng 11</span>
                  </div>
                  <div class="p-3 rounded-xl bg-white border border-black/5">
                    <div class="text-[10px] opacity-70">Số dư hiện tại</div>
                    <div class="text-lg font-black">12.450.000đ</div>
                  </div>
                  <div class="flex gap-2">
                    <span class="flex-1 py-2 rounded-xl text-center text-xs font-bold text-white" style="background:#F59E0B;">+ Thêm khoản chi</span>
                    <span class="px-3 py-2 rounded-xl text-xs font-bold" style="background:#CCFBF1; color:#0F766E;">Báo cáo</span>
                  </div>
                </div>
              </div>`;

          case 19:
            return `
              <div class="space-y-2.5">
                <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Đáp án trực quan: Visual Hierarchy (Sai vs Đúng)</div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div class="p-3.5 rounded-xl bg-white text-slate-800 border border-rose-300 space-y-1 text-xs">
                    <div class="text-[10px] font-bold text-rose-600 mb-1">✕ Chưa phân cấp (Mọi dòng đều nhau)</div>
                    <div>Workshop Online Miễn Phí</div>
                    <div>Làm Chủ Phối Màu Trong 90 Phút</div>
                    <div>Thứ 7, 20:00 • Người mới từ 0</div>
                    <div>Đăng Ký Giữ Chỗ Ngay</div>
                  </div>
                  <div class="p-3.5 rounded-xl bg-white text-slate-900 border border-emerald-400 space-y-1.5">
                    <div class="text-[10px] font-bold text-emerald-600">✓ Đã phân cấp rõ 4 tầng</div>
                    <div class="text-[9px] font-bold uppercase tracking-widest text-slate-400">WORKSHOP ONLINE MIỄN PHÍ</div>
                    <div class="text-sm font-black leading-tight">LÀM CHỦ PHỐI MÀU TRONG 90 PHÚT</div>
                    <div class="text-[11px] text-slate-500">Thứ 7, 20:00 • Dành cho người mới</div>
                    <span class="inline-block mt-1 px-3 py-1 rounded-lg text-[11px] font-bold text-white bg-indigo-600">ĐĂNG KÝ NGAY</span>
                  </div>
                </div>
              </div>`;

          case 20:
            return `
              <div class="space-y-2.5">
                <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Đáp án mẫu Tiền kỳ Mini-Project "Hoàng Hôn Acoustic"</div>
                <div class="p-3 rounded-xl bg-studio-card dark:bg-studio-darkCard border border-studio-border dark:border-studio-darkBorder text-xs space-y-2">
                  <div><strong>1. Brief:</strong> Poster 1080×1350px cho đêm nhạc indie 28/11 • 17:30 • Sân thượng Hồ Tây • Vé 150K.</div>
                  <div><strong>2. Mindmap 3 từ khóa hình ảnh:</strong> Mặt trời lặn sau mặt hồ • Dây đàn guitar • Đèn dây vàng ấm.</div>
                  <div class="flex items-center gap-2">
                    <strong>3. Bảng màu Moodboard:</strong>
                    ${['#1E1B2E', '#D98880', '#FAF5EE', '#F97316'].map(c => `<button type="button" data-copy-hex="${c}" class="w-6 h-6 rounded-md border border-black/15" style="background:${c}" title="Copy ${c}"></button>`).join('')}
                  </div>
                </div>
              </div>`;

          case 21:
            return `
              <div class="space-y-2.5">
                <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Đáp án mẫu: 3 bản Sketch bố cục trên giấy (Chọn phương án 1)</div>
                <div class="grid grid-cols-3 gap-2 text-center text-[10px]">
                  <div class="p-2 rounded-xl border-2 border-emerald-500 bg-studio-card dark:bg-studio-darkCard space-y-1.5">
                    <svg viewBox="0 0 80 100" class="w-full h-24 mx-auto">
                      <rect x="4" y="4" width="72" height="92" rx="6" fill="#EEF2FF" stroke="#4F46E5" stroke-width="1.5"/>
                      <rect x="12" y="12" width="44" height="8" rx="2" fill="#4F46E5"/>
                      <circle cx="56" cy="48" r="14" fill="#F97316"/>
                      <rect x="12" y="42" width="26" height="14" rx="2" fill="#1E1B2E"/>
                      <rect x="12" y="76" width="56" height="10" rx="4" fill="#F97316"/>
                    </svg>
                    <div class="font-bold text-emerald-600 dark:text-emerald-400">✓ Chọn Bản 1</div>
                    <div class="text-studio-muted">Thoáng, rõ nút CTA</div>
                  </div>
                  <div class="p-2 rounded-xl border border-studio-border dark:border-studio-darkBorder bg-studio-card dark:bg-studio-darkCard space-y-1.5 opacity-80">
                    <svg viewBox="0 0 80 100" class="w-full h-24 mx-auto">
                      <rect x="4" y="4" width="72" height="92" rx="6" fill="#E2E8F0" stroke="#94A3B8"/>
                      <rect x="10" y="54" width="60" height="34" rx="4" fill="#64748B"/>
                    </svg>
                    <div class="font-bold">Bản 2</div>
                    <div class="text-studio-muted">Ảnh tràn, chữ hơi chìm</div>
                  </div>
                  <div class="p-2 rounded-xl border border-studio-border dark:border-studio-darkBorder bg-studio-card dark:bg-studio-darkCard space-y-1.5 opacity-80">
                    <svg viewBox="0 0 80 100" class="w-full h-24 mx-auto">
                      <rect x="4" y="4" width="72" height="92" rx="6" fill="#F1F5F9" stroke="#94A3B8"/>
                      <rect x="8" y="10" width="30" height="80" rx="3" fill="#CBD5E1"/>
                      <rect x="42" y="10" width="30" height="80" rx="3" fill="#94A3B8"/>
                    </svg>
                    <div class="font-bold">Bản 3</div>
                    <div class="text-studio-muted">Chia đôi hơi chật</div>
                  </div>
                </div>
              </div>`;

          case 23:
            return `
              <div class="space-y-2.5">
                <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Đáp án trực quan: Soi Grayscale Check (Bản Màu vs Bản Trắng Đen)</div>
                <div class="grid grid-cols-2 gap-2.5">
                  <div class="rounded-xl p-3 border border-white/10" style="background:#1E1B2E; color:#FAF5EE;">
                    <div class="text-[9px] font-bold" style="color:#FDBA74;">BẢN MÀU GỐC</div>
                    <div class="text-sm font-black mt-1">HOÀNG HÔN</div>
                    <span class="inline-block mt-2 px-2.5 py-1 rounded text-[10px] font-bold text-white" style="background:#F97316;">Đặt vé 150K</span>
                  </div>
                  <div class="rounded-xl p-3 border border-white/10" style="background:#1E1B2E; color:#FAF5EE; filter:grayscale(100%);">
                    <div class="text-[9px] font-bold" style="color:#FDBA74;">BẢN GRAYSCALE (PASS ✓)</div>
                    <div class="text-sm font-black mt-1">HOÀNG HÔN</div>
                    <span class="inline-block mt-2 px-2.5 py-1 rounded text-[10px] font-bold text-white" style="background:#F97316;">Đặt vé 150K</span>
                  </div>
                </div>
                <div class="text-[11px] text-studio-muted dark:text-studio-darkMuted">Nhìn bên phải: Nền đen sâu, nút xám sáng và chữ trắng tách hẳn thành 3 sắc độ rõ rệt = Đạt chuẩn!</div>
              </div>`;

          case 24:
            return `
              <div class="space-y-2.5">
                <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Đáp án mẫu: 3 thẻ thiết kế 2-Color Challenge (Đúng 2 màu)</div>
                <div class="grid grid-cols-3 gap-2">
                  <div class="rounded-xl p-3 h-28 flex flex-col justify-between border border-black/10" style="background:#F6F4EF; color:#1D4ED8;">
                    <span class="text-[9px] font-mono font-bold">#F6F4EF + #1D4ED8</span>
                    <div class="text-xs font-black leading-tight">LESS IS MORE.</div>
                  </div>
                  <div class="rounded-xl p-3 h-28 flex flex-col justify-between border border-white/10" style="background:#161618; color:#BEF264;">
                    <span class="text-[9px] font-mono font-bold">#161618 + #BEF264</span>
                    <div class="text-xs font-black leading-tight">DESIGN SIMPLE.</div>
                  </div>
                  <div class="rounded-xl p-3 h-28 flex flex-col justify-between border border-black/10" style="background:#F3EAE0; color:#B91C1C;">
                    <span class="text-[9px] font-mono font-bold">#F3EAE0 + #B91C1C</span>
                    <div class="text-xs font-black leading-tight">BOLD &amp; WARM.</div>
                  </div>
                </div>
              </div>`;

          case 25:
            return `
              <div class="space-y-2.5">
                <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Đáp án mẫu: Tự phản biện &amp; nâng cấp bản V1 &rarr; V2</div>
                <div class="grid grid-cols-2 gap-2.5 text-xs">
                  <div class="p-3 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 space-y-1">
                    <div class="font-bold text-rose-700 dark:text-rose-300">Bản V1 (3 lỗi tìm thấy)</div>
                    <ul class="list-disc pl-4 text-[11px] space-y-0.5">
                      <li>Dùng tới 4 cỡ chữ lộn xộn.</li>
                      <li>Các dòng chữ dính sát nhau.</li>
                      <li>Thừa khung viền trang trí rối mắt.</li>
                    </ul>
                  </div>
                  <div class="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 space-y-1">
                    <div class="font-bold text-emerald-700 dark:text-emerald-300">Bản V2 (Sau khi sửa)</div>
                    <ul class="list-disc pl-4 text-[11px] space-y-0.5">
                      <li>Gom còn 2 font, 3 cỡ chữ chuẩn.</li>
                      <li>Tăng giãn dòng lên 1.4x thoáng mắt.</li>
                      <li>Xóa viền thừa, chừa lề 60px đều 4 cạnh.</li>
                    </ul>
                  </div>
                </div>
              </div>`;

          case 26:
            return `
              <div class="space-y-2">
                <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Đáp án mẫu Dự án cuối (Tiền kỳ): "KAI MATCHA STUDIO"</div>
                <div class="p-3 rounded-xl bg-studio-card dark:bg-studio-darkCard border border-studio-border dark:border-studio-darkBorder text-xs space-y-2">
                  <div><strong>Brief:</strong> Poster &amp; Card khai trương tiệm Matcha Nhật Bản tối giản, ưu đãi mua 1 tặng 1 cuối tuần.</div>
                  <div><strong>Mindmap:</strong> Chổi tre Chasen • Bọt trà xanh mịn • Gốm sứ mộc • Nắng sáng tĩnh lặng.</div>
                  <div class="flex items-center gap-2">
                    <strong>Moodboard Colors:</strong>
                    ${['#F5F7F2', '#DCE6D5', '#1C2E21', '#4D7C0F'].map(c => `<button type="button" data-copy-hex="${c}" class="w-6 h-6 rounded-md border border-black/15" style="background:${c}" title="Copy ${c}"></button>`).join('')}
                  </div>
                </div>
              </div>`;

          case 27:
            return `
              <div class="space-y-2.5">
                <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Đáp án mẫu: Color System (Hue Shifting Matcha) cho Dự án cuối</div>
                <div class="grid grid-cols-5 gap-1 text-center text-[10px] font-mono">
                  ${['#ECFCCB', '#A3E635', '#4D7C0F', '#166534', '#14261C'].map((c, i) => `
                    <button type="button" data-copy-hex="${c}" class="p-2 rounded-lg border border-black/10 font-bold" style="background:${c}; color:${i < 2 ? '#14261C' : '#F5F7F2'}">${c}</button>
                  `).join('')}
                </div>
                <div class="text-[11px] text-studio-muted dark:text-studio-darkMuted">60% Nền: #F5F7F2 | 30% Chữ: #14261C (WCAG 15.1:1 AAA ✓) | 10% Nhấn: #4D7C0F.</div>
              </div>`;

          case 28:
            return `
              <div class="space-y-2.5">
                <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Đáp án mẫu Thành phẩm Dự án cuối: "KAI MATCHA STUDIO"</div>
                <div class="rounded-2xl p-4 border border-emerald-900/15 max-w-sm mx-auto space-y-2.5" style="background:#F5F7F2; color:#14261C;">
                  <div class="flex items-center justify-between text-[10px] font-bold tracking-widest uppercase opacity-70">
                    <span>GRAND OPENING • 29/11</span>
                    <span>HÀ NỘI</span>
                  </div>
                  <div class="text-xl font-black tracking-tight leading-none">KAI MATCHA<br/>STUDIO</div>
                  <p class="text-xs opacity-80">Trà xanh Uji đánh tay chuẩn vị Nhật. Tặng ngay 01 ly Uji Latte cho hóa đơn đầu tiên.</p>
                  <div class="flex items-center justify-between pt-2 border-t border-emerald-900/10">
                    <span class="text-xs font-bold">08:00 – 21:00</span>
                    <span class="px-3 py-1.5 rounded-lg text-[11px] font-bold text-white" style="background:#4D7C0F;">Nhận mã ưu đãi</span>
                  </div>
                </div>
              </div>`;

          case 29:
            return `
              <div class="space-y-2">
                <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Đáp án mẫu: Bảng soát lỗi &amp; Xin Feedback chuẩn</div>
                <div class="p-3 rounded-xl bg-studio-card dark:bg-studio-darkCard border border-studio-border dark:border-studio-darkBorder text-xs space-y-1.5">
                  <div class="flex flex-wrap gap-1.5 text-[11px] font-bold">
                    <span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">✓ Grayscale tách lớp rõ</span>
                    <span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">✓ Chữ đạt WCAG AAA</span>
                    <span class="px-2 py-0.5 rounded bg-indigo-100 text-indigo-700">✓ Đặt 2 câu hỏi cụ thể</span>
                  </div>
                  <p class="text-studio-muted dark:text-studio-darkMuted">Mẹo lọc góp ý: Nếu 2 người trở lên cùng nói 1 chi tiết khó nhìn &rarr; chắc chắn nên sửa. Nếu chỉ là sở thích màu cá nhân &rarr; giữ đúng Brief ban đầu.</p>
                </div>
              </div>`;

          case 30:
            return `
              <div class="space-y-2.5">
                <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Đáp án Tổng kết: Ảnh ghép Before (Ngày 13) &amp; After (Ngày 30)</div>
                <div class="grid grid-cols-2 gap-2.5 text-xs">
                  <div class="rounded-xl p-3 border border-slate-300" style="background:#FFFBEB; color:#1E1B4B;">
                    <span class="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-amber-200 text-amber-900">Ngày 13 • Tập đổi màu</span>
                    <div class="font-extrabold mt-2">MORNING BREW</div>
                    <div class="text-[10px] opacity-75 mt-0.5">Dùng layout có sẵn trên Canva.</div>
                  </div>
                  <div class="rounded-xl p-3 border-2 border-emerald-500" style="background:#F5F7F2; color:#14261C;">
                    <span class="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-emerald-600 text-white">Ngày 30 • Tự làm 100%</span>
                    <div class="font-extrabold mt-2">KAI MATCHA STUDIO</div>
                    <div class="text-[10px] opacity-80 mt-0.5">Đủ Brief, Moodboard, Color System &amp; WCAG!</div>
                  </div>
                </div>
              </div>`;

          default:
            return '';
        }
      }

      function openDayDetailModal(dayNum) {
        const dayObj = ROADMAP_DAYS.find((d) => d.day === dayNum);
        if (!dayObj) return;

        activeModalDay = dayNum;
        const phaseObj = PHASES.find((p) => p.id === dayObj.phase);
        const isDone = Boolean(state.completedDays[dayNum]);
        const noteObj = state.notes[dayNum] || { text: '', link: '' };

        document.getElementById('modalDayBadge').textContent = `Ngày ${formatDayNum(dayObj.day)}`;

        const catBadge = document.getElementById('modalCategoryBadge');
        catBadge.textContent = dayObj.category;
        catBadge.className = `px-2.5 py-1 rounded-lg text-xs font-semibold border ${getCategoryBadgeClass(dayObj.category)}`;

        document.getElementById('modalPhaseLabel').textContent = phaseObj ? phaseObj.title : '';
        document.getElementById('modalTaskText').textContent = dayObj.task;
        document.getElementById('modalOutcomeText').textContent = dayObj.outcome;

        // Render Website / App thực hành trong Modal
        const modalToolsEl = document.getElementById('modalToolsList');
        modalToolsEl.innerHTML = (dayObj.tools || []).map((t) => {
          if (t.url === '#hsb-lab' || t.url === '#brief-generator') {
            const action = t.url === '#hsb-lab' ? 'open-hsb' : 'open-brief-gen';
            return `
              <button
                type="button"
                data-modal-tool-action="${action}"
                class="text-left p-3 rounded-xl border border-accent/30 bg-accent-light/60 dark:bg-accent/15 hover:border-accent transition-colors"
              >
                <div class="text-xs font-bold text-accent dark:text-accent-dark">${escapeHtml(t.name)} &rarr;</div>
                <div class="text-[11px] text-studio-muted dark:text-studio-darkMuted mt-0.5">${escapeHtml(t.role || '')}</div>
              </button>
            `;
          }
          return `
            <a
              href="${escapeHtml(t.url)}"
              target="_blank"
              rel="noopener noreferrer"
              class="block p-3 rounded-xl border border-studio-border dark:border-studio-darkBorder bg-studio-bg/70 dark:bg-studio-darkSubtle/60 hover:border-accent transition-colors"
            >
              <div class="flex items-center justify-between gap-1 text-xs font-bold text-studio-ink dark:text-studio-darkInk">
                <span>${escapeHtml(t.name)}</span>
                <svg class="w-3.5 h-3.5 text-accent dark:text-accent-dark shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </div>
              <div class="text-[11px] text-studio-muted dark:text-studio-darkMuted mt-0.5">${escapeHtml(t.role || '')}</div>
            </a>
          `;
        }).join('');

        modalToolsEl.querySelectorAll('[data-modal-tool-action]').forEach((btn) => {
          btn.addEventListener('click', () => {
            const action = btn.getAttribute('data-modal-tool-action');
            closeDayDetailModal();
            if (action === 'open-hsb') {
              openHsbModal();
            } else if (action === 'open-brief-gen') {
              switchHubTab('generator');
              document.getElementById('newbiePracticeHub').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          });
        });

        // Render Hướng dẫn từng bước cho Newbie
        const stepsEl = document.getElementById('modalStepsList');
        stepsEl.innerHTML = (dayObj.steps || []).map((st, idx) => `
          <li class="flex items-start gap-2.5 leading-relaxed">
            <span class="w-5 h-5 rounded-full bg-accent/15 text-accent dark:text-accent-dark font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">${idx + 1}</span>
            <span>${escapeHtml(st)}</span>
          </li>
        `).join('');

        // Render Ví dụ / Bài tập mẫu & Đáp án minh họa trực quan theo từng ngày
        document.getElementById('modalExampleBox').textContent = dayObj.example || '';
        const solPanel = document.getElementById('modalSolutionPanel');
        const solLabel = document.getElementById('modalSolutionToggleLabel');
        solPanel.classList.add('hidden');
        solLabel.textContent = `Xem đáp án & minh họa mẫu Ngày ${formatDayNum(dayObj.day)}`;
        solPanel.innerHTML = buildDailySolutionHtml(dayObj.day);
        solPanel.querySelectorAll('[data-copy-hex]').forEach((btn) => {
          btn.addEventListener('click', () => {
            const hex = btn.getAttribute('data-copy-hex');
            copyTextToClipboard(hex, `Đã sao chép mã màu ${hex}`);
          });
        });
        solPanel.querySelectorAll('[data-apply-ex1-hsb]').forEach((btn) => {
          btn.addEventListener('click', () => {
            closeDayDetailModal();
            hsbState.mode = 'manual';
            hsbState.parts = {
              bg60: { h: 25, s: 15, b: 96 },
              text30: { h: 25, s: 45, b: 18 },
              accent10: { h: 25, s: 75, b: 90 }
            };
            hsbState.activePart = 'bg60';
            syncSlidersToActiveHsb();
            openHsbModal();
            showToast('Đã nạp đáp án Ngày 01 vào Lab HSB (Chỉnh từng phần)!', 'success');
          });
        });
        solPanel.querySelectorAll('[data-toggle-ex6-gray]').forEach((btn) => {
          btn.addEventListener('click', () => {
            const poster = solPanel.querySelector('[data-ex6-poster]');
            if (!poster) return;
            const isGray = poster.style.filter === 'grayscale(100%)';
            poster.style.filter = isGray ? 'none' : 'grayscale(100%)';
            btn.textContent = isGray ? 'Thử Grayscale Check' : 'Bật lại màu gốc';
          });
        });

        // Hiện shortcut Lab HSB cho các ngày Phối màu hoặc Thực hành màu
        const showHsbHint = dayObj.category === 'Phối màu' || [13, 21, 27].includes(dayObj.day);
        document.getElementById('modalHsbShortcut').classList.toggle('hidden', !showHsbHint);

        // Checkbox & Pill trạng thái
        const checkbox = document.getElementById('modalCompleteCheckbox');
        checkbox.checked = isDone;
        updateModalStatusPill(isDone);

        // Ghi chú & Link
        document.getElementById('modalNoteTextarea').value = noteObj.text || '';
        document.getElementById('modalLinkInput').value = noteObj.link || '';
        updateLinkPreviewButton(noteObj.link || '');

        // Nút điều hướng Ngày trước / Ngày sau
        document.getElementById('modalPrevDayBtn').disabled = dayNum <= 1;
        document.getElementById('modalNextDayBtn').disabled = dayNum >= 30;

        const modal = document.getElementById('dayDetailModal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }

      function updateModalStatusPill(isDone) {
        const pill = document.getElementById('modalStatusPill');
        if (isDone) {
          pill.textContent = 'Đã hoàn thành';
          pill.className = 'px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300';
        } else {
          pill.textContent = 'Chưa làm';
          pill.className = 'px-2.5 py-1 rounded-full text-xs font-semibold bg-studio-card dark:bg-studio-darkCard text-studio-muted dark:text-studio-darkMuted border border-studio-border dark:border-studio-darkBorder';
        }
      }

      function updateLinkPreviewButton(urlStr) {
        const previewBtn = document.getElementById('modalLinkPreview');
        const trimmed = urlStr.trim();
        if (trimmed && /^https?:\/\//i.test(trimmed)) {
          previewBtn.href = trimmed;
          previewBtn.classList.remove('hidden');
          previewBtn.classList.add('inline-flex');
        } else {
          previewBtn.removeAttribute('href');
          previewBtn.classList.add('hidden');
          previewBtn.classList.remove('inline-flex');
        }
      }

      function saveActiveDayNote(showFeedback = true) {
        if (activeModalDay === null) return;
        const text = document.getElementById('modalNoteTextarea').value.trim();
        const link = document.getElementById('modalLinkInput').value.trim();

        if (!text && !link) {
          delete state.notes[activeModalDay];
        } else {
          state.notes[activeModalDay] = { text, link };
        }
        saveState();
        renderRoadmapContent();

        if (showFeedback) {
          showToast(`Đã lưu ghi chú cho Ngày ${formatDayNum(activeModalDay)}`, 'success');
        }
      }

      function closeDayDetailModal() {
        if (activeModalDay !== null) {
          saveActiveDayNote(false);
        }
        const modal = document.getElementById('dayDetailModal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        activeModalDay = null;
      }

      // =========================================================================
      // 10. WIDGET THỰC HÀNH NHANH HSB & TỶ LỆ 60-30-10 + WCAG CONTRAST
      // =========================================================================
      function hsbToRgb(h, s, b) {
        const sNorm = s / 100;
        const vNorm = b / 100;
        const c = vNorm * sNorm;
        const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
        const m = vNorm - c;

        let r1 = 0, g1 = 0, b1 = 0;
        if (h >= 0 && h < 60) { r1 = c; g1 = x; b1 = 0; }
        else if (h >= 60 && h < 120) { r1 = x; g1 = c; b1 = 0; }
        else if (h >= 120 && h < 180) { r1 = 0; g1 = c; b1 = x; }
        else if (h >= 180 && h < 240) { r1 = 0; g1 = x; b1 = c; }
        else if (h >= 240 && h < 300) { r1 = x; g1 = 0; b1 = c; }
        else { r1 = c; g1 = 0; b1 = x; }

        return {
          r: Math.round((r1 + m) * 255),
          g: Math.round((g1 + m) * 255),
          b: Math.round((b1 + m) * 255)
        };
      }

      function rgbToHex({ r, g, b }) {
        const toHex = (n) => n.toString(16).padStart(2, '0').toUpperCase();
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
      }

      function getLuminance({ r, g, b }) {
        const normalize = (v) => {
          const c = v / 255;
          return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
        };
        return 0.2126 * normalize(r) + 0.7152 * normalize(g) + 0.0722 * normalize(b);
      }

      function getContrastRatio(rgb1, rgb2) {
        const l1 = getLuminance(rgb1);
        const l2 = getLuminance(rgb2);
        const lighter = Math.max(l1, l2);
        const darker = Math.min(l1, l2);
        return (lighter + 0.05) / (darker + 0.05);
      }

      function rgbToHsb({ r, g, b }) {
        const rn = r / 255, gn = g / 255, bn = b / 255;
        const max = Math.max(rn, gn, bn);
        const min = Math.min(rn, gn, bn);
        const d = max - min;
        let h = 0;
        if (d !== 0) {
          if (max === rn) h = ((gn - bn) / d) % 6;
          else if (max === gn) h = (bn - rn) / d + 2;
          else h = (rn - gn) / d + 4;
          h = Math.round(h * 60);
          if (h < 0) h += 360;
        }
        const s = max === 0 ? 0 : Math.round((d / max) * 100);
        const v = Math.round(max * 100);
        return { h, s, b: v };
      }

      function hexToRgb(hex) {
        const clean = hex.replace('#', '');
        return {
          r: parseInt(clean.slice(0, 2), 16),
          g: parseInt(clean.slice(2, 4), 16),
          b: parseInt(clean.slice(4, 6), 16)
        };
      }

      function syncSlidersToActiveHsb() {
        const cur = hsbState.mode === 'manual' ? hsbState.parts[hsbState.activePart] : hsbState;
        document.getElementById('hueSlider').value = cur.h;
        document.getElementById('satSlider').value = cur.s;
        document.getElementById('briSlider').value = cur.b;
      }

      function applyWcagBadge(ratio, valElId, badgeElId) {
        document.getElementById(valElId).textContent = `${ratio.toFixed(2)} : 1`;
        const badge = document.getElementById(badgeElId);
        if (ratio >= 7) {
          badge.textContent = 'Đạt AAA (Rất tốt)';
          badge.className = 'px-2 py-0.5 rounded-md font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300';
        } else if (ratio >= 4.5) {
          badge.textContent = 'Đạt AA (Chuẩn)';
          badge.className = 'px-2 py-0.5 rounded-md font-bold bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300';
        } else {
          badge.textContent = 'Chưa đạt (Khó đọc)';
          badge.className = 'px-2 py-0.5 rounded-md font-bold bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300';
        }
      }

      function updateHsbLab() {
        const isManual = hsbState.mode === 'manual';
        const { previewDark, grayscale } = hsbState;

        // Cập nhật giao diện nút chế độ Auto / Manual
        const autoBtn = document.getElementById('hsbModeAutoBtn');
        const manualBtn = document.getElementById('hsbModeManualBtn');
        const activeModeCls = ['bg-studio-card', 'dark:bg-studio-darkCard', 'text-accent', 'dark:text-accent-dark', 'shadow-sm'];
        const inactiveModeCls = ['text-studio-muted', 'dark:text-studio-darkMuted', 'hover:text-studio-ink', 'dark:hover:text-white'];

        if (isManual) {
          manualBtn.classList.add(...activeModeCls);
          manualBtn.classList.remove(...inactiveModeCls);
          autoBtn.classList.remove(...activeModeCls);
          autoBtn.classList.add(...inactiveModeCls);
        } else {
          autoBtn.classList.add(...activeModeCls);
          autoBtn.classList.remove(...inactiveModeCls);
          manualBtn.classList.remove(...activeModeCls);
          manualBtn.classList.add(...inactiveModeCls);
        }

        document.getElementById('hsbPartSelector').classList.toggle('hidden', !isManual);
        document.getElementById('previewModeToggleBtn').classList.toggle('hidden', isManual);

        // Xác định thông số HSB đang điều khiển trên 3 thanh kéo
        const activeHsb = isManual ? hsbState.parts[hsbState.activePart] : { h: hsbState.h, s: hsbState.s, b: hsbState.b };
        const { h, s, b } = activeHsb;

        document.getElementById('hueVal').textContent = `${h}°`;
        document.getElementById('satVal').textContent = `${s}%`;
        document.getElementById('briVal').textContent = `${b}%`;

        const pureHueHex = rgbToHex(hsbToRgb(h, 100, Math.max(15, b)));
        const grayAtBHex = rgbToHex(hsbToRgb(h, 0, b));
        document.getElementById('satSlider').style.background = `linear-gradient(to right, ${grayAtBHex}, ${pureHueHex})`;
        document.getElementById('briSlider').style.background = `linear-gradient(to right, #18181B, ${rgbToHex(hsbToRgb(h, s, 100))})`;

        // Tính 3 màu 60% / 30% / 10%
        let bg60Rgb, secondary30Rgb, accentRgb;
        let cardBgHex, art30BgHex, cardBorderHex, badgeBgHex, badgeTextHex;

        if (!isManual) {
          accentRgb = hsbToRgb(hsbState.h, hsbState.s, hsbState.b);
          const ah = hsbState.h, as = hsbState.s, ab = hsbState.b;

          if (!previewDark) {
            bg60Rgb = hsbToRgb(ah, Math.min(8, Math.round(as * 0.12)), 97);
            cardBgHex = '#FFFFFF';
            secondary30Rgb = hsbToRgb(ah, Math.min(28, Math.round(as * 0.4)), 22);
            art30BgHex = rgbToHex(hsbToRgb(ah, Math.min(18, Math.round(as * 0.25)), 93));
            cardBorderHex = rgbToHex(hsbToRgb(ah, Math.min(14, Math.round(as * 0.2)), 89));
            badgeBgHex = rgbToHex(hsbToRgb(ah, Math.min(22, Math.round(as * 0.3)), 95));
            badgeTextHex = rgbToHex(accentRgb);
          } else {
            bg60Rgb = hsbToRgb(ah, Math.min(24, Math.round(as * 0.35)), 11);
            cardBgHex = rgbToHex(hsbToRgb(ah, Math.min(22, Math.round(as * 0.32)), 17));
            secondary30Rgb = hsbToRgb(ah, Math.min(12, Math.round(as * 0.18)), 95);
            art30BgHex = rgbToHex(hsbToRgb(ah, Math.min(24, Math.round(as * 0.35)), 23));
            cardBorderHex = rgbToHex(hsbToRgb(ah, Math.min(22, Math.round(as * 0.3)), 28));
            badgeBgHex = rgbToHex(hsbToRgb(ah, Math.min(35, Math.round(as * 0.5)), 26));
            badgeTextHex = rgbToHex(hsbToRgb(ah, Math.max(45, as), Math.min(100, ab + 15)));
          }
        } else {
          const p60 = hsbState.parts.bg60;
          const p30 = hsbState.parts.text30;
          const p10 = hsbState.parts.accent10;

          bg60Rgb = hsbToRgb(p60.h, p60.s, p60.b);
          secondary30Rgb = hsbToRgb(p30.h, p30.s, p30.b);
          accentRgb = hsbToRgb(p10.h, p10.s, p10.b);

          const isBgDark = getLuminance(bg60Rgb) < 0.35;
          // Thẻ card lấy gần màu nền 60% nhưng sáng/tối hơn nhẹ để tách lớp
          cardBgHex = rgbToHex(hsbToRgb(p60.h, Math.max(0, p60.s - 4), isBgDark ? Math.min(100, p60.b + 7) : Math.min(100, p60.b + 3)));
          art30BgHex = rgbToHex(hsbToRgb(p60.h, Math.min(100, p60.s + 8), isBgDark ? Math.min(100, p60.b + 12) : Math.max(0, p60.b - 6)));
          cardBorderHex = rgbToHex(hsbToRgb(p60.h, Math.min(100, p60.s + 6), isBgDark ? Math.min(100, p60.b + 16) : Math.max(0, p60.b - 10)));
          badgeBgHex = rgbToHex(hsbToRgb(p10.h, Math.min(35, Math.round(p10.s * 0.45)), isBgDark ? 26 : 94));
          badgeTextHex = isBgDark ? rgbToHex(hsbToRgb(p10.h, Math.max(40, p10.s), Math.min(100, p10.b + 15))) : rgbToHex(accentRgb);
        }

        const hex60 = rgbToHex(bg60Rgb);
        const hex30 = rgbToHex(secondary30Rgb);
        const accentHex = rgbToHex(accentRgb);

        hsbState.currentHex60 = hex60;
        hsbState.currentHex30 = hex30;
        hsbState.currentHex10 = accentHex;

        // Chọn màu chữ tối ưu trên nút CTA 10%
        const whiteRgb = { r: 255, g: 255, b: 255 };
        const darkInkRgb = { r: 17, g: 24, b: 39 };
        const contrastWhite = getContrastRatio(accentRgb, whiteRgb);
        const contrastDark = getContrastRatio(accentRgb, darkInkRgb);
        const bestCtaTextHex = contrastWhite >= contrastDark ? '#FFFFFF' : '#111827';
        const bestCtaRatio = Math.max(contrastWhite, contrastDark);

        // Tính tương phản chữ 30% trên thẻ (hoặc nền 60%)
        const cardRgb = hexToRgb(cardBgHex);
        const textBgRatio = getContrastRatio(secondary30Rgb, cardRgb);

        // Cập nhật ô swatch chính hiển thị đúng phần đang chỉnh
        const activeRgb = hsbToRgb(h, s, b);
        const activeHex = rgbToHex(activeRgb);
        const targetNames = {
          bg60: 'Đang chỉnh: 60% Màu Nền (Background)',
          text30: 'Đang chỉnh: 30% Màu Khối & Chữ (Text)',
          accent10: 'Đang chỉnh: 10% Màu Nút Nhấn (Accent)'
        };
        document.getElementById('hsbActiveTargetLabel').textContent = isManual ? targetNames[hsbState.activePart] : 'Màu nhấn 10% (Accent • Tự pha 60% & 30%)';
        document.getElementById('hsbSwatchPreview').style.backgroundColor = activeHex;
        document.getElementById('hsbHexOutput').textContent = activeHex;
        document.getElementById('hsbValuesLabel').textContent = `HSB(${h}°, ${s}%, ${b}%) • RGB(${activeRgb.r}, ${activeRgb.g}, ${activeRgb.b})`;

        // Cập nhật 3 nút chọn phần trong chế độ Manual
        document.getElementById('partDot60').style.backgroundColor = hex60;
        document.getElementById('partSub60').textContent = hex60;
        document.getElementById('partDot30').style.backgroundColor = hex30;
        document.getElementById('partSub30').textContent = hex30;
        document.getElementById('partDot10').style.backgroundColor = accentHex;
        document.getElementById('partSub10').textContent = accentHex;

        [
          { key: 'bg60', id: 'hsbPartBtn60' },
          { key: 'text30', id: 'hsbPartBtn30' },
          { key: 'accent10', id: 'hsbPartBtn10' }
        ].forEach(({ key, id }) => {
          const btn = document.getElementById(id);
          if (hsbState.activePart === key) {
            btn.className = 'flex items-center gap-2 p-2.5 rounded-xl border-2 border-accent bg-accent-light/60 dark:bg-accent/20 text-left transition-all';
          } else {
            btn.className = 'flex items-center gap-2 p-2.5 rounded-xl border border-studio-border dark:border-studio-darkBorder bg-studio-bg/60 dark:bg-studio-darkSubtle/50 hover:border-accent/50 text-left transition-all';
          }
        });

        // Cập nhật thanh tỷ lệ 60-30-10
        const bar60 = document.getElementById('bar60');
        const bar30 = document.getElementById('bar30');
        const bar10 = document.getElementById('bar10');

        bar60.style.backgroundColor = hex60;
        bar60.style.color = getLuminance(bg60Rgb) < 0.35 ? '#F1F5F9' : '#1E293B';

        bar30.style.backgroundColor = hex30;
        bar30.style.color = getLuminance(secondary30Rgb) < 0.35 ? '#F8FAFC' : '#0F172A';

        bar10.style.backgroundColor = accentHex;
        bar10.style.color = bestCtaTextHex;

        document.getElementById('hex60Label').textContent = hex60;
        document.getElementById('hex30Label').textContent = hex30;
        document.getElementById('hex10Label').textContent = accentHex;

        // Cập nhật Mini-Card Preview
        const canvas60 = document.getElementById('previewCanvas60');
        canvas60.style.backgroundColor = hex60;
        canvas60.style.filter = grayscale ? 'grayscale(100%)' : 'none';

        const cardBox = document.getElementById('previewCardBox');
        cardBox.style.backgroundColor = cardBgHex;
        cardBox.style.borderColor = cardBorderHex;
        cardBox.style.color = hex30;

        const badge10 = document.getElementById('previewBadge10');
        badge10.style.backgroundColor = badgeBgHex;
        badge10.style.color = badgeTextHex;

        const art30 = document.getElementById('previewArt30');
        art30.style.backgroundColor = art30BgHex;
        art30.style.color = hex30;

        document.getElementById('previewArtOrb10').style.backgroundColor = accentHex;

        const cta10 = document.getElementById('previewCta10');
        cta10.style.backgroundColor = accentHex;
        cta10.style.color = bestCtaTextHex;

        const secondaryBtn = document.getElementById('previewSecondaryBtn30');
        secondaryBtn.style.borderColor = cardBorderHex;
        secondaryBtn.style.color = hex30;

        document.getElementById('previewModeToggleBtn').textContent = previewDark ? 'Nền: Tối' : 'Nền: Sáng';
        const grayBtn = document.getElementById('grayscaleToggleBtn');
        if (grayscale) {
          grayBtn.classList.add('bg-studio-ink', 'text-white', 'dark:bg-white', 'dark:text-studio-ink');
        } else {
          grayBtn.classList.remove('bg-studio-ink', 'text-white', 'dark:bg-white', 'dark:text-studio-ink');
        }

        applyWcagBadge(bestCtaRatio, 'wcagRatioVal', 'wcagPassBadge');
        applyWcagBadge(textBgRatio, 'wcagTextRatioVal', 'wcagTextPassBadge');
      }

      function openHsbModal() {
        updateHsbLab();
        const modal = document.getElementById('hsbModal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }

      function closeHsbModal() {
        saveState();
        const modal = document.getElementById('hsbModal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }

      // =========================================================================
      // 11. XUẤT DỮ LIỆU (.CSV / .JSON) & RESET TIẾN ĐỘ
      // =========================================================================
      function downloadFile(content, filename, mimeType) {
        try {
          const blob = new Blob([content], { type: mimeType });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          showToast(`Đã tải xuống ${filename}`, 'success');
        } catch (err) {
          showToast('Có lỗi khi xuất file. Vui lòng thử lại.', 'error');
        }
      }

      function exportCsv() {
        const headers = ['Ngày', 'Giai đoạn', 'Mảng', 'Nhiệm vụ cụ thể', 'Website / App thực hành', 'Đã học được gì?', 'Trạng thái', 'Ghi chú cá nhân', 'Link bài làm'];
        const escapeCsvCell = (val) => `"${String(val || '').replace(/"/g, '""')}"`;

        const rows = ROADMAP_DAYS.map((d) => {
          const phaseObj = PHASES.find((p) => p.id === d.phase);
          const isDone = Boolean(state.completedDays[d.day]);
          const noteObj = state.notes[d.day] || {};
          const toolsStr = (d.tools || []).map((t) => `${t.name} (${t.url})`).join('; ');

          return [
            `Ngày ${formatDayNum(d.day)}`,
            phaseObj ? phaseObj.title : `Giai đoạn ${d.phase}`,
            d.category,
            d.task,
            toolsStr,
            d.outcome,
            isDone ? 'Đã xong' : 'Chưa làm',
            noteObj.text || '',
            noteObj.link || ''
          ].map(escapeCsvCell).join(',');
        });

        const csvContent = '\uFEFF' + [headers.map(escapeCsvCell).join(','), ...rows].join('\n');
        downloadFile(csvContent, 'roadmap-30-ngay-design.csv', 'text/csv;charset=utf-8;');
      }

      function exportJson() {
        const snapshot = buildFullStateSnapshot();
        const payload = {
          ...snapshot,
          exportedAt: new Date().toISOString(),
          title: 'Roadmap 30 Ngày Làm Chủ Phối Màu & Lên Idea Thiết Kế',
          summary: {
            completedDaysCount: ROADMAP_DAYS.filter((d) => state.completedDays[d.day]).length,
            totalDays: 30,
            completedCompetenciesCount: CORE_COMPETENCIES.filter((c) => state.competencies[c.id]).length
          },
          progress: state.completedDays,
          days: ROADMAP_DAYS.map((d) => ({
            ...d,
            completed: Boolean(state.completedDays[d.day]),
            userNote: state.notes[d.day]?.text || '',
            userLink: state.notes[d.day]?.link || ''
          }))
        };
        downloadFile(JSON.stringify(payload, null, 2), 'progress_data.json', 'application/json;charset=utf-8;');
      }

      function importJsonFile(file) {
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          try {
            const parsed = JSON.parse(String(ev.target.result || ''));
            const ok = applyLoadedSnapshot(parsed);
            if (!ok) throw new Error('Invalid JSON structure');
            applyTheme();
            syncFilterControlsUI();
            switchHubTab(activeHubTab);
            renderTools();
            syncSlidersToActiveHsb();
            updateHsbLab();
            renderAll();
            saveState();
            updateSaveStatusUI('Đã khôi phục từ file .JSON');
            showToast('Đã khôi phục toàn bộ trạng thái từ file .JSON thành công!', 'success');
          } catch (err) {
            showToast('File .JSON không hợp lệ. Hãy chọn file progress_data.json đã xuất từ web này.', 'error');
          }
        };
        reader.readAsText(file, 'utf-8');
      }

      function openResetModal() {
        const modal = document.getElementById('resetConfirmModal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }

      function closeResetModal() {
        const modal = document.getElementById('resetConfirmModal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }

      function confirmResetProgress() {
        state.completedDays = {};
        state.notes = {};
        state.competencies = {};
        saveState();
        closeResetModal();
        renderAll();
        showToast('Đã đặt lại toàn bộ tiến độ và ghi chú về ban đầu.', 'info');
      }

      function resetAllFilters() {
        filters = { search: '', phase: 'all', category: 'all', status: 'all' };
        document.getElementById('searchInput').value = '';
        document.getElementById('phaseFilter').value = 'all';
        document.getElementById('categoryFilter').value = 'all';
        document.getElementById('statusFilter').value = 'all';
        renderAll();
      }

      // =========================================================================
      // 12. RENDER TỔNG & KHỞI TẠO SỰ KIỆN
      // =========================================================================
      function renderAll() {
        updateViewSwitcherUI();
        renderDashboard();
        renderRoadmapContent();
        renderCompetencies();
      }

      function bindGlobalEvents() {
        // Theme toggle
        document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);

        // Tài khoản Email (Đăng ký / Đăng nhập / Hồ sơ)
        document.getElementById('openAuthBtn').addEventListener('click', () => openAuthModal('register'));
        document.getElementById('closeAuthModalBtn').addEventListener('click', closeAuthModal);
        document.getElementById('authModal').addEventListener('click', (e) => {
          if (e.target.id === 'authModal') closeAuthModal();
        });
        document.getElementById('authTabLoginBtn').addEventListener('click', () => switchAuthTab('login'));
        document.getElementById('authTabRegisterBtn').addEventListener('click', () => switchAuthTab('register'));
        document.getElementById('registerForm').addEventListener('submit', handleRegisterSubmit);
        document.getElementById('loginForm').addEventListener('submit', handleLoginSubmit);
        document.getElementById('logoutBtn').addEventListener('click', handleLogout);
        document.getElementById('profileExportJsonBtn').addEventListener('click', exportJson);

        // Nút cuộn nhanh đến Trung tâm Bài tập cho Newbie
        document.getElementById('scrollToPracticeBtn').addEventListener('click', () => {
          document.getElementById('newbiePracticeHub').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });

        // Tabs trong Trung tâm Thực hành cho Newbie
        document.querySelectorAll('[data-hub-tab]').forEach((btn) => {
          btn.addEventListener('click', () => {
            switchHubTab(btn.getAttribute('data-hub-tab'));
            saveState();
          });
        });

        // Nút Tạo Đề Bài (Brief Generator)
        document.getElementById('generateBriefBtn').addEventListener('click', () => {
          generateDesignBrief();
          showToast('Đã tạo đề bài thực hành mới!', 'success');
        });

        // Bộ lọc trong Bộ Công Cụ Khuyên Dùng
        document.querySelectorAll('#toolFilterBar [data-tool-filter]').forEach((btn) => {
          btn.addEventListener('click', () => {
            activeToolFilter = btn.getAttribute('data-tool-filter');
            renderTools();
            saveState();
          });
        });

        // View Switcher
        document.getElementById('viewRoadmapBtn').addEventListener('click', () => {
          state.viewMode = 'roadmap';
          saveState();
          renderAll();
        });
        document.getElementById('viewTableBtn').addEventListener('click', () => {
          state.viewMode = 'table';
          saveState();
          renderAll();
        });

        // Bộ lọc & Tìm kiếm
        document.getElementById('searchInput').addEventListener('input', (e) => {
          filters.search = e.target.value;
          renderRoadmapContent();
        });
        document.getElementById('clearSearchBtn').addEventListener('click', () => {
          filters.search = '';
          document.getElementById('searchInput').value = '';
          renderRoadmapContent();
        });
        document.getElementById('phaseFilter').addEventListener('change', (e) => {
          filters.phase = e.target.value;
          saveState();
          renderAll();
        });
        document.getElementById('categoryFilter').addEventListener('change', (e) => {
          filters.category = e.target.value;
          saveState();
          renderRoadmapContent();
        });
        document.getElementById('statusFilter').addEventListener('change', (e) => {
          filters.status = e.target.value;
          saveState();
          renderRoadmapContent();
        });
        document.getElementById('resetFiltersBtn').addEventListener('click', resetAllFilters);

        // Xuất dữ liệu & Reset
        document.getElementById('exportCsvBtn').addEventListener('click', exportCsv);
        document.getElementById('exportJsonBtn').addEventListener('click', exportJson);
        document.getElementById('importJsonBtn').addEventListener('click', () => {
          document.getElementById('importJsonInput').click();
        });
        document.getElementById('importJsonInput').addEventListener('change', (e) => {
          const file = e.target.files && e.target.files[0];
          if (file) importJsonFile(file);
          e.target.value = '';
        });
        document.getElementById('openResetBtn').addEventListener('click', openResetModal);
        document.getElementById('cancelResetBtn').addEventListener('click', closeResetModal);
        document.getElementById('confirmResetBtn').addEventListener('click', confirmResetProgress);
        document.getElementById('resetConfirmModal').addEventListener('click', (e) => {
          if (e.target.id === 'resetConfirmModal') closeResetModal();
        });

        // Modal Chi tiết ngày học
        document.getElementById('closeDetailModalBtn').addEventListener('click', closeDayDetailModal);
        document.getElementById('dayDetailModal').addEventListener('click', (e) => {
          if (e.target.id === 'dayDetailModal') closeDayDetailModal();
        });
        document.getElementById('copyModalExampleBtn').addEventListener('click', () => {
          const text = document.getElementById('modalExampleBox').textContent;
          if (text) copyTextToClipboard(text, 'Đã sao chép ví dụ mẫu!');
        });
        document.getElementById('modalSolutionToggleBtn').addEventListener('click', () => {
          const panel = document.getElementById('modalSolutionPanel');
          const label = document.getElementById('modalSolutionToggleLabel');
          const isHidden = panel.classList.toggle('hidden');
          const dayStr = activeModalDay ? formatDayNum(activeModalDay) : '';
          label.textContent = isHidden ? `Xem đáp án & minh họa mẫu Ngày ${dayStr}` : `Ẩn đáp án mẫu Ngày ${dayStr}`;
        });
        document.getElementById('modalCompleteCheckbox').addEventListener('change', (e) => {
          if (activeModalDay === null) return;
          if (e.target.checked) {
            state.completedDays[activeModalDay] = true;
            showToast(`Đã hoàn thành Ngày ${formatDayNum(activeModalDay)}!`, 'success');
          } else {
            delete state.completedDays[activeModalDay];
          }
          updateModalStatusPill(e.target.checked);
          saveState();
          renderAll();
        });
        document.getElementById('modalLinkInput').addEventListener('input', (e) => {
          updateLinkPreviewButton(e.target.value);
        });
        document.getElementById('saveNoteBtn').addEventListener('click', () => saveActiveDayNote(true));
        document.getElementById('modalPrevDayBtn').addEventListener('click', () => {
          if (activeModalDay > 1) {
            saveActiveDayNote(false);
            openDayDetailModal(activeModalDay - 1);
          }
        });
        document.getElementById('modalNextDayBtn').addEventListener('click', () => {
          if (activeModalDay < 30) {
            saveActiveDayNote(false);
            openDayDetailModal(activeModalDay + 1);
          }
        });
        document.getElementById('modalOpenHsbBtn').addEventListener('click', () => {
          closeDayDetailModal();
          openHsbModal();
        });

        // Widget HSB & 60-30-10
        document.getElementById('openHsbBtn').addEventListener('click', openHsbModal);
        document.getElementById('closeHsbModalBtn').addEventListener('click', closeHsbModal);
        document.getElementById('hsbModal').addEventListener('click', (e) => {
          if (e.target.id === 'hsbModal') closeHsbModal();
        });
        document.getElementById('hsbModeAutoBtn').addEventListener('click', () => {
          hsbState.mode = 'auto';
          hsbState.h = hsbState.parts.accent10.h;
          hsbState.s = hsbState.parts.accent10.s;
          hsbState.b = hsbState.parts.accent10.b;
          syncSlidersToActiveHsb();
          updateHsbLab();
        });
        document.getElementById('hsbModeManualBtn').addEventListener('click', () => {
          if (hsbState.mode !== 'manual') {
            hsbState.parts.bg60 = rgbToHsb(hexToRgb(hsbState.currentHex60));
            hsbState.parts.text30 = rgbToHsb(hexToRgb(hsbState.currentHex30));
            hsbState.parts.accent10 = { h: hsbState.h, s: hsbState.s, b: hsbState.b };
            hsbState.mode = 'manual';
            syncSlidersToActiveHsb();
            updateHsbLab();
          }
        });
        document.querySelectorAll('[data-hsb-part]').forEach((btn) => {
          btn.addEventListener('click', () => {
            hsbState.mode = 'manual';
            hsbState.activePart = btn.getAttribute('data-hsb-part');
            syncSlidersToActiveHsb();
            updateHsbLab();
          });
        });
        document.getElementById('hsbPresetEx1Btn').addEventListener('click', () => {
          hsbState.mode = 'manual';
          hsbState.parts = {
            bg60: { h: 25, s: 15, b: 96 },
            text30: { h: 25, s: 45, b: 18 },
            accent10: { h: 25, s: 75, b: 90 }
          };
          hsbState.activePart = 'bg60';
          syncSlidersToActiveHsb();
          updateHsbLab();
          showToast('Đã áp bộ 3 màu Cam (H=25°) mẫu Bài 1 — Bạn thử chọn từng phần để kéo thêm nhé!', 'success');
        });
        document.getElementById('hueSlider').addEventListener('input', (e) => {
          const val = Number(e.target.value);
          if (hsbState.mode === 'manual') hsbState.parts[hsbState.activePart].h = val;
          else hsbState.h = val;
          updateHsbLab();
        });
        document.getElementById('satSlider').addEventListener('input', (e) => {
          const val = Number(e.target.value);
          if (hsbState.mode === 'manual') hsbState.parts[hsbState.activePart].s = val;
          else hsbState.s = val;
          updateHsbLab();
        });
        document.getElementById('briSlider').addEventListener('input', (e) => {
          const val = Number(e.target.value);
          if (hsbState.mode === 'manual') hsbState.parts[hsbState.activePart].b = val;
          else hsbState.b = val;
          updateHsbLab();
        });
        document.getElementById('previewModeToggleBtn').addEventListener('click', () => {
          hsbState.previewDark = !hsbState.previewDark;
          updateHsbLab();
        });
        document.getElementById('grayscaleToggleBtn').addEventListener('click', () => {
          hsbState.grayscale = !hsbState.grayscale;
          updateHsbLab();
        });
        document.getElementById('copyAccentHexBtn').addEventListener('click', () => {
          const hex = document.getElementById('hsbHexOutput').textContent;
          copyTextToClipboard(hex, `Đã sao chép mã màu ${hex}`);
        });
        document.getElementById('bar60').addEventListener('click', () => copyTextToClipboard(hsbState.currentHex60, `Đã sao chép mã màu ${hsbState.currentHex60}`));
        document.getElementById('bar30').addEventListener('click', () => copyTextToClipboard(hsbState.currentHex30, `Đã sao chép mã màu ${hsbState.currentHex30}`));
        document.getElementById('bar10').addEventListener('click', () => copyTextToClipboard(hsbState.currentHex10, `Đã sao chép mã màu ${hsbState.currentHex10}`));

        // Phím ESC để đóng mọi modal đang mở
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            if (!document.getElementById('dayDetailModal').classList.contains('hidden')) closeDayDetailModal();
            if (!document.getElementById('hsbModal').classList.contains('hidden')) closeHsbModal();
            if (!document.getElementById('resetConfirmModal').classList.contains('hidden')) closeResetModal();
            if (!document.getElementById('authModal').classList.contains('hidden')) closeAuthModal();
          }
        });
      }

      // Khởi chạy ứng dụng khi DOM đã sẵn sàng
      document.addEventListener('DOMContentLoaded', () => {
        loadSessionUser();
        updateAuthHeaderUI();
        loadState();
        applyTheme();
        syncFilterControlsUI();
        switchHubTab(activeHubTab);
        renderStarterExercises();
        generateDesignBrief();
        renderTools();
        syncSlidersToActiveHsb();
        bindGlobalEvents();
        renderAll();
        if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
          const emailKey = currentUser && currentUser.email ? currentUser.email.toLowerCase() : 'guest';
          fetch(`api/state?email=${encodeURIComponent(emailKey)}`)
            .then((res) => (res.ok ? res.json() : null))
            .then((diskData) => {
              if (diskData && typeof diskData === 'object' && Object.keys(diskData).length > 0) {
                applyLoadedSnapshot(diskData);
                applyTheme();
                syncFilterControlsUI();
                switchHubTab(activeHubTab);
                renderTools();
                syncSlidersToActiveHsb();
                renderAll();
                updateSaveStatusUI(`Đã đồng bộ từ progress_data.json (${emailKey})`);
              }
            })
            .catch(() => {});
        }

      });
    })();
