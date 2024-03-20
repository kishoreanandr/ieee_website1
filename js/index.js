const header=document.querySelector("header");

window.addEventListener("scroll",function()
{
    header.classList.toggle("sticky",window.scrollY > 60);
});

let menu=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");

menu.onclick=()=>
{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open'); //it will that css 
}

let sections=document.querySelectorAll('section');

window.onscroll=() =>
{
    sections.forEach(sec=>
        {
            let top=window.scrollY;
            let offset=sec.offsetTop;
            let height=sec.offsetHeight;

            if(top >=offset && top < offset + height)
            {
                sec.classList.add('show-animate');
            }
            else
            {
                sec.classList.remove('show-animate'); 
            }
        })
}



