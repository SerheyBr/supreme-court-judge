// function show / don't show fulltext
function toggleShowFullTextForPost(classNamePosts) {
  const posts = document.querySelectorAll(classNamePosts);

  if (posts.length === 0) {
    return;
  }

  posts.forEach((post) => {
    const btn = post.querySelector(".button-show-more");
    const fullText = post.querySelector(".show-full-text");

    if (btn && fullText) {
      btn.addEventListener("click", (e) => {
        // fullText.classList.toggle("active");
        const isActive = fullText.classList.toggle("active");
        btn.classList.toggle("active");
        // Если текст скрывается, скроллим к началу блока
        if (!isActive) {
          post.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }
  });
}

toggleShowFullTextForPost(".legal-practice-post");
toggleShowFullTextForPost(".landmarks-post");
toggleShowFullTextForPost(".articles-post");
toggleShowFullTextForPost(".book__item");

// active tags
if (document.querySelectorAll(".tags")) {
  const tags = document.querySelectorAll(".tags__tag");

  tags.forEach((tag) => {
    tag.addEventListener("click", (e) => {
      tag.classList.toggle("active");
    });
  });
}

// video action for page lectures

// извлекаем id из сыллки на YouTube
function extractYouTubeId(url) {
  // Разные форматы YouTube ссылок:
  // https://www.youtube.com/watch?v=VIDEO_ID
  // https://youtu.be/VIDEO_ID
  // https://www.youtube.com/embed/VIDEO_ID

  let videoId = null;

  // Для формата youtube.com/watch?v=...
  if (url.includes("youtube.com/watch?")) {
    const urlObj = new URL(url);
    videoId = urlObj.searchParams.get("v");
  }
  // Для формата youtu.be/...
  else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1];
    // Убираем возможные параметры после ID
    if (videoId.includes("?")) {
      videoId = videoId.split("?")[0];
    }
  }
  // Для формата youtube.com/embed/...
  else if (url.includes("youtube.com/embed/")) {
    videoId = url.split("youtube.com/embed/")[1];
    if (videoId.includes("?")) {
      videoId = videoId.split("?")[0];
    }
  }

  return videoId;
}

// закрытие открытие модалки и добовление видео

if (document.querySelectorAll(".lectures-post")) {
  const posts = document.querySelectorAll(".lectures-post");
  const modalVideo = document.querySelector(".video-modal");

  posts.forEach((post) => {
    const fullUrlVideo = post.dataset.video;
    const videoId = extractYouTubeId(fullUrlVideo);
    const iframeVideo = post.querySelector("iframe");
    const btnOpenModalVideo = post.querySelector(".open-modal-video");
    if (videoId) {
      iframeVideo.src = `https://www.youtube.com/embed/${videoId}`;
    }
    btnOpenModalVideo.addEventListener("click", (e) => {
      if (e.currentTarget) {
        modalVideo.classList.add("active");
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
      }
    });
  });
}

if (document.querySelector(".video-modal")) {
  const modalVideo = document.querySelector(".video-modal");
  const btnClose = modalVideo.querySelector(".video-modal__btn-close");
  modalVideo.addEventListener("click", (e) => {
    if (e.target.className === "video-modal active") {
      modalVideo.classList.remove("active");
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  });

  btnClose.addEventListener("click", (e) => {
    if (e.currentTarget) {
      modalVideo.classList.remove("active");
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  });
}

//action tags for judgments page
// function setupTagButtons() {
//   const tagButtons = document.querySelectorAll(".tags__tag");

//   tagButtons.forEach((button) => {
//     button.addEventListener("click", function () {
//       tagButtons.forEach((btn) => btn.classList.remove("active"));
//       this.classList.add("active");
//     });
//   });
// }

// document.addEventListener("DOMContentLoaded", setupTagButtons);

document.addEventListener("DOMContentLoaded", function () {
  // Инициализация GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Получаем все посты и пункты меню
  const posts = document.querySelectorAll(".legal-practice-post");
  const menuItems = document.querySelectorAll(
    ".sidebar-legal-practice__list li"
  );

  // Функция для обновления активного пункта меню
  function updateActiveMenuItem(postId) {
    // Убираем класс активности у всех пунктов меню
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });

    // Находим пункт меню с ссылкой на этот пост
    const activeMenuItem = document
      .querySelector(`.sidebar-legal-practice__list li a[href="#${postId}"]`)
      ?.closest("li");

    // Добавляем класс активности
    if (activeMenuItem) {
      activeMenuItem.classList.add("active");
    }
  }

  posts.forEach((post) => {
    const postId = post.id;

    ScrollTrigger.create({
      trigger: post,
      //   start: "top center", // когда верх поста в центре экрана
      //   end: "bottom center", // когда низ поста в центре экрана
      start: "center center", // когда верх поста в центре экрана
      end: "bottom center", // когда низ поста в центре экрана
      markers: false,
      onEnter: () => updateActiveMenuItem(postId),
      onEnterBack: () => updateActiveMenuItem(postId),
    });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   new SlimSelect({
//     select: ".my-form .wpcf7-select",
//     settings: {
//       showSearch: false,
//       placeholderText: "Выберите услугу",
//     },
//   });
// });

// const swiper = new Swiper(".my-slider", {
//   direction: "horizontal",
//   loop: true,
//   slidesPerView: 3,
//   spaceBetween: 20,
//   pagination: {
//     el: ".my-slider__pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".my-slider__button-next",
//     prevEl: ".my-slider__button-prev",
//   },
// });

// 11111111111111111111111111111111111111111111111111111111111111111111111111
/**
 * Инициализация Swiper слайдера
 *
 * Базовые настройки:
 */
// const swiper = new Swiper(".swiper", {
//   // Основные параметры
//   direction: "horizontal", // Ориентация слайдера ('horizontal' или 'vertical')
//   loop: true, // Бесконечная прокрутка
//   slidesPerView: "auto", // Количество видимых слайдов ('auto' или число)
//   spaceBetween: 20, // Отступ между слайдами (в px)
//   centeredSlides: true, // Центрирование активного слайда
//   speed: 500, // Скорость анимации перехода (мс)

//   // Настройки пагинации (точки)
//   pagination: {
//     el: ".swiper-pagination", // Селектор контейнера для пагинации
//     clickable: true, // Кликабельность точек
//     dynamicBullets: false, // Динамические точки (меняют размер)
//     type: "bullets", // Тип пагинации ('bullets', 'fraction', 'progressbar')
//   },

//   // Настройки навигации (стрелки)
//   navigation: {
//     nextEl: ".swiper-button-next", // Селектор кнопки "Вперед"
//     prevEl: ".swiper-button-prev", // Селектор кнопки "Назад"
//     disabledClass: "swiper-button-disabled", // Класс для неактивных кнопок
//   },

//   // Адаптивность
//   breakpoints: {
//     // Настройки для экранов >= 320px
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 10,
//     },
//     // Настройки для экранов >= 768px
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     // Настройки для экранов >= 1024px
//     1024: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     },
//   },

// Дополнительные эффекты
//   effect: "slide", // 'slide', 'fade', 'cube', 'coverflow', 'flip'
//   autoplay: {
//     // Автопрокрутка
//     delay: 3000, // Интервал между слайдами (мс)
//     disableOnInteraction: false, // Продолжать после взаимодействия
//   },
// });

/**
 * ИНСТРУКЦИЯ ПО ИСПОЛЬЗОВАНИЮ:
 *
 * 1. HTML-структура:
 *    <div class="swiper">
 *      <div class="swiper-wrapper">
 *        <div class="swiper-slide">Слайд 1</div>
 *        <div class="swiper-slide">Слайд 2</div>
 *      </div>
 *      <!-- Пагинация -->
 *      <div class="swiper-pagination"></div>
 *      <!-- Навигация -->
 *      <div class="swiper-button-prev"></div>
 *      <div class="swiper-button-next"></div>
 *    </div>
 *
 * 2. CSS-рекомендации:
 *    - Для .swiper задать фиксированную высоту
 *    - Для .swiper-slide указать width (фиксированный или процентный)
 *    - Для стрелок/пагинации использовать position: absolute
 *
 * 3. Частые проблемы:
 *    - Обрезание стрелок: добавить padding к .swiper
 *    - Конфликты стилей: повысить специфичность селекторов
 *    - Не работает loop: проверить количество слайдов (нужно минимум 2 дубликата)
 *
 * 4. Документация:
 *    https://swiperjs.com/swiper-api
 */
