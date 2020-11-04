document.addEventListener('DOMContentLoaded', function(){
    var slide1 = new Slide ("img/slide1.jpg", "Selectionnez sur la carte le marqueur bleu correspondant à station où vous souhaitez réserver votre vélo");
    var slide2 = new Slide ("img/slide2.jpg", "Les information concernant la station s'affiche dans le cadre ici entouré de rouge");
    var slide3 = new Slide ("img/slide3.jpg", "Remplissez les champs nom et prénom");
    var slide4 = new Slide ("img/slide4.jpg", "Cliquez sur le bouton 'Réserver' une fois les champs renseignés ");
    var slide5 = new Slide("img/slide5.jpg", "Tracer votre signature dans le rectange qui s'affiche alors et cliquez sur \"valider la réservation\"");
    var slide6 = new Slide("img/slide6.jpg", "Les informations de réservation s'affiche au bas de la page");
    var slider = [slide1, slide2, slide3, slide4, slide5, slide6];
    var mySlider = new Slider ("5000", slider);
    var myReservation = new Reservation ("20");
    myReservation.Check();
    var myCanvas = new Canvas (myReservation);
    var myForm = new Formulaire (myCanvas, myReservation);
    myForm.Check();
    var myMap = new Map ("carte", "47.2169", "-1.5519", "https://api.jcdecaux.com/vls/v1/stations?contract=nantes&apiKey=dfbcf94f303349711690926cc2b1926ddc4acbcd", myForm)
});