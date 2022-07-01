export class experiencia{
    idExp?: number;
    empresaExp: String;
    posicionExp: String;
    startExp: String;
    endExp: String;
    tiempoExp: String;
    modoExp: String;
    imagenExp: String;
    desExp: String;

    constructor(empresaExp: String, posicionExp: String, startExp: String, endExp: String, tiempoExp: String, modoExp: String, imagenExp: String, desExp: String){
        this.empresaExp = empresaExp;
        this.posicionExp = posicionExp;
        this.startExp = startExp;
        this.endExp = endExp;
        this.tiempoExp = tiempoExp;
        this.modoExp = modoExp;
        this.imagenExp = imagenExp;
        this.desExp = desExp;
    }
}