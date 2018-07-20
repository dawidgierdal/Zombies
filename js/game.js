document.addEventListener("DOMContentLoaded", function () {
    var board = document.querySelector(".plansza");
    var counterScore = 0;
    var counterGone = 0;
    var score = document.querySelector(".score");
    var gone = document.querySelector(".gone");
    timer = setInterval(function () {
        var zombie = document.createElement("div");
        zombie.classList.add("zombie");

        var random= Math.floor(Math.random() * (140 - 20 + 1) + 20);
        var randomSpeed=(Math.random() * (8 - 2 + 1) + 2);

        zombie.style.bottom=random + "px";
        zombie.addEventListener("click", function (e) {
            this.remove();
            var x = counterScore+=1;
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

        // var getZombie = document.querySelector(".zombie");
        // console.log(getZombie);

       zombie.addEventListener("animationend",function (event) {
            this.remove();
            var z = counterGone+=1;
            var q = gone.innerHTML=z;
            if(q>=10){
                clearInterval(timer);
                alert("Your village is burned!");

            }
            console.log(event);
        })
    }, 600)
    // clearInterval(timer);
});