document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(".tab--active")?.classList.remove("tab--active");
    this.classList.add("tab--active");

    document
      .querySelector(".tabs-content--active")
      ?.classList.remove("tabs-content--active");
    const targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId)?.classList.add("tabs-content--active");
  });
});
