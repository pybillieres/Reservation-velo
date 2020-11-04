class Reservation {
    constructor(dureeMax){
        this.dateDebut;
        this.dateActuelle;
        this.difference = 0;
        this.dureeMax = dureeMax * 60;
        this.inter;
        this.timer = 1000;
        this.statut = false;
        this.dateFin;
    }

    Init(){
        this.dateDebut = Math.floor(Date.now() /1000);
        this.dateFin = this.dateDebut + this.dureeMax;
        sessionStorage.setItem("debut", this.dateDebut);
        this.statut = true;
        this.Timer();  
        this.AffichageNom();
    }

    Timer(){

        this.inter = setInterval(function(){
            this.Comparaison();
            this.Compteur();
        }.bind(this)
            , this.timer);
    }

    Comparaison(){
            this.dateActuelle = Math.floor(Date.now() /1000);
            this.difference = this.dateActuelle - this.dateDebut;
        if(this.difference < this.dureeMax){
            this.statut = true;
        }
        else{
            this.statut = false;
            clearInterval(this.inter);
            this.AffichageNom();

        }
    }

    Check(){
        if(sessionStorage.getItem("debut")){
            this.dateDebut = parseInt(sessionStorage.getItem("debut"));
            this.dateFin = this.dateDebut + this.dureeMax;
            this.Comparaison();
            this.Timer();
            this.AffichageNom();
        }
    }

    Compteur(){
        this.tpsRestantSec = this.dateFin - this.dateActuelle;
        if(this.tpsRestantSec > 0){
        this.compteRebour = {};
        this.compteRebour.minutes = Math.floor(this.tpsRestantSec / 60);
        this.compteRebour.secondes = this.tpsRestantSec - (this.compteRebour.minutes * 60);
        document.getElementById("tps_resa").innerHTML = this.compteRebour.minutes + " minutes " + this.compteRebour.secondes + " secondes restant";
        }
        else{
            document.getElementById("tps_resa").innerHTML = "";
        }
    }

    AffichageNom(){
        if(this.statut == true)
        {
        var station = sessionStorage.getItem("nomStation");
        var nom = localStorage.getItem("nom");
        var prenom = localStorage.getItem("prenom");
        document.getElementById("info_resa").innerHTML = "Vélo réservé à la station " + station + " par " + prenom + " " + nom;
        }
        else
        {
            document.getElementById("info_resa").innerHTML = "Pas de réservation en cours";
        }
    }
}