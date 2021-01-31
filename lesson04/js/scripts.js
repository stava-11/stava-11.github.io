function toggleMenu() {
    document.getElementById('menuOptions').classList.toggle('hide');
}

var dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
var monthOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var d = new Date();
var n = d.getDay()
var dayOfMonth = d.getDate()
var month = d.getMonth() + 1
var year = d.getFullYear()
 var day = dayOfWeek[n-1]
// console.log(day + ', ' + dayOfMonth + ' ' + monthOfYear[month-1] + ' ' + year + '.')
document.getElementById('date').innerHTML = (day + ', ' + dayOfMonth + ' ' + monthOfYear[month-1] + ' ' + year + '.');
