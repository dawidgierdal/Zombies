document.addEventListener("DOMContentLoaded", function () {
    var board = document.querySelector(".plansza");
    var counter = 0;
    var score = document.querySelector(".score");
    timer = setInterval(function () {
        var zombie = document.createElement("div");
        zombie.classList.add("zombie");
        board.appendChild(zombie);

        var random= Math.floor(Math.random() * (180 - 20 + 1) + 20);
        var randomScale= (Math.random() * (0.4 - 0.2 + 1) + 0.2);
        var randomSpeed=(Math.random() * (8 - 4 + 1) + 4);


        zombie.style.bottom=random + "px";
        zombie.style.transform="scale("+randomScale+")";
        zombie.addEventListener("click", function (e) {
            this.remove();
            var x = counter+=1
            score.innerHTML=x;
        });

        if (random>100) {
            zombie.style.transform="+Math.random() * (0.1 - 0.05 + 1) + 0.05+";
            zombie.style.zIndex=0;
        }
        if (random<100){
            zombie.style.transform="+Math.random() * (0.9 - 0.1 + 1) + 0.1+";
            zombie.style.zIndex=1;
        }
        zombie.style.animationDuration="0.9s," + randomSpeed + "s";

        zombie.addEventListener("animationend",function (event) {
            this.remove();
        })
    }, 1000)
});