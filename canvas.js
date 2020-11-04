class Canvas{
    constructor(reservation){
        this.started = false;
        this.ctx;
        this.touches;
        this.reservation = reservation;
    }


    Verif(){
        this.canvas = document.getElementById("signature");
        if (this.canvas.getContext){
            this.ctx = this.canvas.getContext("2d");
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.Signature();
            document.getElementById("canvas").style.display = "block";
        }
        else{
            alert("Votre navigateur n'est pas compatible avec la signature numérique");
        }
    }

    Signature(){
        this.canvas.addEventListener("mousedown", function() {this.DepartCurseur()}.bind(this));
        this.canvas.addEventListener("mousemove", function() {this.DeplacementCurseur()}.bind(this));
        this.canvas.addEventListener("mouseup", function() {this.FinCurseur()}.bind(this)); 
        this.canvas.addEventListener("touchstart", function() {this.DepartDoigt()}.bind(this));
        this.canvas.addEventListener("touchmove", function() {this.DeplacementDoigt()}.bind(this));
        this.canvas.addEventListener("touchend", function() {this.FinDoigt()}.bind(this));
    }
    
    DepartCurseur(){
        this.ctx.beginPath();
        var pos = this.PositionCurseur();
        this.ctx.moveTo(pos.x, pos.y);
        this.started = true; 
    }

    PositionCurseur(){
        var rect = this.canvas.getBoundingClientRect();
            var position = {
                x : event.clientX - rect.left,
                y : event.clientY - rect.top
            }
            return position;
    }

    DeplacementCurseur(){
        if (this.started == true){
            var pos = this.PositionCurseur();
            this.ctx.lineTo(pos.x, pos.y);
            this.ctx.stroke();
        }
    }

    FinCurseur(){
        this.started = false;
        document.getElementById("validCanvas").addEventListener("click", function(){this.reservation.Init(), document.getElementById("canvas").style.display = "none";}.bind(this));
    }

    DepartDoigt(){
        this.ctx.beginPath();
        var pos = this.PositionDoigt();
        this.ctx.moveTo(pos.x, pos.y);
        this.started = true;
        event.preventDefault();
    }

    PositionDoigt(){
        var rect = this.canvas.getBoundingClientRect();
        var position = {
            x: event.touches[0].clientX - rect.left,
            y: event.touches[0].clientY - rect.top
        }
        return position;
    }

    DeplacementDoigt(){
        if (this.started == true){
            var pos = this.PositionDoigt();
            this.ctx.lineTo(pos.x, pos.y);
            this.ctx.stroke();
            event.preventDefault();
        }
    }

    FinDoigt(){
        this.started = false;
        document.getElementById("validCanvas").addEventListener("click", function(){this.reservation.Init(), document.getElementById("canvas").style.display = "none";}.bind(this));
    }

}