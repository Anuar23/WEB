function changeImg(){
  	var src  = String(event.currentTarget.getAttribute("src"));
  	var bigImage = document.getElementById("bigImage");
  	var img = bigImage.getElementsByTagName("img")[0];
  	img.setAttribute("src", src);
}

var carousel = document.getElementById('carousel');
var imgs = carousel.getElementsByTagName('img');

for(var i = 0; i < imgs.length; i++){
  imgs[i].addEventListener('click', changeImg,false);
}
