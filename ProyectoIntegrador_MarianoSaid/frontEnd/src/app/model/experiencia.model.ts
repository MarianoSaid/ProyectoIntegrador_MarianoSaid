export class Experiencia{
    idExp?: number;
    empresaExp: string;
    posicionExp: string;
    startExp: string;
    endExp: string;
    tiempoExp: string;
    modoExp: string;
    desExp: string;

    constructor(empresaExp: string, posicionExp: string, startExp: string, endExp: string, tiempoExp: string, modoExp: string, desExp: string){
        this.empresaExp = empresaExp;
        this.posicionExp = posicionExp;
        this.startExp = startExp;
        this.endExp = endExp;
        this.tiempoExp = tiempoExp;
        this.modoExp = modoExp;
        this.desExp = desExp;
    }
}