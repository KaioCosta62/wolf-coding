export default function menuSuave(){

  const links = document.querySelectorAll(".header-menu a");

  const menuInterno = (event) => {
    event.preventDefault();
    const hashLink = event.target.getAttribute("href");
    const el = document.querySelector(hashLink);
    const distanciaElTop = el.offsetTop;

    window.scrollTo({
      top: distanciaElTop,
      behavior: 'smooth'
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", menuInterno);
  })
};