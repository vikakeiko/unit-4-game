// glabal valiables 

// game counters 
var winCounter = 0;
var lossCounter = 0;
var totalScore = 0;
var displayWin = document.getElementById("winCounter");
var displayLoss = document.getElementById("lossCounter");
var displayTotalScore = document.getElementById("totalScore");
var displaySelectedNum = document.getElementById("selectedNum");

$(document).ready(function () {
    function generateGem() {
        return Math.floor(Math.random() * 12) + 1;
    }
    var selectedNum = Math.floor(Math.random() * 120 - 19) + 19;
    displaySelectedNum.innerText = selectedNum;
    var gemValues = [];
    var gemColors = ['red', 'blue', 'yellow', 'green']
    for (var i = 0; i < 4; i++) {
        gemValues.push(generateGem());
    }
    console.log("selectedNum: " + selectedNum);

    $("img").on("click", function () {
        // var selected = $(this);
        var index = gemColors.indexOf($(this).attr('id'));

        // console.log($(this).attr('id'));
        totalScore += gemValues[index];
        displayTotalScore.innerText = totalScore;
        console.log("totalScore " + totalScore);

        if (totalScore === selectedNum) {
            winCounter++;
            displayWin.innerText = winCounter;
            console.log('wins ' + winCounter);
            reset();
        } else if (totalScore > selectedNum) {
            lossCounter++;
            displayLoss.innerText = lossCounter;
            console.log('losses ' + lossCounter);
            reset();
        }
    })

    function reset() {
        selectedNum = Math.floor(Math.random() * 120 - 19) + 19;
        displaySelectedNum.innerText = selectedNum;
        totalScore = 0;
        displayTotalScore.innerText = totalScore;
        gemValues = [];
        for (var i = 0; i < 4; i++) {
            gemValues.push(generateGem());
        }
    }
});
