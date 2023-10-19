document.querySelector(".btn").onmouseover = function(){

    const btn = document.querySelector(".btn");

    console.log(btn.style);

    btn.style.transform = "scale(1.25)";
}
document.querySelector(".btn2").onmouseover = function(){

    const btn = document.querySelector(".btn2");

    console.log(btn.style);

    btn.style.transform = "scale(1.25)";
}
document.querySelector(".btn").onmouseout = function(){

    const btn = document.querySelector(".btn");

    console.log(btn.style);

    btn.style.transform = "scale(1)";
}
document.querySelector(".btn2").onmouseout = function(){

    const btn = document.querySelector(".btn2");

    console.log(btn.style);

    btn.style.transform = "scale(1)";
}