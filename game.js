var p1 = localStorage.getItem('p11');
var p2 = localStorage.getItem('p22');

var time = 120;
var timer = document.getElementById("timer");
var timerId;

function startTimer() {
  time = 120;
  timer.innerHTML = time;
  timerId = setInterval(() => {
    time--;
    if (time == 0) {
      location.href = "gameover.html";
    }
    timer.innerHTML = time;
  }, 1000);
}

document.getElementById("exit").onclick = function () {
    location.href = "index.html";
};

document.getElementById("restart").onclick = function () {
  location.href = "game.html";
};

startTimer();



// Variables for each box
var turn = 'red';
var boxOneLine = 0
var boxTwoLines = 0
var boxThreeLines = 0
var boxFourLines = 0
var boxFiveLines = 0
var boxSixLines = 0
var boxSevenLines = 0
var boxEightLines = 0
var boxNineLines = 0
var score = []

//Creates blue/red lines
$('.available').click(function() {
  var won = false
  $(this).removeClass('available')
  if (turn == 'blue') {
    $(this).addClass('blue')
  } else {
    $(this).addClass('red')
  }
  //When box is made, changes box color to P1=red P2=blue
  console.log($(this).attr('class'))
  //Creates each box
  if ($(this).hasClass('box1')) {
    boxOneLine++
    if (boxOneLine === 4) {
      $('#box1').addClass(turn)
      //When player creates a box they get an extra turn
      boxesWon.push(turn)
      checkWin()
      won = true
    }
    let aaa = new Audio("");
    aaa.play();
  }
  if ($(this).hasClass('box2')) {
    boxTwoLines++
    if (boxTwoLines === 4) {
      $('#box2').addClass(turn)
      boxesWon.push(turn)
      checkWin()
      won = true
    }
  }
  if ($(this).hasClass('box3')) {
    boxThreeLines++
    if (boxThreeLines === 4) {
      $('#box3').addClass(turn)
      boxesWon.push(turn)
      checkWin()
      won = true
    }
  }
  if ($(this).hasClass('box4')) {
    boxFourLines++
    if (boxFourLines === 4) {
      $('#box4').addClass(turn)
      boxesWon.push(turn)
      checkWin()
      won = true
    }
  }
  if ($(this).hasClass('box5')) {
    boxFiveLines++
    if (boxFiveLines === 4) {
      $('#box5').addClass(turn)
      boxesWon.push(turn)
      checkWin()
      won = true
    }
  }
  if ($(this).hasClass('box6')) {
    boxSixLines++
    if (boxSixLines === 4) {
      $('#box6').addClass(turn)
      boxesWon.push(turn)
      checkWin()
      won = true
    }
  }
  if ($(this).hasClass('box7')) {
    boxSevenLines++
    if (boxSevenLines === 4) {
      $('#box7').addClass(turn)
      boxesWon.push(turn)
      checkWin()
      won = true
    }
  }
  if ($(this).hasClass('box8')) {
    boxEightLines++
    if (boxEightLines === 4) {
      $('#box8').addClass(turn)
      boxesWon.push(turn)
      checkWin()
      won = true
    }
  }
  if ($(this).hasClass('box9')) {
    boxNineLines++
    if (boxNineLines === 4) {
      $('#box9').addClass(turn)
      boxesWon.push(turn)
      checkWin()
      won = true
    }
  }

  if (!won) {
    //Switch turns from red to blue
    turn == 'red' ? turn = 'blue' : turn = 'red'
    if (turn == 'red') {
      $('.player1').eq(0).text("Red's turn")
      $('.player2').eq(0).text("Blue")
      //Shows which player's turn
    } else {
      $('.player1').eq(0).text("Red")
      $('.player2').eq(0).text("Blue's turn")
    }
  }
})

//Check for winner
var boxesWon = []

function checkWin() {
  if (boxesWon.length === 9) {
    var redCount = boxesWon.filter(function(b) {
      return b === 'red'
    }).length
    if (redCount > 4) {
      const winner = p1;
      window.location.href="gameover.html";
      const winnerwins = winner;
      localStorage.setItem('winner', winnerwins);
    } 
    else {
      const winner = p2;
      window.location.href="gameover.html";
      const winnerwins = winner;
      localStorage.setItem('winner', winnerwins);
    }
  }
}
