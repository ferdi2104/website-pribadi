/* ============================================
   JokiPro - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavbar();
    initThemeToggle();
    initMobileMenu();
    initScrollAnimations();
    initCounterAnimations();
    initModal();
    initAdminLogout();
});

/* ============================================
   Navbar Scroll Effect
   ============================================ */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
}

/* ============================================
   Theme Toggle (Dark/Light Mode)
   ============================================ */
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDark.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

/* ============================================
   Mobile Menu
   ============================================ */
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

/* ============================================
   Scroll Animations
   ============================================ */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Add animation class to elements
    const animatedElements = document.querySelectorAll(
        '.service-card, .why-card, .step-card, .testimonial-card'
    );
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Add CSS for animation
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

/* ============================================
   Counter Animations
   ============================================ */
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounter(element, target) {
    const duration = 2000;
    const startTime = performance.now();
    const startValue = 0;
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(startValue + (target - startValue) * easeOutQuart);
        
        element.textContent = current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

/* ============================================
   Modal Functions
   ============================================ */
function initModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function showModal(type) {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalBody = document.getElementById('modalBody');
    
    let content = '';
    
    switch(type) {
        case 'faq':
            content = `
                <h2>FAQ - Pertanyaan Umum</h2>
                <div class="faq-item">
                    <h4>1. Bagaimana cara memesan?</h4>
                    <p>Anda dapat memesan melalui WhatsApp atau mengisi form order di halaman kontak. Tim kami akan merespon dalam waktu maksimal 1 jam.</p>
                </div>
                <div class="faq-item">
                    <h4>2. Berapa lama waktu pengerjaan?</h4>
                    <p>Tergantung jenis dan kompleksitas tugas. Tugas reguler biasanya 1-3 hari, sedangkan skripsi bisa 2-4 minggu.</p>
                </div>
                <div class="faq-item">
                    <h4>3. Apakah ada jaminan?</h4>
                    <p>Ya! Kami memberikan garansi revisi gratis sampai Anda puas dan garansi uang kembali jika hasil tidak sesuai.</p>
                </div>
                <div class="faq-item">
                    <h4>4. Bagaimana dengan kerahasiaan?</h4>
                    <p>Data dan identitas Anda 100% aman. Kami tidak pernah membagikan informasi pelanggan kepada pihak ketiga.</p>
                </div>
                <div class="faq-item">
                    <h4>5. Metode pembayaran apa yang tersedia?</h4>
                    <p>Kami menerima transfer bank (BCA, Mandiri, BNI, BRI), e-wallet (GoPay, OVO, Dana), dan QRIS.</p>
                </div>
            `;
            break;
        case 'terms':
            content = `
                <h2>Syarat & Ketentuan</h2>
                <p><strong>1. Layanan</strong><br>
                JokiPro menyediakan layanan bantuan pengerjaan tugas akademik. Kami bertindak sebagai asisten dan tutor, bukan pengganti Anda dalam proses pembelajaran.</p>
                <p><strong>2. Pembayaran</strong><br>
                Pembayaran dilakukan dengan sistem DP 50% di awal dan pelunasan setelah tugas selesai. Harga yang disepakati bersifat final kecuali ada perubahan requirement.</p>
                <p><strong>3. Revisi</strong><br>
                Kami menyediakan revisi gratis maksimal 3x untuk penyesuaian minor. Revisi major atau perubahan requirement akan dikenakan biaya tambahan.</p>
                <p><strong>4. Deadline</strong><br>
                Kami berkomitmen menyelesaikan tugas sesuai deadline yang disepakati. Keterlambatan dari pihak kami akan mendapat kompensasi.</p>
                <p><strong>5. Pembatalan</strong><br>
                Pembatalan sebelum pengerjaan dimulai akan mendapat refund 100%. Pembatalan setelah pengerjaan dimulai akan dikenakan biaya sesuai progress.</p>
            `;
            break;
        case 'privacy':
            content = `
                <h2>Kebijakan Privasi</h2>
                <p><strong>1. Pengumpulan Data</strong><br>
                Kami mengumpulkan data yang Anda berikan saat memesan layanan, termasuk nama, kontak, dan detail tugas.</p>
                <p><strong>2. Penggunaan Data</strong><br>
                Data Anda hanya digunakan untuk keperluan pengerjaan tugas dan komunikasi terkait layanan kami.</p>
                <p><strong>3. Keamanan Data</strong><br>
                Kami menerapkan langkah-langkah keamanan yang ketat untuk melindungi data Anda dari akses tidak sah.</p>
                <p><strong>4. Berbagi Data</strong><br>
                Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga tanpa izin Anda.</p>
                <p><strong>5. Hak Anda</strong><br>
                Anda berhak meminta akses, koreksi, atau penghapusan data pribadi Anda kapan saja dengan menghubungi tim kami.</p>
            `;
            break;
        default:
            content = '<p>Konten tidak ditemukan.</p>';
    }
    
    modalBody.innerHTML = content;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/* ============================================
   Smooth Scroll for Anchor Links
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

/* ============================================
   Form Validation (for contact page)
   ============================================ */
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
            showFieldError(field, 'Field ini wajib diisi');
        } else {
            field.classList.remove('error');
            hideFieldError(field);
        }
        
        // Email validation
        if (field.type === 'email' && field.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                isValid = false;
                field.classList.add('error');
                showFieldError(field, 'Format email tidak valid');
            }
        }
        
        // Phone validation
        if (field.type === 'tel' && field.value) {
            const phoneRegex = /^[0-9+\-\s()]{10,15}$/;
            if (!phoneRegex.test(field.value)) {
                isValid = false;
                field.classList.add('error');
                showFieldError(field, 'Format nomor telepon tidak valid');
            }
        }
    });
    
    return isValid;
}

function showFieldError(field, message) {
    let errorEl = field.nextElementSibling;
    if (!errorEl || !errorEl.classList.contains('field-error')) {
        errorEl = document.createElement('span');
        errorEl.className = 'field-error';
        field.parentNode.insertBefore(errorEl, field.nextSibling);
    }
    errorEl.textContent = message;
}

function hideFieldError(field) {
    const errorEl = field.nextElementSibling;
    if (errorEl && errorEl.classList.contains('field-error')) {
        errorEl.remove();
    }
}

function initAdminLogout() {
    if (sessionStorage.getItem('jokipro_admin_auth') === 'true') {
        document.querySelectorAll('a[href="login.html"]').forEach(link => {
            if (link.textContent.includes('Login Admin')) {
                link.textContent = '🚪 Logout (Admin)';
                link.href = '#';
                link.onclick = function(e) {
                    e.preventDefault();
                    if (confirm('Yakin ingin logout?')) {
                        sessionStorage.removeItem('jokipro_admin_auth');
                        sessionStorage.removeItem('jokipro_admin_user');
                        sessionStorage.removeItem('jokipro_admin_login_time');
                        window.location.href = 'index.html';
                    }
                };
            }
        });
    }
    if (sessionStorage.getItem('jokipro_customer_auth') === 'true') {
        document.querySelectorAll('a[href="customer-login.html"]').forEach(link => {
            if (link.textContent.includes('Customer')) {
                link.textContent = '🚪 Logout (Customer)';
                link.href = '#';
                link.onclick = function(e) {
                    e.preventDefault();
                    if (confirm('Yakin ingin logout?')) {
                        sessionStorage.removeItem('jokipro_customer_auth');
                        sessionStorage.removeItem('jokipro_customer_user');
                        sessionStorage.removeItem('jokipro_customer_name');
                        sessionStorage.removeItem('jokipro_customer_email');
                        sessionStorage.removeItem('jokipro_customer_login_time');
                        window.location.href = 'index.html';
                    }
                };
            }
        });
    }
}
