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
