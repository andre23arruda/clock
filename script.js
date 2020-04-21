function time() {
  var dateobj = new Date(); 
  var y = dateobj.getFullYear();
  var m = dateobj.getMonth();
  var d = dateobj.getDate();
  var h = dateobj.getHours();
  var mm = dateobj.getMinutes();
  var ss = dateobj.getSeconds();

  var clocktext = document.getElementById("clocktext")
  clocktext.innerHTML = `${('0' + h).slice(-2)}:${('0' + mm).slice(-2)}:${('0' + ss).slice(-2)}`

  var datetext = document.getElementById("datetext")
  datetext.innerHTML =`${('0' + d).slice(-2)}/${('0' + m).slice(-2)}/${y}`
  setTimeout("time()",1000)
}
  
