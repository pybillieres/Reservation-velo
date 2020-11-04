class Formulaire{
    constructor(canvas, reservation){
        this.canvas = canvas;
        this.reservation = reservation;
    }

Check(){
    if(localStorage.getItem("nom") || localStorage.getItem("prenom")){
        document.getElementById("form_prenom").value = localStorage.getItem("prenom");
        document.getElementById("form_nom").value = localStorage.getItem("nom");
    }
}

Init(adresse, veloDispo, placeDispo, nomStation){
    this.adresse = adresse;
    this.veloDispo = veloDispo;
    this.placeDispo = placeDispo;
    this.nomStation = nomStation;
    this.AffichageInfoStation()
    if(this.veloDispo > 0){
    document.getElementById("reserver").addEventListener("click", function(){this.Reserver()}.bind(this));
    }
}

AffichageInfoStation(){
    document.getElementById("adresse_station").innerHTML =this.adresse;
    document.getElementById("place_station").innerHTML = this.placeDispo + " places";
    document.getElementById("velo_dispo").innerHTML = this.veloDispo + " vélos disponibles";
}

Reserver(){
    if(document.getElementById("form_nom").value.length == 0 || document.getElementById("form_prenom").value.length == 0)
        {
            alert("Remplissez tous les champs du formulaire puis réessayez");
        }
    else if(document.getElementById("form_nom").value.length == 0 && document.getElementById("form_prenom").value.length == 0)
        {
            alert("Remplissez tous les champs du formulaire puis réessayez");
        }
    else if(this.reservation.statut == true)
        {
            if ( confirm( "Réservation déjà en cours, cliquez sur ok pour la remplacer ou sur annuler pour conserver celle en cours" ) ) {
                this.StockageNomAdresse();
                this.canvas.Verif();
            }          
        }
    else
        {
            this.StockageNomAdresse();
            this.canvas.Verif();
        }
}

StockageNomAdresse(){
    localStorage.setItem("nom", document.getElementById("form_nom").value);
    localStorage.setItem("prenom", document.getElementById("form_prenom").value);
    sessionStorage.setItem("adresseStation", this.adresse);
    sessionStorage.setItem("nomStation", this.nomStation);
}

}
