(function() {
  // --- Инициализация ---
  const galleryImages = document.querySelectorAll('.gallery__image');
  if (!galleryImages.length) return;

  const modal = document.getElementById('myModal');
  if (!modal) return;

  const slides = modal.querySelectorAll('.mySlides');
  if (!slides.length) return;

  // Элементы управления
  const closeBtn = modal.querySelector('.close');
  const prevBtn = modal.querySelector('.prev');
  const nextBtn = modal.querySelector('.next');

  // Удаляем все onclick-атрибуты, чтобы не мешали
  document.querySelectorAll('.gallery__image, .close, .prev, .next').forEach(el => el.removeAttribute('onclick'));

  // --- Состояние ---
  let currentIndex = 1;          // 1-based
  let isOpen = false;
  let isTransitioning = false;

  // --- Вспомогательные функции ---
  function showSlide(index) {
    if (index < 1) index = slides.length;
    if (index > slides.length) index = 1;
    currentIndex = index;

    slides.forEach((slide, i) => {
      slide.style.display = (i + 1 === index) ? 'block' : 'none';
      // Обновляем номер слайда, если есть
      const num = slide.querySelector('.numbertext');
      if (num) num.textContent = `${i + 1} / ${slides.length}`;
    });
  }

  function openModal(initialIndex) {
    if (initialIndex === undefined) initialIndex = 0;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    isOpen = true;
    showSlide(initialIndex + 1);
  }

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
    isOpen = false;
  }

  function plusSlides(n) {
    if (isTransitioning) return;
    isTransitioning = true;
    showSlide(currentIndex + n);
    setTimeout(() => { isTransitioning = false; }, 300);
  }

  // --- Обработчики событий ---

  // Клик по миниатюрам
  galleryImages.forEach((img, idx) => {
    img.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(idx);
    });
  });

  // Кнопки управления
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (prevBtn) prevBtn.addEventListener('click', (e) => { e.preventDefault(); plusSlides(-1); });
  if (nextBtn) nextBtn.addEventListener('click', (e) => { e.preventDefault(); plusSlides(1); });

  // Закрытие по клику на фон (сам modal)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Клавиатура
  document.addEventListener('keydown', (e) => {
    if (!isOpen) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') plusSlides(-1);
    if (e.key === 'ArrowRight') plusSlides(1);
  });

  // Свайп (touch)
  let touchStartX = 0;
  modal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  modal.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
      plusSlides(diff > 0 ? 1 : -1);
    }
  }, { passive: true });

  // --- Начальное состояние ---
  modal.style.display = 'none';
  slides.forEach(s => s.style.display = 'none');
})();