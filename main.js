const cross = document.querySelectorAll(".dino");

for (const item of cross) {
    item.addEventListener("click", function (event) {
        const clickedEvent = event.target;
        clickedEvent.style.textDecoration = "line-through";
    });
}

const secondList = document.querySelectorAll(".dinos");

for (const item1 of secondList) {
    item1.addEventListener("click", function (event) {
        const clickedEvent1 = event.target;
        clickedEvent1.style.opacity = "0";
    });
}

const thirdList = document.querySelectorAll("#row");

for (const item2 of thirdList) {
    item2.addEventListener("click", function (event) {
        const clickedEvent2 = event.target;
        clickedEvent2.style.width = "0";
    });
}

const big = document.querySelector("#biggify");
const butt = document.querySelector("#destroy-all");


function destroyEverything () {
    big.style.width = "0";
    document.querySelector("#t-rex").style.width = "0";
    document.querySelector("#triceratops").style.width = "0";
    document.querySelector("#hide-me").style.width = "0";
    document.querySelector("#feathers").style.width = "0";
    document.querySelector("#rattle").style.width = "0";
    document.querySelector("#dino1").style.opacity = "0";
    document.querySelector("#dino2").style.opacity = "0";
    document.querySelector("#dino3").style.opacity = "0";
    document.querySelector("#dino4").style.opacity = "0";
    document.querySelector("#dino5").style.opacity = "0";
    document.querySelector("#dino6").style.opacity = "0";
    document.querySelector("#dino7").style.opacity = "0";
    document.querySelector("#dino8").style.opacity = "0";
    document.querySelector("#dino9").style.opacity = "0";
    document.querySelector("#dino10").style.opacity = "0";
    document.querySelector("#dino11").style.opacity = "0";
    document.querySelector("#dino12").style.opacity = "0";
    document.querySelector("#dino13").style.opacity = "0";
    document.querySelector("#dino14").style.opacity = "0";
    document.querySelector("#dino15").style.opacity = "0";
    document.querySelector("ol").style.textDecoration = "line-through";
}

butt.addEventListener("click", destroyEverything);

