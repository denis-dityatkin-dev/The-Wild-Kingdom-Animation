"use strict"
// Инициализация Swiper
let myImageSlider = new
	Swiper(".hero__slider", {
		// Стрелки
		navigation: {
			nextEl: ".hero__arrow--right",
			prevEl: ".hero__arrow--left",
		},
		// Включение/отключение перетаскивания на пк
		simulateTouch: true,
		// Чувствительность свайпа
		touchRatio: 1,
		// Угол срабатывния свайпа/перетаскивания
		touchAngle: 45,
		// Курсор перетаскивания
		grabCursor: true,
		// Переключение при клике на слайд
		slideToClickedSlide: true,
		// Навигация по хешу
		// hashNavigation: {
		// 	// Отслеживать состояние
		// 	watchState: true,
		// },

		// Управление клавиатурой
		keyboard: {
			// включить/выключить
			enabled: true,
			// включить/выключить только,когда слайдер в пределах вьюпорта
			onlyInViewport: true,
			// включить/выключить управление клавишами pageUp, pageDown
			pageUpDown: true,
		},
		parallax: true,
		// Количество слайдов для показа
		slidesPerView: "auto",

		// Отключение функционала, если слайдов меньше, чем нужно
		watchOverflow: true,

		// Отступ между слайдами
		spaceBetween: 30,

		// Количество пролистываемых слайдов
		slidesPerGroup: 1,

		// Активный слайд по центру
		// centeredSlides: true,

		// Стартовый слайд
		initialSlide: 0,

		// Мультирядность
		// slidesPerColumn: 1,

		// Бесконечный слайдер
		loop: true,

		// Автовысота
		autoHeight: true,
		// centeredSlides: true,
		// Навигация
		// Буллеты,текущее положение. прогрессбар
		// pagination: {
		//   el: ".reviews__bullets",

		  // Буллеты
		  // clickable: true,
		//   // Динамические буллеты
		//   dynamicBullets: true,
		//   // Кастомные буллеты
		//   renderBullet: function (index, className) {
		//     return '<span class="' + className + '">' + (index + 1) + '</span>';
		  // },

		// Количество дублирующих слайдов
		// loopedSlides: 0,
		// Скорость
		speed: 800,
		// Брейк поинты (Адаптивность) ширины экрана
		breakpoints: {
			320: {
				centeredSlides: true,
				spaceBetween: 15,
			},
		// 	480: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 20,
		// 	},
			768: {
				spaceBetween: 30,
				centeredSlides: true,
			},
			// 991: {
		// 		slidesPerView: 3,
		// 		spaceBetween: 40,
					
			// },
			1200:{
				centeredSlides: false,
				spaceBetween: 30,
			},
		},
		


		// Фракция
		// type: "fraction",
		// // Кастомный вывод фракций
		// renderFraction: function (currentClass, totalClass) {
		//   return (
		//     'Фото <span class="' +
		//     currentClass +
		//     '"></span>' +
		//     " из " +
		//     '<span class="' +
		//     totalClass +
		//     '"</span>'
		//   );
		// },
		// // Прогрессбар
		// type: 'progressbar',
		// },

		// Скролл
		// scrollbar: {
		//   el: ".swiper-scrollbar",
		//   // Возможность перетаскивать скролл
		//   draggable: true,
		// },



		// Управление колесом мыши
		// mousewheel: {
		//   // Чувствительность колеса мыши
		//   sensitivity: 1,
		//   // Класс объекта, на котором будет срабатывать прокрутка мышью.
		//   eventsTarget: ".swiper-container",
		// },


		// Свободный режим
		// freeMode: true,

		// Автопрокрутка
		// autoplay: {
		//   // Пауза между прокруткой
		//   delay: 1000,
		//   // Закончить на последнем слайде
		//   stopOnLastSlide: false,
		//   // Отключить после ручного переключения
		//   disableOnInteraction: false,
		// },

		// Эффекты переключения слайдов
		// Листание
		effect: "slide",


		// Обновить свайпер при изменении элементов слайдера
		observer: true,

		// Обновить свайпер при изменении родительских элементов слайдера
		observeParents: true,

		// // Обновить свайпер при изменении дочерних элементов слайдера
		// observeSlideChildren: true,
		// События (накладка дубля изображения сверху на слайд)
		on:{
			init: function (slider){
				slider.slides.forEach(slide => {
					const imageSrc = slide.querySelector('.slide-hero__image').getAttribute('src');
					const topImage = 
					`
						<div class="slide-hero__top-image">
							<img src="${imageSrc}" alt="slide-hero__image">
						</div>
					`;
					const slideContent = slide.querySelector('.slide-hero__content');
					slideContent.insertAdjacentHTML('beforeend', topImage);
				});
			}
		}
	});

	// myImageSlider.controller.control = myImageSlider2;
	// myImageSlider2.controller.control = myImageSlider;

	let myImageSlider2 = new
	Swiper(".reviews__slider", {
		// Стрелки
		navigation: {
			nextEl: ".reviews__arrow--next",
			prevEl: ".reviews__arrow--prev",
		},
		// Включение/отключение перетаскивания на пк
		simulateTouch: true,
		// Чувствительность свайпа
		touchRatio: 1,
		// Угол срабатывния свайпа/перетаскивания
		touchAngle: 45,
		// Курсор перетаскивания
		grabCursor: true,
		// Переключение при клике на слайд
		slideToClickedSlide: true,
		// Навигация по хешу
		// hashNavigation: {
		// 	// Отслеживать состояние
		// 	watchState: true,
		// },

		// Управление клавиатурой
		keyboard: {
			// включить/выключить
			enabled: true,
			// включить/выключить только,когда слайдер в пределах вьюпорта
			onlyInViewport: true,
			// включить/выключить управление клавишами pageUp, pageDown
			pageUpDown: true,
		},
		// parallax: true,
		// Количество слайдов для показа
		slidesPerView: 1,

		// Отключение функционала, если слайдов меньше, чем нужно
		watchOverflow: true,

		// Отступ между слайдами
		spaceBetween: 30,

		// Количество пролистываемых слайдов
		slidesPerGroup: 1,

		// Активный слайд по центру
		// centeredSlides: true,

		// Стартовый слайд
		initialSlide: 0,

		// Мультирядность
		// slidesPerColumn: 1,

		// Бесконечный слайдер
		loop: true,

		// Автовысота
		autoHeight: true,
		// centeredSlides: true,
		// Навигация
		// Буллеты,текущее положение. прогрессбар
		// pagination: {
		//   el: ".reviews__bullets",

		  // Буллеты
		  // clickable: true,
		//   // Динамические буллеты
		//   dynamicBullets: true,
		//   // Кастомные буллеты
		//   renderBullet: function (index, className) {
		//     return '<span class="' + className + '">' + (index + 1) + '</span>';
		  // },

		// Количество дублирующих слайдов
		// loopedSlides: 0,
		// Скорость
		speed: 800,
		// Брейк поинты (Адаптивность) ширины экрана
		// breakpoints: {
		// 	320: {
		// 		centeredSlides: true,
		// 		spaceBetween: 15,
		// 	},
		// // 	480: {
		// // 		slidesPerView: 2,
		// // 		spaceBetween: 20,
		// // 	},
		// 	768: {
		// 		spaceBetween: 30,
		// 		centeredSlides: true,
		// 	},
		// 	// 991: {
		// // 		slidesPerView: 3,
		// // 		spaceBetween: 40,
					
		// 	// },
		// 	1200:{
		// 		centeredSlides: false,
		// 		spaceBetween: 30,
		// 	},
		// },
		


		// Фракция
		// type: "fraction",
		// // Кастомный вывод фракций
		// renderFraction: function (currentClass, totalClass) {
		//   return (
		//     'Фото <span class="' +
		//     currentClass +
		//     '"></span>' +
		//     " из " +
		//     '<span class="' +
		//     totalClass +
		//     '"</span>'
		//   );
		// },
		// // Прогрессбар
		// type: 'progressbar',
		// },

		// Скролл
		// scrollbar: {
		//   el: ".swiper-scrollbar",
		//   // Возможность перетаскивать скролл
		//   draggable: true,
		// },



		// Управление колесом мыши
		// mousewheel: {
		//   // Чувствительность колеса мыши
		//   sensitivity: 1,
		//   // Класс объекта, на котором будет срабатывать прокрутка мышью.
		//   eventsTarget: ".swiper-container",
		// },


		// Свободный режим
		// freeMode: true,

		// Автопрокрутка
		// autoplay: {
		//   // Пауза между прокруткой
		//   delay: 1000,
		//   // Закончить на последнем слайде
		//   stopOnLastSlide: false,
		//   // Отключить после ручного переключения
		//   disableOnInteraction: false,
		// },

		// Эффекты переключения слайдов
		// Листание
		effect: "slide",


		// Обновить свайпер при изменении элементов слайдера
		observer: true,

		// Обновить свайпер при изменении родительских элементов слайдера
		observeParents: true,

		// // Обновить свайпер при изменении дочерних элементов слайдера
		// observeSlideChildren: true,
		// События (накладка дубля изображения сверху на слайд)
		// on:{
		// 	init: function (slider){
		// 		slider.slides.forEach(slide => {
		// 			const imageSrc = slide.querySelector('.slide-hero__image').getAttribute('src');
		// 			const topImage = 
		// 			`
		// 				<div class="slide-hero__top-image">
		// 					<img src="${imageSrc}" alt="slide-hero__image">
		// 				</div>
		// 			`;
		// 			const slideContent = slide.querySelector('.slide-hero__content');
		// 			slideContent.insertAdjacentHTML('beforeend', topImage);
		// 		});
		// 	}
		// }
	});
