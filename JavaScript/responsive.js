

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

    if(screen.width > 1300){
        return
    }else if (screen.width > 0) {
        console.log("cat")
        document.getElementById("whoAmI").innerHTML = `
        <h2>Who am I?</h2>
        <article id="whoAmIText">
            <p>Hello! My name is Diego Hidalgo, a passionate student in software engineering with a knack for frontend development. Efficiency is one of my key strengths, as I firmly believe that good solutions are not truly good if they take an eternity to be implemented. I am a logical person by nature, all my life I have had an innate sense of how to do things to achieve my goals.</p>
        </article>
        <article id="whoAmIImg">
            <img src="https://placehold.co/400x300" alt="A photo of Diego Hidalgo">
        </article>
        <p>My educational journey began in Chile, my birthplace, where my love with math first took root. However, my quest for knowledge led me to the United States, where I started my highschool education.</p>
        <p>As I keep getting deeper into the realm of mathematics, I'm constantly inspired by its beauty and utility. In my last year of high school, I took AP Calculus BC and AP Physics C. Both courses make me love math more than always. Now as my Post-secondary education I plan to transfer to a prestigious UC institution to keep learning about mathematics and computer engineering.</p>    
        <article id="whoAmILinks">
            <a href="myWork.html">See my work</a><a href="resume.html">See my resume</a>
        </article>
        
        `
    }



});

