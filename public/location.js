console.log("location function started");
function location2() {
  var x = document.getElementById("demo");
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  getLocation();

  function showPosition(position) {
    console.log(position);
  }
 
}
 location2();
