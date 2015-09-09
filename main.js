// 3.2.-Choose-Goose-Homework
document.querySelector("#update-button").addEventListener('click', function() {

var thimbles = Number(document.getElementById("thimbles").value);

var swords = Number(document.getElementById("swords").value);

var totalCost = thimbles + (37 * swords);

if (totalCost === 1) {
  document.getElementById("the-total").textContent = totalCost + " money";
} else {
  document.getElementById("the-total").textContent = totalCost + " monies";
}

});
