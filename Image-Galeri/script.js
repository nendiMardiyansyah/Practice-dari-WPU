const container = document.getElementsByClassName('container')[0];
const imgJumbo = container.querySelector('.jumbo');
const thumbs = container.querySelectorAll('.thumb');

container.addEventListener("click", function(ev){
  if(ev.target.className == "thumb"){
    imgJumbo.src = ev.target.src;
    imgJumbo.classList.add("fade");
    setTimeout(function() {
      imgJumbo.classList.remove("fade");
    }, 500);
    
    thumbs.forEach(function(thumb){
      // if(thumb.classList.contains("active")) {
      //   thumb.classList.remove("active");
      // };
      // thumb.setAttribute("class", "thumb");
        thumb.className = "thumb";
    });
    ev.target.classList.add('active');
  };
});
