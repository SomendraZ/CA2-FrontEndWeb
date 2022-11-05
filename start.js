document.getElementById("ins").onclick = function () {
    location.href = "ins.html";
};

document.getElementById("r3").onclick = function () {
    const p1 = document.getElementById("p1").value;
    const p2 = document.getElementById("p2").value;
    location.href = "game.html";
    localStorage.setItem('p11', p1);
    localStorage.setItem('p22', p2);
};