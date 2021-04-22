var indexValue = 0;
function slideShow(){
  setTimeout(slideShow, 2000);
  var x;
  const img = document.querySelectorAll("img");
  for(x = 0; x < img.length; x++){
    img[x].style.display = "none";
  }
  indexValue++;
  if(indexValue > img.length){indexValue = 1}
  img[indexValue -1].style.display = "block";
}
//slideShow();


var sliderInterval = setInterval(newSlideShow, 3000);

var counter = 0;
var events = [
    {
        name: 'name',
        end: '2021-01-01',
        url: 'http://www.saaremaamuuseum.ee/wp-content/uploads/2021/03/saksa-kevad.jpg',
    },
    {
        name: 'name',
        end: '2021-01-01',
        url: 'https://concert.ee/static/EK_kodukale_SOP2021_yld.png',
    }

];

function newSlideShow() {

    var event = events[counter];

    if (event.end > Date()) {

    }

    document.getElementById("new-event")
        .innerHTML = '<img src="' + events[counter] + '">';
    counter++;

    if (counter >= events.length) {
        //clearInterval(sliderInterval);
        counter = 0;
    }
}
