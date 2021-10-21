let n = 13;
let str = " ";
function show(num) {
  str = " ";
  for (let i = 0; i < num; i++) {
    str += "| ";
  }
  return alert(num + str);
}

while (n > 0) {
  alert("Your turn!");
  let m = prompt("Get the matches!");
  if (isNaN(m) || m <= 0 || m > 3) {
    alert("It's not a number!");
    break;
  }
  n -= m;
  show(n);
  if (n <= 0) {
    alert("You win!");
    break;
  }
  alert("My turn!");
  let rand = Math.floor(Math.random() * 3) + 1;
  n -= rand;
  show(n);
  if (n <= 0) {
    alert("You lost");
    break;
  }
}
