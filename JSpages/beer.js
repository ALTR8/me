function beerRenderer(){
  var beerDiv = document.getElementsByClassName("javascript-beer")
  var beerContent = document.createTextNode("This is my beer page")
  beerDiv[0].appendChild(beerContent)
}
