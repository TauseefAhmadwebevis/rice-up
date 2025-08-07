document.addEventListener("DOMContentLoaded", function () {
  const collapsibles = document.querySelectorAll("[data-collapisble-componenet]");

  if (!collapsibles.length) return;

  collapsibles.forEach((component, index) => {
    const title = component.querySelector("[data-collapisble-componenet-title]");
    const content = component.querySelector("[data-collapisble-componenet-desc]");

    if (title && content) {
      content.style.overflow = "hidden";
      content.style.transition = "max-height 0.4s ease";
      content.style.maxHeight = "0px";

      // ✅ OPEN FIRST BY DEFAULT (or any index)
      if (index === 0) {
        component.classList.add("faq__grid-block--active");
        requestAnimationFrame(() => {
          content.style.maxHeight = content.scrollHeight + "px";
        });
      }

      title.addEventListener("click", function () {
        const isOpen = component.classList.contains("faq__grid-block--active");

        collapsibles.forEach(item => {
          const otherContent = item.querySelector("[data-collapisble-componenet-desc]");
          item.classList.remove("faq__grid-block--active");
          if (otherContent) {
            otherContent.style.maxHeight = "0px";
          }
        });

        if (!isOpen) {
          component.classList.add("faq__grid-block--active");
          requestAnimationFrame(() => {
            content.style.maxHeight = content.scrollHeight + "px";
          });
        }
      });
    }
  });
});
