
const headerIcons =document.querySelector('.siteHeader_icons');

const nav = document.querySelector(".siteHeader_nav");
const navContainer = document.querySelector(".container_nav");
const navContainer_1000 = document.querySelector('#container_nav-1000');
const siteHeader = document.querySelector(".siteHeader");

var win = document.defaultView;



function modifyNav () {
    if(win.screen.width > 800 && win.screen.width < 1000){
        navContainer.removeChild(nav);
        navContainer_1000.appendChild(nav); 
        
        
    } else if(win.screen.width > 1000){
        nav.classList.remove('nav-1000');
        nav.classList.add('siteHeader_nav');
        navContainer.insertBefore(nav, headerIcons);
    
    }

}

win.onresize = modifyNav;