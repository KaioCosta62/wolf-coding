export default function navegacaoTab(){
  const btns = document.querySelectorAll(".educacao .buttons a");
  const sections = document.querySelectorAll(".educacao section");

  sections[0].classList.add("ativarSection");
   btns[0].classList.add("active");

  const executaTab = (index) => {

    sections.forEach((section) => {
      section.classList.remove("ativarSection");
    })
    
    btns.forEach((btn) => {
      btn.classList.remove('active');
    })

    sections[index].classList.add("ativarSection");
    btns[index].classList.add('active');
  }

  btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      executaTab(index);
    });
  });


  const btnCursos = document.querySelectorAll(".cursos .buttons-cursos a");
  const cursosSection = document.querySelectorAll(".cursos-vitrine .lista-cursos");

  btnCursos[0].classList.add("active");
  cursosSection[0].classList.add("activeCursos");

  const tabCursos = (index) => {
    cursosSection.forEach((curso) => {
      curso.classList.remove("activeCursos");
    })

    btnCursos.forEach((btn) => {
      btn.classList.remove("active")
    })

    cursosSection[index].classList.add("activeCursos")
    btnCursos[index].classList.add("active")
  }

  btnCursos.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      tabCursos(index);
    })
  })
}