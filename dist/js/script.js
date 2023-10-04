const dropDown = document.querySelectorAll(".faq__questions__item h4");
dropDown.forEach((drop) => {
  drop.addEventListener("click", () => {
    drop.nextElementSibling.classList.toggle("open");
    drop.classList.toggle("open");
    drop.querySelector("i").classList.toggle("open");
  });
});

const faqNav = document.querySelectorAll(".faq__nav__link");
const faqContent = document.querySelectorAll(".faq__questions");
faqNav.forEach((faq) => {
  faq.addEventListener("click", () => {
    removeActiveFaq();
    faq.style = "transition:.5s ease";
    faq.classList.add("active");
    faq.style = "transition:.5s ease";
    const activeContent = document.querySelector(`#${faq.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveFaq() {
  faqNav.forEach((faq) => {
    faq.classList.remove("active");
  });
}

function removeActiveContent() {
  faqContent.forEach((faq) => {
    faq.classList.remove("active");
  });
}
