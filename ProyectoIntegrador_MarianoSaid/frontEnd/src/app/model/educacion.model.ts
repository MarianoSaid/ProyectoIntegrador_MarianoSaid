export class educacion{
    idEdu?: number;
    tituloEdu: String;
    startEdu: String;
    endEdu: String;
    scoreEdu: String;
    imagenEdu: String;
    desEdu: String;

    constructor(tituloEdu: String, startEdu: String, endEdu: String, scoreEdu: String, imagenEdu: String, desEdu: String){
        this.tituloEdu = tituloEdu;
        this.startEdu = startEdu;
        this.endEdu = endEdu;
        this.scoreEdu = scoreEdu;
        this.imagenEdu = imagenEdu;
        this.desEdu = desEdu;
    }
}