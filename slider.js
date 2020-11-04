class Slider {
    constructor (duree, slideList) {
        this.timer = duree;
        this.slideList = slideList;
        this.index = 0;
        this.indexPrec;
        this.indexSuiv;
        this.inter = "";
        this.timerStatut = true;
        this.Init();
    }

Init() {
    this.indexPrec = this.slideList.length -1;
    this.indexSuiv = this.index + 1;
    document.getElementById("next").addEventListener("click", function() {this.Suivant(); this.Affichage()}.bind(this));
    document.getElementById("previous").addEventListener("click", function() {this.Precedent(); this.Affichage()}.bind(this));
    document.getElementById("pause").addEventListener("click", function() {this.BoutonPause()}.bind(this));
    document.addEventListener("keydown", function (e) {
        if(e.keyCode === 37){
             this.Precedent();
             this.Affichage();
            }
        else if(e.keyCode === 39){
            this.Suivant();
            this.Affichage();
        }
        else if(e.keyCode === 32){
            this.BoutonPause();
        }      
    }.bind(this));
    this.Affichage();
    this.Play();
}

Play(){
    this.inter = setInterval(function(){
        this.Suivant();
        this.Affichage();
        this.timerStatut = true;
    }.bind(this)
        , this.timer);
}

Affichage() {
    document.getElementById("img_source").src = this.slideList[this.index].image;
    document.getElementById("texte").innerHTML = this.slideList[this.index].texte;
    document.getElementById("img_prec").src = this.slideList[this.indexPrec].image;
    document.getElementById("img_suiv").src = this.slideList[this.indexSuiv].image;
}

Suivant() {
    if (this.index == this.slideList.length -1) {
        this.index = 0;
    }
    else{
        this.index += 1;
    }
    if (this.indexPrec == this.slideList.length -1) {
        this.indexPrec = 0;
    }
    else{
        this.indexPrec += 1;
    }
    if (this.indexSuiv == this.slideList.length -1) {
        this.indexSuiv = 0;
    }
    else {
        this.indexSuiv += 1;
    }
}

Precedent() {
    if(this.index == 0) {
        this.index = this.slideList.length -1;
    }
    else{
        this.index -= 1;
    }
    if(this.indexPrec == 0) {
        this.indexPrec = this.slideList.length -1;
    }
    else{
        this.indexPrec -= 1;
    }
    if(this.indexSuiv == 0) {
        this.indexSuiv = this.slideList.length -1;
    }
    else {
        this.indexSuiv -= 1;
    }
}

BoutonPause(){
    if(this.timerStatut == true){
        this.timerStatut = false;
        this.Pause();
        document.getElementById("bouton_Pause").className = "fas fa-play";
    }
    else{
        this.timerStatut = true;
        this.Play();
        document.getElementById("bouton_Pause").className = "fas fa-pause-circle"; 
    }
}

Pause() {
    clearInterval(this.inter);
}
}
