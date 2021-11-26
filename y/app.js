  var hrPara = document.getElementById("hr")
  var minPara = document.getElementById("min")
  var secPara = document.getElementById("sec")
  var msecPara = document.getElementById("msec")

  
var msec = 0
var sec = 0
var min = 0
var hr = 0

  var interval;

  function timer(){
  
msec++
msecPara.innerHTML=msec
  if(msec == 100){
    sec++
    secPara.innerHTML = sec
    msec = 0
  
  }
  else if(sec == 60){
    min++
    minPara.innerHTML =min
    sec = 0
  }
  else if(min == 60){
    hr++
    hrPara.innerHTML =hr
    min = 0
  }
  }

  function start(){
    var startBtn =document.getElementById("startBtn")
    interval = setInterval( timer , 10 );
    startBtn.disabled = true

}

  function stop(){
    var startBtn =document.getElementById("startBtn")

    clearInterval(interval)
    startBtn.disabled = false

}


function reset(){
  clearInterval(interval)
  msecPara.innerHTML = "00"
  secPara.innerHTML = "00"
  minPara.innerHTML = '00'
  hrPara.innerHTML = '00'
  hr = 0
  min=0
  sec=0
  msec=0

}