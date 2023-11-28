function iniciarMap() {
  var coord = { lat: 20.7021292, lng: -103.4608774 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map,
    title: "Nuestras Instalaciones"
  });
}

function findMe() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var userCoord = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        updateMap(userCoord);
      },
      function(error) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert('Error: Permiso denegado para obtener la ubicación.');
            break;
          case error.POSITION_UNAVAILABLE:
            alert('Error: Información de ubicación no disponible.');
            break;
          case error.TIMEOUT:
            alert('Error: Se ha agotado el tiempo de espera para obtener la ubicación.');
            break;
          case error.UNKNOWN_ERROR:
            alert('Error: Ocurrió un error desconocido al obtener la ubicación.');
            break;
        }
      }
    );
  } else {
    alert('Error: Tu navegador no soporta la geolocalización.');
  }
}

function updateMap(userCoord) {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: userCoord
  });
  var marker = new google.maps.Marker({
    position: userCoord,
    map: map,
    title: "Tu Ubicación"
  });

  var ourFacilityCoord = { lat: 20.7021292, lng: -103.4608774 };
  var ourFacilityMarker = new google.maps.Marker({
    position: ourFacilityCoord,
    map: map,
    title: "Nuestras Instalaciones"
  });
}