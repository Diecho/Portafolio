document.addEventListener("DOMContentLoaded", function () {
    function $(x) {
        return document.getElementById(x);
    }
    const carousel = $("carousel-inner");

    Array.from(carousel.children).forEach(element => {
        const duplicatedItem = element.cloneNode(true);
        carousel.appendChild(duplicatedItem);
    });
    let times = 2400;
    let dif = 0;
    console.log(screen.width)
    if(screen.width > 1624){
        console.log(screen.width)
        dif = 740;
        times = 2960;

    }else if(screen.width > 1300){
        times = 2400;
        dif = 600;
    }
    else if(screen.width > 0){
        times = 2040;
        dif = 510;
    }
    let moving = false;
    let cleaning = 0;

    Array.from(carousel.children).forEach(element => {
        const duplicatedItem = element.cloneNode(true);
        carousel.appendChild(duplicatedItem);
        element.style.transform = `translate(-${times}px)`;
    });

    document.getElementById("nextButton").addEventListener("click", function (e) {
        e.preventDefault();
        if (!moving) {
            cleaning = cleaning + 1;
            moving = true;
            times = times + dif;
            Array.from(carousel.children).forEach(element => {


                element.animate([
                    { transform: `translateX(-${times - dif}px)` },
                    { transform: `translateX(-${times}px)` }],
                    {
                        duration: 1000
                    })

                // window.requestAnimationFrame(function () {
                // });
                element.style.transform = `translate(-${times}px)`;
                setTimeout(() => {
                    moving = false;
                    if (cleaning == 4) {
                        cleaning = 0;
                        times = dif*4;
                        element.style.transform = `translate(${times * 4}px)`;
                    }

                }, 1100);

            });

        }
    });
    document.getElementById("prevButton").addEventListener("click", function (e) {
        e.preventDefault();
        if (!moving) {
            cleaning = cleaning - 1;
            moving = true;
            times = times - dif;

            Array.from(carousel.children).forEach(element => {
                element.animate([
                    { transform: `translateX(-${times + dif}px)` },
                    { transform: `translateX(-${times}px)` }],
                    {
                        duration: 1000
                    })

                // window.requestAnimationFrame(function () {
                // });
    
                element.style.transform = `translate(-${times}px)`;

                setTimeout(() => {
                    moving = false;
                    if (cleaning == -4) {
                        cleaning = 0;
                        times = dif*4;
                        element.style.transform = `translate(${0}px)`;
                    }

                }, 1100);
            });

        }
    });    

    // document.querySelectorAll("#carousel-inner *, #carousel-inner").forEach(element => {
    //     element.addEventListener("mouseover", (event) => {
    //         autoM = false;    
    //     });    
    // });


    autoMove();
    function autoMove(){
        if (autoM) {
            cleaning = cleaning + 1;
            moving = true;
            times = times + dif;
            Array.from(carousel.children).forEach(element => {


                element.animate([
                    { transform: `translateX(-${times - dif}px)` },
                    { transform: `translateX(-${times}px)` }],
                    {
                        duration: 1000
                    })

                // window.requestAnimationFrame(function () {
                // });
                element.style.transform = `translate(-${times}px)`;
                setTimeout(() => {
                    moving = false;
                    if (cleaning == 4) {
                        cleaning = 0;
                        times = dif*4;
                        element.style.transform = `translate(${times * 4}px)`;
                    }

                }, 1100);
            });
        }
        setTimeout(() => {
            autoMove();
        }, 5000);
    }

    // carousel.innerHTML = ` <article class="blockOfCarousell item active">
    // <img src="images/rexPeditions.png" alt="A photo of RexPeditions website">
    // <h3>RexPeditions</h3>
    // <p>A website based on Jurassic park. I did an expeditions website with a cart functionality. This website was one of the first big ones that I made.</p>
    // <a href="myWork.html">See more</a>
    // </article> 
    // `





});
let autoM = true;

function mouseEnter(){
    autoM = false;
}
function mouseLeave(){
    autoM = true;
}