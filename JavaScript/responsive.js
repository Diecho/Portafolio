

document.addEventListener("DOMContentLoaded", function () {


    // for index.html
    if(screen.width > 1000){
        return
    }else if (screen.width > 0) {
        document.getElementById("header").innerHTML = `
    <div id="headerLeft">
        <p id="hey">Hey, I’m</p>
        <h1 id="homeHeader">Diego Hidalgo</h1>
    </div>
    <div id="headerRight">
        <img src="https://placehold.co/250x250" alt="Diego Hidalgo's photo">
    </div>
    <p>A college student in software engineering willing to create, explore and learn about web development
    and software. I’m passionate about applying mathematics and to apply logic to any type of problem
    that comes to my life. </p>
    `
    }
    // else if(screen.width > 1300){

    // else if(screen.width > 0){
    // }


});

