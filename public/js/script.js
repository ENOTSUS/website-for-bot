let isAnimating = false;

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link:not(.invait-button)');
  const navIndicator = document.querySelector('.nav-indicator');
  
  let isAnimating = false;

  // Функция для обновления позиции индикатора
  function updateIndicator(target) {
    if (!target || !navIndicator) return;
    
    const rect = target.getBoundingClientRect();
    const containerRect = target.closest('.nav-content').getBoundingClientRect();
    
    navIndicator.style.width = `${rect.width}px`;
    navIndicator.style.left = `${rect.left - containerRect.left}px`;
  }

  // Инициализация индикатора
  const activeLink = document.querySelector('.nav-link.active');
  if (activeLink) {
    updateIndicator(activeLink);
  }

    // Обработчики для навигационных ссылок
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.classList.contains('invait-button')) return;
            
            e.preventDefault();
            if (isAnimating) return;
            
            const targetId = this.getAttribute('href').substring(1);
            const activeLink = document.querySelector('.nav-link.active');
            const activeSection = document.querySelector('.section.active');
            const targetSection = document.getElementById(targetId);
            
            if (targetSection === activeSection) return;
            
            isAnimating = true;
            
            // Обновляем индикатор
            if (navIndicator) {
                updateIndicator(this);
            }
            
            // Убираем активный класс со старой ссылки
            activeLink.classList.remove('active');
            
            // Добавляем активный класс к новой ссылке
            this.classList.add('active');
            
            // Переключаем секции
            activeSection.classList.remove('active');
            targetSection.classList.add('active');
            
            // Прокручиваем к началу страницы
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            isAnimating = false;
        });
        
    });

// Обновление класса для навбара при наличии активной ссылки
function updateNavContentClass() {
  const navContent = document.querySelector('.nav-content');
  const activeLink = document.querySelector('.nav-link.active');
  
  if (activeLink) {
    navContent.classList.add('has-active');
  } else {
    navContent.classList.remove('has-active');
  }
}

// Вызываем при загрузке и при изменении активной ссылки
document.addEventListener('DOMContentLoaded', function() {
  updateNavContentClass();
  
  // Обновляем при клике на ссылки
  const navLinks = document.querySelectorAll('.nav-link:not(.invait-button)');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      setTimeout(updateNavContentClass, 50);
    });
  });
});
  
  // Обновление индикатора при изменении размера окна
  window.addEventListener('resize', function() {
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink) {
      updateIndicator(activeLink);
    }
  });
    
    // Обработчик для изменения хэша URL
    window.addEventListener('hashchange', function() {
        const targetId = window.location.hash.substring(1) || 'home';
        const targetLink = document.querySelector(`.nav-link[href="#${targetId}"]`);
        const activeLink = document.querySelector('.nav-link.active');
        const targetSection = document.getElementById(targetId);
        const activeSection = document.querySelector('.section.active');
        
        if (targetSection && targetSection !== activeSection && targetLink !== activeLink) {
            isAnimating = true;
            
            // Обновляем индикатор
            if (navIndicator) {
                updateIndicator(targetLink);
            }
            
            // Убираем активный класс со старой ссылки
            activeLink.classList.remove('active');
            
            // Добавляем активный класс к новой ссылке
            targetLink.classList.add('active');
            
            // Переключаем секции
            activeSection.classList.remove('active');
            targetSection.classList.add('active');
            
            isAnimating = false;
        }
    });

    // Обновление индикатора при изменении размера окна
    window.addEventListener('resize', function() {
        const activeLink = document.querySelector('.nav-link.active');
        if (activeLink && navIndicator) {
            updateIndicator(activeLink);
        }
    });
});

// Сохраняем оригинальные функции для модального окна
function showFullPolicy(e) {
    e.preventDefault();
    const modal = document.getElementById('fullPolicyModal');
    const scrollY = window.scrollY;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.classList.add('modal-open');
    document.getElementById('fullPolicyModal').style.display = 'block';
    return false;
}

function closeModal() {
    const modal = document.getElementById('fullPolicyModal');
    const scrollY = Math.abs(parseInt(document.body.style.top, 10));
    modal.classList.add('closing');
    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('closing');
        document.body.classList.remove('modal-open');
        document.body.style.top = '';
        window.scrollTo(0, scrollY);
        document.getElementById('fullPolicyModal').style.display = 'none';
        document.body.style.overflow = 'auto';
        document.body.style.position = 'static';
    }, 30);
}

window.onclick = function(event) {
    const modal = document.getElementById('fullPolicyModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Обработчик для кнопки "Добавить бота"
document.querySelector('.invait-button').addEventListener('click', function(e) {
    // Стандартное поведение для внешней ссылки
});

 