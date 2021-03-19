const leftNav = document.querySelector(".leftNav");
const rightNav = document.querySelector(".rightNav");
const bgImage = document.querySelector("main");

function handleImage(event) {
    const target = event.target;
    const leftside = leftNav.children;
    const rightside = rightNav.children;

    switch (target) {
        case leftside[0]:
            bgImage.style.backgroundImage = `url("https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80")`;
            break;
        case leftside[1]:
            bgImage.style.backgroundImage = `url("https://images.unsplash.com/photo-1505480449763-8f5c78af9caa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1100&q=80")`;
            break;
        case leftside[2]:
            bgImage.style.backgroundImage = `url("https://images.unsplash.com/photo-1576158130334-6b92e79390a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80")`;
            break;
        case leftside[3]:
            bgImage.style.backgroundImage = `url("https://images.unsplash.com/photo-1580380853934-834251ec0e95?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80")`;
            break;
        case leftside[4]:
            bgImage.style.backgroundImage = `url("https://images.unsplash.com/photo-1575986711002-b1e7452c8b17?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80")`;
            break;
        case rightside[0]:
            bgImage.style.backgroundImage = `url("https://images.unsplash.com/photo-1601318314960-e17a48ebb6f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80")`;
            break;
        case rightside[1]:
            bgImage.style.backgroundImage = `url("https://images.unsplash.com/photo-1574169208496-ab47e11d74c2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80")`;
            break;
        case rightside[2]:
            bgImage.style.backgroundImage = `url("https://images.unsplash.com/photo-1574169208496-ab47e11d74c2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80")`;
            break;
        case rightside[3]:
            bgImage.style.backgroundImage = `url("https://images.unsplash.com/photo-1577138043155-7934dd897541?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80")`;
            break;
        case rightside[4]:
            bgImage.style.backgroundImage = `url("https://images.unsplash.com/photo-1518715159541-e12050b5dd1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80")`;
            break;
    }
}

function initImage(event) {
    bgImage.style.backgroundImage = `url("https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80")`;
}

leftNav.addEventListener("mouseover", handleImage);
leftNav.addEventListener("mouseout", initImage);
rightNav.addEventListener("mouseover", handleImage);
rightNav.addEventListener("mouseout", initImage);
