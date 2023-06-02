function App() {}
  
  window.onload = function(event) {
    var app = new App();
    window.app = app;
  }

    App.prototype.processingButton = function(event) {
      const carruselList = event.currentTarget.parentNode;
      const track = event.currentTarget.parentNode.querySelector("#track");
      const carrusel = track.querySelectorAll(".carrusel");

      const carruselWidth = carrusel[0].offsetWidth;

      const trackWidth = track.offsetWidth;
      const listWidth = carruselList.offsetWidth;

      track.style.left=="" ? leftPosition = track.style.left=0 : lefPosition = parseFloat(track.style.left.slice(0,-2)* -1);
      btn.dataset.button == "button-prev" ? prevAction(leftPosition,carruselWidth, track) : nexAction(lefPosition,trackWidth, listWidth, carruselWidth, track);
}

let prevAction = (leftPosition, carouselWidth, track)=> {
    if (leftPosition>0){
        track.style.left= `-${leftPosition - carouselWidth}px`;
    }
}
let nexAction = (leftPosition, trackWidth, listWidth, carouselWidth, track)=> {
    if (leftPosition<(trackWidth-listWidth)){
        track.style.left= `-${leftPosition + carouselWidth}px`;
    }
}