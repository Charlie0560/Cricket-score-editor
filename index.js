let run = 0;
let wicket = 0;
let over = 0;
let main = 0;
let point = 0;
function rincrement() {
  if (run >= 0) {
    run = run + 1;
    document.getElementById("run").innerHTML = run;
  } else {
    run = 0;
  }
  console.log(run);
}
function wincrement() {
  wicket = wicket + 1;
  if (wicket >= 0) {
    document.getElementById("wicket").innerHTML = wicket;
  } else {
    wicket = 0;
  }
  console.log(run);
}
function wdecrement() {
  wicket = wicket - 1;
  if (wicket >= 0) {
    document.getElementById("wicket").innerHTML = wicket;
  } else {
    wicket = 0;
  }
  console.log(wicket);
}
function rdecrement() {
  run = run - 1;
  if (run >= 0) {
    document.getElementById("run").innerHTML = run;
  } else {
    run = 0;
  }
  console.log(run);
}
function oincrement() {
    over = over + 1;
    point = over % 6;
    main = over /6;
    document.getElementById("main").innerHTML = parseInt(main) ;
    document.getElementById("pointer").innerHTML= parseInt(point);
    console.log(over);
}
function odecrement() {
    point = document.getElementById("pointer").innerHTML;
    point = point - 1;
    document.getElementById("pointer").innerHTML = point;
    console.log(point);
}

function resetfunction() {
  document.getElementById("run").innerHTML = 0;
  document.getElementById("wicket").innerHTML = 0;
  document.getElementById("main").innerHTML = 0;
  document.getElementById("pointer").innerHTML = 0;
  run = 0;
  wicket = 0;
  over = 0;
  final = 0;
}
