const x = "X";
const o = "O";
let count = 0;


var playStatus = true;
function play(playStatus) {
    window['playStatus'] = true;
    let a = document.querySelector(".overlay");
    a.style.zIndex = -1
    output.innerText = "";
}
let animationShowHide = document.querySelector(".animated_style");

// function overlay

let output = document.getElementById("outputscreen");
function playgame(event) {


    let div = document.querySelector(`#${event.target.id}`);
    let line = document.querySelector(".line");
    // console.log(event.target.id);
    if (!playStatus) {
        // alert("Please click on Play Again Button")
        let a = document.querySelector(".overlay");
        a.style.zIndex = 0;

    } else {
        let a = document.querySelector(".overlay");
        a.style.zIndex = -1
    }

    if (playStatus)
        if (event.target.innerText == "") {
            if (count % 2 == 0) {
                div.innerHTML = `<span class="span">${x}</span>`;
            } else {
                div.innerHTML = `<span class="span">${o}</span>`;
            }
            count++;
            let arr = document.querySelectorAll(".col");
            if ((arr[0].innerText === arr[3].innerText && arr[6].innerText === arr[0].innerText) && (arr[0].innerText != "")) {
                if (count % 2 != 0) {
                    output.innerText = "Winner is --> X";
                } else {
                    output.innerText = "Winner is --> O";
                }
                line.style.top = "136px";
                line.style.left = "91px";
                line.style.display = "block";
                setTimeout(() => arr.forEach((e) => { (e.innerText = "", line.style.display = "none") }), 1000);

                playStatus = false;
                let button = document.querySelector(".playButton");
                button.innerText = "Play Again"
                animationShowHide.style.display = "block";
                setTimeout(() => {
                    animationShowHide.style.display = "none";
                }, 5000)
                return;
            }
            if ((arr[0].innerText === arr[4].innerText && arr[8].innerText === arr[0].innerText) && (arr[0].innerText != "")) {
                if (count % 2 != 0) {
                    output.innerText = "Winner is --> X";
                } else {
                    output.innerText = "Winner is --> O";
                }
                line.style.display = "block";
                line.style.maxWidth = "507px";
                line.style.top = "236px";
                line.style.left = "48px";
                line.style.rotate = "35deg";
                setTimeout(() => arr.forEach((e) => { (e.innerText = "", line.style.display = "none") }), 1000);
                playStatus = false;
                let button = document.querySelector(".playButton");
                button.innerText = "Play Again"
                animationShowHide.style.display = "block";
                setTimeout(() => {
                    animationShowHide.style.display = "none";
                }, 5000)
            }
            if ((arr[0].innerText === arr[1].innerText && arr[0].innerText === arr[2].innerText) && (arr[0].innerText != "")) {
                if (count % 2 != 0) {
                    output.innerText = "Winner is --> X";
                } else {
                    output.innerText = "Winner is --> O";
                }
                line.style.top = "237px";
                line.style.left = "10px";
                line.style.maxWidth = "294px";
                line.style.rotate = "90deg";
                line.style.display = "block";
                setTimeout(() => arr.forEach((e) => { (e.innerText = "", line.style.display = "none") }), 1000);
                playStatus = false;
                let button = document.querySelector(".playButton");
                button.innerText = "Play Again"
                animationShowHide.style.display = "block";
                setTimeout(() => {
                    animationShowHide.style.display = "none";
                }, 5000)
                return;

            }
            if ((arr[1].innerText === arr[4].innerText && arr[4].innerText === arr[7].innerText) && (arr[1].innerText != "")
            ) {
                if (count % 2 != 0) {
                    output.innerText = "Winner is --> X";
                } else {
                    output.innerText = "Winner is --> O";
                }

                line.style.display = "block";
                line.style.top = "235px";
                line.style.left = "91px";
                setTimeout(() => arr.forEach((e) => { (e.innerText = "", line.style.display = "none") }), 1000);
                playStatus = false;
                let button = document.querySelector(".playButton");
                button.innerText = "Play Again"
                animationShowHide.style.display = "block";
                setTimeout(() => {
                    animationShowHide.style.display = "none";
                }, 5000)
                return;
            }

            if ((arr[2].innerText === arr[5].innerText && arr[2].innerText === arr[8].innerText) && (arr[2].innerText != "")
            ) {
                if (count % 2 != 0) {
                    output.innerText = "Winner is --> X";
                } else {
                    output.innerText = "Winner is --> O";
                }

                line.style.display = "block";
                line.style.top = "333px";
                line.style.left = "91px";
                setTimeout(() => arr.forEach((e) => { (e.innerText = "", line.style.display = "none") }), 1000);
                playStatus = false;
                let button = document.querySelector(".playButton");
                button.innerText = "Play Again"
                animationShowHide.style.display = "block";
                setTimeout(() => {
                    animationShowHide.style.display = "none";
                }, 5000)
                return;
            }

            if ((arr[3].innerText === arr[4].innerText && arr[4].innerText === arr[5].innerText) && (arr[3].innerText != "")
            ) {
                if (count % 2 != 0) {
                    output.innerText = "Winner is --> X";
                } else {
                    output.innerText = "Winner is --> O";
                }

                line.style.display = "block";
                line.style.maxWidth = "294px";
                line.style.top = "238px";
                line.style.left = "150px";
                line.style.rotate = "90deg";

                setTimeout(() => arr.forEach((e) => { (e.innerText = "", line.style.display = "none") }), 1000);
                playStatus = false;
                let button = document.querySelector(".playButton");
                button.innerText = "Play Again"
                animationShowHide.style.display = "block";
                // animationShowHide.innerText="Winner is --> X"
                setTimeout(() => {
                    animationShowHide.style.display = "none";
                }, 5000)
                return;
            }

            if ((arr[6].innerText === arr[7].innerText && arr[7].innerText === arr[8].innerText) && (arr[6].innerText != "")
            ) {
                if (count % 2 != 0) {
                    output.innerText = "Winner is --> X";
                } else {
                    output.innerText = "Winner is --> O";
                }

                line.style.display = "block";
                line.style.maxWidth = "294px";
                line.style.top = "238px";
                line.style.left = "300px";
                line.style.rotate = "90deg";

                setTimeout(() => arr.forEach((e) => { (e.innerText = "", line.style.display = "none") }), 1000);
                playStatus = false;
                let button = document.querySelector(".playButton");
                button.innerText = "Play Again"
                return;
            }
            if ((arr[2].innerText === arr[4].innerText && arr[4].innerText === arr[6].innerText) && (arr[2].innerText != "")
            ) {
                if (count % 2 != 0) {
                    output.innerText = "Winner is --> X";
                } else {
                    output.innerText = "Winner is --> O";
                }


                line.style.display = "block";
                line.style.maxWidth = "507px";
                line.style.top = "236px";
                line.style.left = "48px";
                line.style.rotate = "145deg";

                setTimeout(() => arr.forEach((e) => { (e.innerText = "", line.style.display = "none") }), 1000);
                playStatus = false;
                let button = document.querySelector(".playButton");
                button.innerText = "Play Again"
                animationShowHide.style.display = "block";
                setTimeout(() => {
                    animationShowHide.style.display = "none";
                }, 5000)
                return;
            }
            if ((arr[0].innerText === arr[3].innerText && arr[3].innerText === arr[6].innerText) && (arr[0].innerText != "")
            ) {
                if (count % 2 != 0) {
                    output.innerText = "Winner is --> X";
                } else {
                    output.innerText = "Winner is --> O";
                }


                line.style.display = "block";
                // line.style.maxWidth = "417px";
                line.style.top = "140px";
                line.style.left = "91px";
                line.style.rotate = "0deg";

                setTimeout(() => arr.forEach((e) => { (e.innerText = "", line.style.display = "none") }), 1000);
                playStatus = false;
                let button = document.querySelector(".playButton");
                button.innerText = "Play Again"
                animationShowHide.style.display = "block";
                setTimeout(() => {
                    animationShowHide.style.display = "none";
                }, 5000)
                return;
            }
            if (!playStatus) {
                // alert("Please click on Play Again Button")
                let a = document.querySelector(".overlay");
                a.style.zIndex = 0;

            } else {
                let a = document.querySelector(".overlay");
                a.style.zIndex = -1
            }
            let check = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].innerText != "") {
                    check++;

                }
                if (check === 9) {
                    output.innerText = "Metch Draw";
                    setTimeout(() => arr.forEach((e) => { (e.innerText = "", line.style.display = "none") }), 1000);
                    let button = document.querySelector(".playButton");
                    button.innerText = "Play Again"

                    break;
                }
            }

        }
}
