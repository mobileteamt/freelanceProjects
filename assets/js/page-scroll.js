const desk_links = document.getElementById('bd-mobile-menu').querySelectorAll('ul > li')

for (let link of desk_links) {
    link.addEventListener("click", (e) => {

        const article = document.querySelector(
            `body > main > section:nth-of-type(${e.target.dataset.id})`
        );
        article.scrollIntoView({ block: 'start', behavior: 'smooth' });

        activeMenu(e.target.dataset.id - 1)
    });
}

function activeMenu(id) {
    console.log('active_id', id)
    let len = document.getElementById('bd-mobile-menu').querySelectorAll('ul > li > a')
    console.log(len)

    len.forEach(ltx => { ltx.classList.remove("active") });
    len[id].classList.add("active");
    if (id === 2) {
        document.getElementById('mb-fx-menu').classList.add("menu_fixed")
    }
    else if (id !== 2) {
        document.getElementById('mb-fx-menu').classList.remove("menu_fixed")
    }
    // }
}

const desk_sections = document.querySelectorAll(
    `body > main > section`
);
let current = ''

window.addEventListener('scroll', () => {

    console.log('current', current)
    desk_sections.forEach(section => {
        if (window.pageYOffset >= section.offsetTop - 200) {
            current = section.dataset.id;
        }
    });
    activeMenu(current - 1)
    mbactiveMenu(current - 1)

})



const links = document.getElementById('mb-mobile-menu').querySelectorAll('ul > li')

for (let mlink of links) {
    mlink.addEventListener("click", (e) => {

        const article = document.querySelector(
            `body > main > section:nth-of-type(${e.target.dataset.id})`
        );
        article.scrollIntoView({ block: 'start', behavior: 'smooth' });
        console.log('article', article)

        mbactiveMenu(article.dataset.id - 1)
    });
}

function mbactiveMenu(id) {
    let len = document.getElementById('mb-mobile-menu').querySelectorAll('ul > li > a')
    let icoName = document.getElementById('mb-mobile-menu').querySelectorAll('ul > li > span')
    console.log('iconame', icoName)


    icoName.forEach(icoltx => { icoltx.classList.remove("active") });
    icoName[id].classList.add("active");


    len.forEach(ltx => { ltx.classList.remove("active") });
    len[id].classList.add("active");

}



