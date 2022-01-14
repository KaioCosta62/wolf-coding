export default function moverCima(){
  const seta = document.querySelector(".mover-cima");
  const mover = () => {
    return window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  seta.addEventListener("click", mover);
}