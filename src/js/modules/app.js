// active btn show more for legal practice posts

if (document.querySelectorAll(".legal-practice-post")) {
  const posts = document.querySelectorAll(".legal-practice-post");

  posts.forEach((post) => {
    const btn = post.querySelector(".legal-practice-post__btn-read-more");
    const full = post.querySelector(".legal-practice-post__text--full");

    btn.addEventListener("click", (e) => {
      full.classList.toggle("active");
      btn.classList.toggle("active");
    });
  });
}
// active btn show more for landmarks posts

if (document.querySelectorAll(".landmarks-post")) {
  const posts = document.querySelectorAll(".landmarks-post");

  posts.forEach((post) => {
    const btn = post.querySelector(".landmarks-post__btn-read-more");
    const full = post.querySelector(".landmarks-post__text--full");

    btn.addEventListener("click", (e) => {
      full.classList.toggle("active");
      btn.classList.toggle("active");
    });
  });
}

// active btn show more for judgments posts

if (document.querySelectorAll(".judgments-post")) {
  const posts = document.querySelectorAll(".judgments-post");

  posts.forEach((post) => {
    const btn = post.querySelector(".judgments-post__btn-read-more");
    const full = post.querySelector(".judgments-post__text--full");

    btn.addEventListener("click", (e) => {
      full.classList.toggle("active");
      btn.classList.toggle("active");
    });
  });
}

// active btn show more for articles posts

if (document.querySelectorAll(".articles-post")) {
  const posts = document.querySelectorAll(".articles-post");

  posts.forEach((post) => {
    const btn = post.querySelector(".articles-post__btn-read-more");
    const full = post.querySelector(".articles-post__text--full");

    btn.addEventListener("click", (e) => {
      full.classList.toggle("active");
      btn.classList.toggle("active");
    });
  });
}

// active tags
if (document.querySelectorAll(".tags")) {
  const tags = document.querySelectorAll(".tags__tag");

  tags.forEach((tag) => {
    tag.addEventListener("click", (e) => {
      tag.classList.toggle("active");
    });
  });
}
