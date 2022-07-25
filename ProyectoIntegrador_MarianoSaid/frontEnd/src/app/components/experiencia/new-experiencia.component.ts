import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  empresaExp: string = '';
  posicionExp: string= '';
  startExp: string= '';
  endExp: string= '';
  tiempoExp: string= '';
  modoExp: string= '';
  imagenExp: string= '';
  desExp: string = '';
      
  constructor(private experienciaService: ExperienciaService, private router: Router) { }
 
  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Experiencia(this.empresaExp, this.posicionExp, this.startExp, this.endExp, this.tiempoExp, this.modoExp, this.imagenExp, this.desExp);
    this.experienciaService.save(expe).subscribe(
      data => {
        alert ("Experiencia añadida");
        this.router.navigate(['']);
      }
    
    )
  }

}

//, err => {
//  alert ("Falló");
// this.router.navigate(['']);
//}