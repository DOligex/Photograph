// incrémenter l'ensemble des projets dans l'objet data
// création d'un tableau data contenant deux cles 
// 1 class avec valeur les classes html déjà appelés dans un fichier css
// 2 text avec valeur les textes du fichier html
let data1 = [
    {class: "projectsimgpart1",
    text: "MARIAGE"},
    {class: "projectsimagpart2",
    text: "BAR-MITZVA"},
    {class: "projectsimgpart3",
    text: "BAPTEME"},
    {class: "projectsimgpart4",
    text: "SOIREE ENTRE AMIS"},
    {class: "projectsimgpart5",
    text: "SOIREE D'ENTREPRISE"},
    {class: "projectsimgpart6",
    text: "ARTISTIQUE"}
]

//  creation d'une variable container
const container = document.getElementById('ourprojects')

// injection du contenu HTML via le fichier index.js
for (const d of data1) {
    const article = document.getElementById('');
    container.innerHTML=`
    <h2 class="projectstitle">NOS DIFFERENTS PROJETS</h2>
    <section class="projectspart1">
    <article class="projectsimgpart1">
      <p class="pictitle">MARIAGE</p>
    </article>
    <article class="projectsimgpart2">
    <p class="pictitle">BAR-MITZVA</p>
    </article>
    </section>
    <section class="projectspart2">
      <article class="projectsimgpart3">
        <p class="pictitle">BAPTEME</p>
      </article>
      <article class="projectsimgpart4">
        <p class="pictitle">SOIREE ENTRE AMIS</p>
      </article>
    </section>
    <section class="projectspart3">
      <article class="projectsimgpart5">
        <p class="pictitle">SOIREE D'ENTREPRISE</p>
      </article>
      <article class="projectsimgpart6">
        <p class="pictitle">ARTISTIQUE</p>
      </article>
    </section>
    `
}

// let data2 = [
//     {class: "table",
//     text: "Option livre prestige"},

// ]
// const container2 = document.getElementById('prestige');

// for (const e of data2) {
//     const article = document.getElementById('');
//     container.innerHTML=`
//     <h3>Option livre prestige</h3>
//     `
// }
