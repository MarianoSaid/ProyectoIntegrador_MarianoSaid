export class persona { 
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    titulo: String;
    acercaDeMi: String;

    constructor(nombre: String, apellido: String, img: String, titulo: String, acercaDeMi: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.titulo = titulo;
        this.acercaDeMi = acercaDeMi;
    }


}