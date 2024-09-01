const date = document.querySelector("#data");
const navPlaceholder = document.querySelector("#placeholder");
date.innerText = new Date().getFullYear();//we set here data.......


//toggle nav bar icon.........
const navContainer = document.querySelector(".nav-container");
const hamberIcon = document.querySelector("#hember-icon");
const right = document.querySelector(".right");

const banner = document.querySelector(".banner");

let bannerHeight = Math.round(banner.getBoundingClientRect().height);
let navContainerHeight = Math.round(navContainer.getBoundingClientRect().height);


hamberIcon.addEventListener("click", function () {
    // navContainer.classList.toggle("visible");

    let linksContainer = document.querySelector(".right");
     const navContainerHeight = Math.round(navContainer.getBoundingClientRect().height);
    let containerHeight = linksContainer.getBoundingClientRect().height;

    if (navContainerHeight === 90) {
        navContainer.style.height = `${containerHeight + navContainerHeight}px`;
        banner.style.height = `${bannerHeight - containerHeight}px`;
    } else {
        navContainer.style.height = `90px`;
        banner.style.height = `${bannerHeight}px`;
    };
})

//whine scroll page the nav bar stacky ................................

const showLinkHide = document.getElementById("hide");

window.addEventListener("scroll", function () {
    navContainerHeight = navContainer.getBoundingClientRect().height;
    if (navContainerHeight < window.pageYOffset) {
        navContainer.classList.add("fix-navBar");
        navPlaceholder.style.height = `${navContainerHeight}px`;
    } else {
        navContainer.classList.remove("fix-navBar");
        navPlaceholder.style.height = "0px";
    };

    //for top link button......................
    if (window.pageYOffset > 500) {
        showLinkHide.classList.add("show-top-link");
    } else {
        showLinkHide.classList.remove("show-top-link");
    };
});


//whine user click links the page scroll ...........

const links = document.querySelectorAll(".scroll-links");

links.forEach(function(link){
    link.addEventListener("click" , function(e){

        e.preventDefault();
        navContainer.style.height =`${navContainerHeight}px` ;
        banner.style.height = `${bannerHeight}px`
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        let position = element.offsetTop - navContainerHeight;
console.log(position)
        window.scrollTo({
            left:0,
            top:position,
        });
    })
})
