document.addEventListener("DOMContentLoaded", function () {
    var board = document.querySelector(".plansza");
    var counter = 0;
    var score = document.querySelector(".score");
    timer = setInterval(function () {
        var zombie = document.createElement("div");
        zombie.classList.add("zombie");


        var random= Math.floor(Math.random() * (180 - 20 + 1) + 20);
        var randomSpeed=(Math.random() * (8 - 4 + 1) + 4);


        zombie.style.bottom=random + "px";
        // zombie.style.transform="scale("+randomScale+")";
        zombie.addEventListener("click", function (e) {
            this.remove();
            var x = counter+=1
            score.innerHTML=x;
        });

        if (random>100) {
            zombie.style.transform= "scale(0.5)";
        }
        if (random<100){
            zombie.style.transform="scale(0.9)";
        }
        zombie.style.animationDuration="0.9s," + randomSpeed + "s";
        zombie.style.zIndex = 180 - random;
        board.appendChild(zombie);

        zombie.addEventListener("animationend",function (event) {
            this.remove();
            console.log(event);
        })
    }, 1000)
});