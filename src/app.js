/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
// creamos lista de listas
let lista = [who, action, what, when];

window.onload = function() {
  //write your code here
  // creamos lista vacia
  let arr = [];
  // creamos loop que recorre la lista de listas
  for (let i in lista) {
    let x = Math.floor(Math.random() * lista[i].length);
    arr.push(lista[i][x]);
  }

  document.getElementById("excuse").innerHTML = arr.join(" ");
};
