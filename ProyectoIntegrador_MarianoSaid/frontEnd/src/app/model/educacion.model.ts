export class Educacion{
    idEdu?: number;
    tituloEdu: string;
    startEdu: string;
    endEdu: string;
    scoreEdu: string;
    desEdu: string;
    
    constructor(tituloEdu: string, startEdu: string, endEdu: string, scoreEdu: string, desEdu: string){
        this.tituloEdu = tituloEdu;
        this.startEdu = startEdu;
        this.endEdu = endEdu;
        this.scoreEdu = scoreEdu;
        this.desEdu = desEdu;
    }
}