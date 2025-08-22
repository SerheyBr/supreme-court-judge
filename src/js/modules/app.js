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
        fullText.classList.toggle("active");
        btn.classList.toggle("active");
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
