const findMe = () => {
    navigator.geolocation.getCurrentPosition((Myplaces)=>{
      let information = Myplaces.coords;
      locationLatitude = Math.round(information.latitude);
      locationLongitude = Math.round(information.longitude);
      display.innerHTML = `<h3>your location is : ${locationLatitude}N and ${locationLongitude}E</h3>`
    })
  }