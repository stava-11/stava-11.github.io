  
// select desired query selector
let imagesToLoad = document.querySelectorAll('img[data-src]');

// swap data-src with src
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

//set options
const options = {
  threshold: 0,
  rootMargin: "10px 10px 10px 10px"
};

// load image as user scrolls over image
if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, options);
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

// set date in footer
var dayOfWeek = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var monthOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var d = new Date();
var n = d.getDay();
var dayOfMonth = d.getDate();
var month = d.getMonth() + 1;
var year = d.getFullYear();
var day = dayOfWeek[n];
// console.log(day + ', ' + dayOfMonth + ' ' + monthOfYear[month-1] + ' ' + year + '.')
document.getElementById('lastUpdate').innerHTML = (day + ', ' + dayOfMonth + ' ' + monthOfYear[month-1] + ' ' + year + '.');
document.getElementById('year').innerHTML = year;