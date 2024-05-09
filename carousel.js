document.addEventListener("DOMContentLoaded", function () {


    function $(x) {
        return document.getElementById(x);
    }


    class CarouselArray {
        constructor(h3, p, img) {
            this.h3 = h3;
            this.p = p;
            this.img = img;
        }
    }


    blocksArray = [
        new CarouselArray("RexPeditions", "A website based on Jurassic park. I did an expeditions website with a cart functionality. This website was one of the first big ones that I made.", "images/rexPeditions.png"),
        new CarouselArray("RexPeditions", "A website based on Jurassic park. I did an expeditions website with a cart functionality. This website was one of the first big ones that I made.", "images/rexPeditions.png"),
        new CarouselArray("RexPeditions", "A website based on Jurassic park. I did an expeditions website with a cart functionality. This website was one of the first big ones that I made.", "images/rexPeditions.png"),
        new CarouselArray("RexPeditions", "A website based on Jurassic park. I did an expeditions website with a cart functionality. This website was one of the first big ones that I made.", "images/rexPeditions.png"),
    ];

    const carousel = $("carousel-inner");
    let times = 0;

    Array.from(carousel.children).forEach(element => {
        const duplicatedItem = element.cloneNode(true);
        carousel.appendChild(duplicatedItem);
    });


    let timesRem = -3;
    let moving = false;
    let cleaning = 0;
    document.getElementById("nextButtom").addEventListener("click", function (e) {
        e.preventDefault();
        if(moving == false){
            cleaning = cleaning + 1;
            moving = true;
            times = times + 600;
            timesRem = timesRem + 3;
            Array.from(carousel.children).forEach(element => {
    
    
                element.animate([
                    { transform: `translateX(-${times - 600}px)` },
                    { transform: `translateX(-${times}px)` }],
                    {
                        duration: 1000
                    })
    
                // window.requestAnimationFrame(function () {
                // });
                element.style.transform = `translate(-${times}px)`;
                setTimeout(() => {
                    moving = false;
                    if(cleaning == 4){
                        cleaning = 0;
                        times =  0;
                        timesRem = -3;    
                        element.style.transform = `translate(${times * 4}px)`;
                    }
    
                }, 1100);
    
            });
    
        }
        document.getElementById("prevButtom").addEventListener("click", function (e) {
            e.preventDefault();
            if(moving == false){
                cleaning = cleaning - 1;
                moving = true;
                times = times - 600;
                timesRem = timesRem - 3;
                Array.from(carousel.children).forEach(element => {
                    element.animate([
                        { transform: `translateX(${times - 600}px)`},
                        { transform: `translateX(${times }px)`}],
                        {
                            duration: 1000
                        })
        
                    // window.requestAnimationFrame(function () {
                    // });
                    element.style.transform = `translate(${times}px)`;
                    setTimeout(() => {
                        moving = false;
                        if(cleaning == 4){
                            cleaning = 0;
                            times =  0;
                            timesRem = -3;    
                            element.style.transform = `translate(${times * 4}px)`;
                        }
        
                    }, 1100);
        
                });
        
            }
        });

    });


    // carousel.innerHTML = ` <article class="blockOfCarousell item active">
    // <img src="images/rexPeditions.png" alt="A photo of RexPeditions website">
    // <h3>RexPeditions</h3>
    // <p>A website based on Jurassic park. I did an expeditions website with a cart functionality. This website was one of the first big ones that I made.</p>
    // <a href="myWork.html">See more</a>
    // </article> 
    // `





});

