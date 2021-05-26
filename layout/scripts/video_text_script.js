var video = document.querySelector('video'),
    link = document.querySelector('h2');

setInterval(function() {
  if (video.currentTime < 3) {
    link.style.display = 'block';
  }
  else {
    link.style.display = 'none';
  }
  
}, 100);

