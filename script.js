// const scroll = new LocomotiveScroll({
//     el: document.querySelector('main'),
//     smooth: true
// });

let current_mode = "dark";
let mode_button = document.querySelector("#mode");
let main_content = document.querySelector("main");
let hero_section = main_content.querySelector("#hero");
let second_section = main_content.querySelector("#second");
let third_section = main_content.querySelector("#third");
let fourth_section = main_content.querySelector("#fourth");
function change_mode(){
    mode_button.addEventListener("click",()=>{
        if (current_mode==="dark"){
            main_content.style.backgroundColor = "white";
            hero_section.style.backgroundColor = "white";
            second_section.style.backgroundColor = "white";
            third_section.style.backgroundColor = "white";
            fourth_section.style.backgroundColor = "white";
            current_mode="white";
            main_content.style.color = "black"
            console.log("white")
        }else{
            main_content.style.backgroundColor = "black";
            hero_section.style.backgroundColor = "black";
            second_section.style.backgroundColor = "black";
            third_section.style.backgroundColor = "black";
            fourth_section.style.backgroundColor = "black";
            current_mode="dark";
            main_content.style.color = "rgb(165, 165, 159)";
            console.log("black");
        }
    })
}

change_mode();

let circle=document.querySelector("#minicircle");
function mouseFollowCircle(){
    window.addEventListener("mousemove",(dets)=>{
        (function (){
            newx = dets.clientX - 13;
            newy= dets.clientY - 10;
            circle.style.left = newx + "px"
            circle.style.top = newy + "px"
        })();
    })
}

mouseFollowCircle();
let elements = document.querySelectorAll("#second .element");
// let images = document.querySelectorAll("#second .element img");
function showImage(){
    elements.forEach(element=>{
        element.addEventListener("mousemove",(dets)=>{
            let rect = element.getBoundingClientRect();
            let image = element.querySelector("img");
            let top_dist=(rect.top);
            let left_dist=(rect.left);
            let maxLeft = rect.width - image.width;
            let maxTop = rect.height - image.height;
            let newLeft = Math.min(maxLeft, Math.max(0, dets.clientX - left_dist));
            let newTop = Math.min(maxTop, Math.max(0, dets.clientY - top_dist));
            let angle = (newLeft / rect.width) * 40 - 20;
            let rotation = Math.max(-20, Math.min(20, angle));
            image.style.zIndex=1;
            image.style.left = newLeft-200 + "px";
            image.style.top= newTop + "px";
            image.style.transform = `rotate(${rotation*0.5}deg)`;
        })
        element.addEventListener("mouseleave",()=>{
            element.querySelector("img").style.zIndex=-1;
            element.querySelector("img").style.opacity=0.5;
        })
    })
}
showImage()

function getCurrentTime(){
    const now = new Date();
    const hours = now.getHours()%12;
    const minutes = now.getMinutes();
    let am_pm;
    if (now.getHours()>=12){
        am_pm = "PM";
    }else{
        am_pm="AM";
    }
    const timeZone = "EST";
    let currentTime = `${hours}:${minutes} ${am_pm} ${timeZone}`;
    let timmer = document.querySelector("#footer #time");
    timmer.innerHTML = currentTime;
    console.log(currentTime);
}
setInterval(getCurrentTime(),1000);