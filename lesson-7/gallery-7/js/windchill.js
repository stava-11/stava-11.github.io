
var t = parseInt(document.getElementById("temp").innerHTML);
console.log(t);
var s = parseInt(document.getElementById("wind").innerHTML);
console.log(s);

var windChill;
if (t <= 50 && s > 3) {
    windChill = Math.round(35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (0.4275 * t * (s ** 0.16))) + "&#176;";
    
} else {
    windChill = "N/A";
}
console.log(windChill);
document.getElementById("windChill").innerHTML = windChill;