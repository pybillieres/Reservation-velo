class Map{
    constructor(position, latitude, longitude, source, form){
        this.position = position; 
        this.latitude = latitude; 
        this.longitude = longitude;
        this.source = source;
        this.form = form;
        this.Init();
        this.carte;
    }

    Init(){
        this.AffichageCarte();
        this.AffichageMarqueur();
    }

    AffichageCarte(){
        this.carte = L.map(this.position, {dragging : !L.Browser.mobile}).setView([this.latitude, this.longitude],13);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.carte);

    }

    AffichageMarqueur(){
        ajaxGet(this.source, function(response){
            var stations = JSON.parse(response);
            console.log(stations);
            stations.forEach(function(station){
                if (window.screen.width < 850){
                var myMarker = L.icon({iconUrl : 'leaflet/images/marker-icon-2x.png', iconSize : [50, 82]});
                }
                else{
                    var myMarker = L.icon({iconUrl : 'leaflet/images/marker-icon-2x.png', iconSize : [25, 41]});  
                }
                var marker = L.marker([station.position.lat, station.position.lng], {icon: myMarker});
                marker.addTo(this.carte);
                marker.addEventListener("click", function () {
                    this.form.Init(station.address, station.available_bikes, station.available_bike_stands, station.name);       
                }.bind(this));
            }.bind(this));
        }.bind(this));
    }
}