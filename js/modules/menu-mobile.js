export default function menu(){
  const btn = document.querySelector(".hamburguer-menu");
  const menu = document.querySelector(".header-menu-mobile");

  function openMenu(){
    return menu.classList.toggle("ativarMenu");
  };
  btn.addEventListener("click", openMenu)
}