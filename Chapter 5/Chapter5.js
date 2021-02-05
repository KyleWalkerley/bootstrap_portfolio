var item1;
var item2;
var item3;
var item4;
var item5;
var item6;

document.getElementById("changeList").onclick = newList;

function newList() {
    item1 = prompt("Enter a new first thing");
    item2 = prompt("Enter a new first thing");
    item3 = prompt("Enter a new first thing");
    item4 = prompt("Enter a new first thing");
    item5 = prompt("Enter a new first thing");
    item6 = prompt("Enter a new first thing");
    updateList();
}

function updateList() {
    document.getElementById("o").innerHTML = item1;
    document.getElementById("d").innerHTML = item2;
    document.getElementById("g").innerHTML = item3;
    document.getElementById("t").innerHTML = item4;
    document.getElementById("r").innerHTML = item5;
    document.getElementById("c").innerHTML = item6;

}