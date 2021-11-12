
const headerIcons =document.querySelector('.siteHeader_icons');

const nav = document.querySelector(".siteHeader_nav");
const navContainer = document.querySelector(".container_nav");
const navContainer_1000 = document.querySelector('#container_nav-1000');
const siteHeader = document.querySelector(".siteHeader");

var win = document.defaultView;



function modifyNav () {
    if(window.innerWidth > 800 && window.innerWidth  < 1000){
        nav.remove();
        navContainer_1000.appendChild(nav);
        console.log('asjdfdjsfjs')
        
    } else if(win.screen.width > 1000){
        nav.remove();
        navContainer.insertBefore(nav, headerIcons);
    
    }

}

win.onresize = modifyNav;