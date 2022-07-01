import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaList!:experiencia[];
  
  constructor(public experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.getdatosExperiencia();
  }
  private getdatosExperiencia(){
    this.experienciaService.getExperiencia().subscribe((data)=>{this.experienciaList=data;
    console.log(data)
    } 
    );   
}
}