"use strict";
(function () {

    // keeps track of color of box
    let isGoing = false;
    let words = [];
    let time = 300;

    window.onload = function () {
        document.getElementById("start").onclick = startPattern;

        document.getElementById("stop").onclick = stopPattern;

        document.getElementById("speed").onchange = dropdownChange;

        // document.getElementsByName("size").onclick = checkboxChange;
    };

    function startPattern() {
        if (!isGoing) {
            isGoing = true;
            let paragraph = document.getElementById("input").value;
            if (words.length === 0) {
                words = paragraph.trim().split(" ");
            }
            display(words);
        }
    }

    function stopPattern() {
        if (isGoing) {
            isGoing = false;
        }
    }

    function display(words) {
        let intr = setInterval(function () {
            document.getElementById("readingArea").innerHTML = words.shift();
            if (!isGoing || words.length === 0) {
                clearInterval(intr);
                isGoing = false;
            }
        }, time);
    }


    function dropdownChange() {
        time = document.getElementById("speed").value;
    }
    
    function checkboxChange() {
        
    }

})();