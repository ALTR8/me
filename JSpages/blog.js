function blogRenderer(){
  var blogDiv = document.getElementsByClassName("javascript-blog")
  var blogContent = document.createTextNode("This is my blog page")
  blogDiv[0].appendChild(blogContent)
}
