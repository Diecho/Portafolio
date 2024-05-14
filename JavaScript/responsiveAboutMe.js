

document.addEventListener("DOMContentLoaded", function () {


    if (screen.width > 1624) {
        return
    }else if(screen.width > 1000){
        document.getElementById("whoAmI").innerHTML = `
    <h2>Who am I?</h2>
    <article id="whoAmIText">
        <p>Hello! My name is Diego Hidalgo, a passionate student in software engineering with a knack for frontend development. Efficiency is one of my key strengths, as I firmly believe that good solutions are not truly good if they take an eternity to be implemented. I am a logical person by nature, all my life I have had an innate sense of how to do things to achieve my goals.</p>
        <p>My educational journey began in Chile, my birthplace, where my love with math first took root. However, my quest for knowledge led me to the United States, where I started my highschool education.</p>
    </article>
    <article id="whoAmIImg">
        <img src="images/me.JPG" alt="A photo of Diego Hidalgo">
    </article>
    <p>As I keep getting deeper into the realm of mathematics, I'm constantly inspired by its beauty and utility. In my last year of high school, I took AP Calculus BC and AP Physics C. Both courses make me love math more than always. Now as my Post-secondary education I plan to transfer to a prestigious UC institution to keep learning about mathematics and computer engineering.</p>    
    <article id="whoAmILinks">
        <a href="myWork.html">See my work</a><a href="resume.html">See my resume</a>
    </article>
    
    `
    }else if (screen.width > 0) {
        document.getElementById("whoAmI").innerHTML = `
    <h2>Who am I?</h2>
    <article id="whoAmIText">
        <p>Hello! My name is Diego Hidalgo, a passionate student in software engineering with a knack for frontend development. Efficiency is one of my key strengths, as I firmly believe that good solutions are not truly good if they take an eternity to be implemented. I am a logical person by nature, all my life I have had an innate sense of how to do things to achieve my goals.</p>
    </article>
    <article id="whoAmIImg">
        <img src="images/me.JPG" alt="A photo of Diego Hidalgo">
    </article>
    <p id="margins">My educational journey began in Chile, my birthplace, where my love with math first took root. However, my quest for knowledge led me to the United States, where I started my highschool education.</p>
    <p>As I keep getting deeper into the realm of mathematics, I'm constantly inspired by its beauty and utility. In my last year of high school, I took AP Calculus BC and AP Physics C. Both courses make me love math more than always. Now as my Post-secondary education I plan to transfer to a prestigious UC institution to keep learning about mathematics and computer engineering.</p>    
    <article id="whoAmILinks">
        <a href="myWork.html">See my work</a><a href="resume.html">See my resume</a>
    </article>
    
    `
    }
});
