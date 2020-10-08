/* add code here  */
function focusFunction1(){
  document.getElementById("title").classList.toggle("highlight");
}

function focusFunction2(){
  document.getElementById("description").classList.toggle("highlight");
}

function focusFunction3(){
  document.getElementsByClassName("hilightable")[2].classList.toggle("highlight");
}

function focusFunction4(){
  document.getElementsByClassName("hilightable")[3].classList.toggle("highlight");
}

function focusFunction5(){
  document.getElementById("medium").classList.toggle("highlight");
}

function focusFunction6(){
  document.getElementById("year").classList.toggle("highlight");
}

function focusFunction7(){
  document.getElementById("museum").classList.toggle("highlight");
}

function blurFunction1(){
  if (!document.getElementById("title").selected) {
    document.getElementById("title").classList.remove("highlight");
  }
}
function blurFunction2(){
  if (!document.getElementById("description").selected) {
    document.getElementById("description").classList.remove("highlight");
  }
}
function blurFunction3(){
  if (!document.getElementsByClassName("hilightable")[2].selected) {
    document.getElementsByClassName("hilightable")[2].classList.remove("highlight");
  }
}

function blurFunction4(){
  if (!document.getElementsByClassName("hilightable")[3].selected) {
    document.getElementsByClassName("hilightable")[3].classList.remove("highlight");
  }
}

function blurFunction5(){
  if (!document.getElementById("medium").selected) {
    document.getElementById("medium").classList.remove("highlight");
  }
}

function blurFunction6(){
  if (!document.getElementById("year").selected) {
    document.getElementById("year").classList.remove("highlight");
  }
}

function blurFunction7(){
  if (!document.getElementById("museum").selected) {
    document.getElementById("museum").classList.remove("highlight");
  }
}

function preventDefaut() {
  if (document.getElementById("title").value.length === 0) {
    document.getElementById("title").classList.add("error");
  } else {
    document.getElementById("title").classList.remove("error");
  }

  if (document.getElementById("description").value.length === 0) {
    document.getElementById("description").classList.add("error");
  } else {
    document.getElementById("description").classList.remove("error");
  }

  if (document.getElementById("year").value.length === 0) {
    document.getElementById("year").classList.add("error");
  } else {
    document.getElementById("year").classList.remove("error");
  }
  return false;
}
