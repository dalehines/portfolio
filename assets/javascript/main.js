// ========= DISPLAY MENU =========

const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')
//  ========= active classname + Remove MENU =========

const navLink = document.querySelectorAll('.nav__link')


function linkAction(){

    //active link
    navLink.forEach(n  => n.classList.remove('active'))
    this.classList.add('active')
    // remove menu
    const navMenu = document.getElementById('nav-menu')
    this.classList.remove('show')

}

navLink.forEach(n => n.addEventListener('click',linkAction))