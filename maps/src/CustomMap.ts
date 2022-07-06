export interface Mappable {
  location: { lat: number; lng: number };
  showContent: () => string;
}

const mapDiv = document.querySelector('.mapRoot') as HTMLElement;

export class CustomMap {
  private map = google.maps.Map;

  constructor() {
    this.map = new google.maps.Map(mapDiv, {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  addMarker = (mapable: Mappable): void => {
    const marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: mapable.location.lat,
        lng: mapable.location.lng,
      },
    });
    marker.addListener('click', () => {
      const infowindow = new google.maps.InfoWindow({
        content: mapable.showContent(),
      });
      infowindow.open(this.map, marker);
    });
  };
}
