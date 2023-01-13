// Start Header
let other = document.querySelector(".other");
let mega = document.querySelector(".mega-menu");
let close = document.querySelector(".mega-menu >span");

other.onclick = function(){
    mega.style.cssText = "z-index: 100; opacity: 1; top: calc(100% + 1px);"
    other.className= "active";
}
close.onclick = function(){
    mega.style.cssText = "opacity: 0; top: calc(100% + 50px); z-index: -1;"
    other.classList = "other"
}
// End Header

// Start Landing
let text = document.querySelector(".landing h1").dataset.text;
let i = 0;
let write = function(){
    let fun = setInterval(() => {
        
            document.getElementById("heading").textContent += text[i];
            i++;
            if(i == text.length){
                clearInterval(fun);
            }
        }, 100);

}
write();
// End Landing

// Start Articles
let readMore = document.querySelectorAll(".box .info button");
let more = document.querySelectorAll(".box .more");
let closeMore = document.querySelectorAll(".box .more span");
for(let i = 0; i< readMore.length; i++){
    readMore[i].onclick = function(){
        more[i].style.cssText= "top: 0;"
    }
}
for(let i = 0; i< closeMore.length; i++){
    closeMore[i].onclick = function(){
        more[i].style.cssText= "top: 100%;"
    }
}

// End Articles

// Start Skills 

let sectionSkills = document.querySelector(".our-skills");
let skillsSpan = document.querySelectorAll(".the-progress span")

// End Skills 



// Start Events
let countDownDate= new Date("Dec 31, 2022 23:59:59").getTime();

let counter= setInterval(()=>{
    //Get Date Now
    let dateNow = new Date().getTime();

    //Find The Date Difference Between Now And countDown Date
    let dateDiff = countDownDate - dateNow;

    //Get Time Units
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));

    let seconds = Math.floor((dateDiff %(1000 * 60)) /1000);
    document.querySelector(".days").innerHTML = days< 10 ? `0${days}`: days;
    document.querySelector(".hours").innerHTML = hours< 10 ? `0${hours}`: hours;
    document.querySelector(".minutes").innerHTML = minutes< 10 ? `0${minutes}`: minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}`: seconds;

    if(dateDiff <= 0){
        countDownDate= new Date("Dec 31, 2023 23:59:59").getTime()
    }

},1000)



// End Events

// Start Videos

let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let VideoName = document.querySelector(".preview .info");
let imgs = document.querySelectorAll(".preview img");
let imgsArray = Array.from(imgs);

tabsArray.forEach((ele) => {
    ele.addEventListener("click", function(e){
        tabsArray.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        
        VideoName.innerHTML = e.currentTarget.textContent;
        imgsArray.forEach((img) => {
            img.style.display= "none";
        });
        document.querySelector(e.currentTarget.dataset.cont).style.display= "block";
    })
})
// End Videos


// Start Stats
let nums = document.querySelectorAll(".box .number");
let sectionStats = document.querySelector(".stats");
let started = false;

let featuresSection = document.querySelector(".features");
let leftBox = document.querySelector(".features .quality");
let rightBox = document.querySelector(".features .passion");


window.onscroll = function(){
    if(window.scrollY >= sectionStats.offsetTop -100){
        if(!started){
            nums.forEach((number) => startCount(number));            
        }
        started = true;
    }
    // let sectionSkills = document.querySelector(".our-skills");
    // let skillsSpan = document.querySelectorAll(".the-progress span")

    if(window.scrollY >= sectionSkills.offsetTop - 100){
        skillsSpan.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
    if(window.scrollY >= featuresSection.offsetTop - 500){
        leftBox.classList.add("active");
        rightBox.classList.add("active");
    }
    if(window.scrollY < featuresSection.offsetTop - 400){
        leftBox.classList.remove("active");
        rightBox.classList.remove("active");
    }
}

function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count);
        }
    }, 2000 / goal);
}

// End Stats