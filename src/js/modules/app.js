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

      const iframe = modalVideo.querySelector("iframe");
      if (iframe) {
        iframe.src = iframe.src;
      }
    }
  });

  btnClose.addEventListener("click", (e) => {
    if (e.currentTarget) {
      modalVideo.classList.remove("active");
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      const iframe = modalVideo.querySelector("iframe");
      if (iframe) {
        iframe.src = iframe.src;
      }
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

// burger menu
document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__menu");
  const body = document.body;

  // Создаем overlay для затемнения фона
  // const overlay = document.createElement("div");
  // overlay.className = "overlay";
  // document.body.appendChild(overlay);

  // Функция открытия/закрытия меню
  function toggleMenu() {
    burgerBtn.classList.toggle("active");
    menu.classList.toggle("active");
    // overlay.classList.toggle("active");
    body.classList.toggle("no-scroll");
  }

  // Обработчик клика по бургер-кнопке
  burgerBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  // Закрытие меню при клике на overlay
  // overlay.addEventListener("click", function () {
  //   if (menu.classList.contains("active")) {
  //     toggleMenu();
  //   }
  // });

  // Закрытие меню при клике на ссылку
  // const menuLinks = document.querySelectorAll(".menu-link");
  // menuLinks.forEach((link) => {
  //   link.addEventListener("click", function () {
  //     if (window.innerWidth < 769) {
  //       toggleMenu();
  //     }
  //   });
  // });

  // Закрытие меню при клике вне меню
  // document.addEventListener("click", function (e) {
  //   if (
  //     menu.classList.contains("active") &&
  //     !menu.contains(e.target) &&
  //     !burgerBtn.contains(e.target)
  //   ) {
  //     toggleMenu();
  //   }
  // });

  // Закрытие меню при нажатии Escape
  // document.addEventListener("keydown", function (e) {
  //   if (e.key === "Escape" && menu.classList.contains("active")) {
  //     toggleMenu();
  //   }
  // });

  // Адаптация при изменении размера окна
  // window.addEventListener("resize", function () {
  //   if (window.innerWidth >= 769) {
  //     burgerBtn.classList.remove("active");
  //     menu.classList.remove("active");
  //     overlay.classList.remove("active");
  //     body.classList.remove("no-scroll");
  //   }
  // });
});

// active btn for sidebar legal practik
const silebarLP = document.querySelector(".sidebar-legal-practice");

if (silebarLP) {
  const btnSidebarLP = silebarLP.querySelector(".sidebar-legal-practice__btn");
  const sidebarLPElements = silebarLP.querySelectorAll(
    ".sidebar-legal-practice__list li"
  );

  btnSidebarLP.addEventListener("click", (e) => {
    silebarLP.classList.toggle("active");
  });

  sidebarLPElements.forEach((el) => {
    el.addEventListener("click", () => {
      silebarLP.classList.remove("active");
    });
  });
}
