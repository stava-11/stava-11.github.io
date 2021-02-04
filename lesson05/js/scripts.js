function toggleMenu() {
    document.getElementById('menuOptions').classList.toggle('hide');
}

var dayOfWeek = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var monthOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var d = new Date();
var n = d.getDay()
var dayOfMonth = d.getDate()
var month = d.getMonth() + 1
var year = d.getFullYear()
 var day = dayOfWeek[n]
// console.log(day + ', ' + dayOfMonth + ' ' + monthOfYear[month-1] + ' ' + year + '.')
document.getElementById('date').innerHTML = (day + ', ' + dayOfMonth + ' ' + monthOfYear[month-1] + ' ' + year + '.');

function showNotice(day) {
    if (day === 'Friday') {
        document.getElementById('noticeAlert').className = 'noticeAlert';
    }
    else {
        document.getElementById('noticeAlert').classList.remove('noticeAlert');
        document.getElementById('noticeAlert').className = 'noticeHide';
    }
}

showNotice(day);