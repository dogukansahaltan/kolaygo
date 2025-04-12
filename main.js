// Mobil Menü İşlemleri
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const closeMobileMenu = document.getElementById('closeMobileMenu');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('open');
});

closeMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
});

// Scroll to Top İşlemleri
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
    
    // Navbar scrolled effect
    const topBar = document.querySelector('.top-bar');
    if(window.pageYOffset > 100) {
        topBar.classList.add('scrolled');
    } else {
        topBar.classList.remove('scrolled');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form İşlemleri
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
            if (value.length <= 3) {
                value = '(' + value;
            } else if (value.length <= 6) {
                value = '(' + value.slice(0, 3) + ') ' + value.slice(3);
            } else {
                value = '(' + value.slice(0, 3) + ') ' + value.slice(3, 6) + ' ' + value.slice(6, 10);
            }
        }
        e.target.value = value;
    });
}

// Dil Seçici İşlemleri
const languageSelector = document.querySelector('.language-selector');
if (languageSelector) {
    languageSelector.addEventListener('click', () => {
        const options = languageSelector.querySelector('.language-options');
        options.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!languageSelector.contains(e.target)) {
            const options = languageSelector.querySelector('.language-options');
            options.classList.add('hidden');
        }
    });
}

// SSS Akordiyon İşlemleri
document.querySelectorAll('.faq-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector('svg');
        
        // Diğer tüm içerikleri kapat
        document.querySelectorAll('.faq-content').forEach(item => {
            if (item !== content) {
                item.classList.add('hidden');
            }
        });
        
        // Tıklanan içeriği aç/kapat
        content.classList.toggle('hidden');
        
        // İkonu döndür
        icon.classList.toggle('rotate-180');
    });
}); 