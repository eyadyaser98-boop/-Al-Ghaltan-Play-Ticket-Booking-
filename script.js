document.addEventListener("DOMContentLoaded", () => {
    
    // فتح الستارة الحمراء وإخفاء شاشة التحميل (مع ضمان عدم تعليق الشاشة السوداء أبداً)
    const openCurtain = () => {
        document.body.classList.add("loaded");
    };

    setTimeout(openCurtain, 900);
    // حماية إضافية في حال تأخر التحميل
    window.addEventListener("load", openCurtain);
    setTimeout(openCurtain, 2500);

    // التحكم في عداد التذاكر والأسعار (تم ضبط السعر على 50 جنيه)
    const minusBtn = document.getElementById("minus");
    const plusBtn = document.getElementById("plus");
    const ticketCountSpan = document.getElementById("ticketCount");
    const totalPriceStrong = document.getElementById("totalPrice");
    const ticketPrice = 50; 
    
    let count = 1;

    if (plusBtn && minusBtn && ticketCountSpan && totalPriceStrong) {
        plusBtn.addEventListener("click", () => {
            if (count < 10) {
                count++;
                updateTickets();
            }
        });

        minusBtn.addEventListener("click", () => {
            if (count > 1) {
                count--;
                updateTickets();
            }
        });
    }

    function updateTickets() {
        ticketCountSpan.textContent = count;
        totalPriceStrong.textContent = (count * ticketPrice) + " جنيه";
    }

    // نموذج الحجز والتحويل التلقائي للواتساب
    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {
        bookingForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const name = document.getElementById("name").value;
            const phone = document.getElementById("phone").value;
            const tickets = ticketCountSpan ? ticketCountSpan.textContent : "1";
            const totalPrice = totalPriceStrong ? totalPriceStrong.textContent : "50 جنيه";
            
            const whatsappNumber = "201200246120";
            
            const message = `مرحباً، أرغب في تأكيد حجز عرض مسرح الإقليمية:\n\n👤 الاسم: ${name}\n📱 الهاتف: ${phone}\n🎟️ عدد التذاكر: ${tickets}\n💰 الإجمالي: ${totalPrice}`;
            
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            window.open(whatsappURL, "_blank");
        });
    }

    // زر العودة للأعلى
    const backToTopBtn = document.getElementById("backToTop");

    if (backToTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        });

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
