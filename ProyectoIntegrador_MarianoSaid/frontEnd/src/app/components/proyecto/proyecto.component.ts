import { Component, OnInit } from '@angular/core';
import { proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectosList!: proyectos[];
  constructor(public proyectosService: ProyectosService) { }

  ngOnInit(): void {
    this.getdatosProyectos();
  }
  
  private getdatosProyectos(){
    this.proyectosService.getProyectos().subscribe((data)=>{this.proyectosList=data;
    console.log(data) 
    } 
    );   
}

}
