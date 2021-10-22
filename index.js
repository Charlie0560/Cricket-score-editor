run = 0;
wicket = 0;
function rincrement() {
  if (run >= 0) {
    run = run + 1;
    document.getElementById("run").innerHTML = run;
  } else {
    run=0;
  }
  console.log(run);
}
function wincrement() {
  wicket = wicket + 1;
  if (wicket >= 0) {
    document.getElementById("wicket").innerHTML = wicket;
  } else {
    wicket=0;
  }
  console.log(run);
}
function wdecrement() {
  wicket = wicket - 1;
  if (wicket >= 0) {
    document.getElementById("wicket").innerHTML = wicket;
  } else {
    document.getElementById("wicket").innerHTML = 0;
  }
  console.log(wicket);
}
function rdecrement() {
  run = run - 1;
  if (run >= 0) {
    document.getElementById("run").innerHTML = run;
  } else {
    run=0;
  }
  console.log(run);
}

function resetfunction(){
    document.getElementById("run").innerHTML=0;
    document.getElementById("wicket").innerHTML=0;
}