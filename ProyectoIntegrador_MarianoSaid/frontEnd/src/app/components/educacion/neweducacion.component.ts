import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  tituloEdu: string = '';
  startEdu: string= '';
  endEdu: string= '';
  scoreEdu: string= '';
  desEdu: string= '';
      
  constructor(private educacionS: EducacionService, private router: Router) { }
 
  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Educacion(this.tituloEdu, this.startEdu, this.endEdu, this.scoreEdu, this.desEdu);
    this.educacionS.save(educacion).subscribe(
      data => {
        alert ("Educación añadida");
        this.router.navigate(['']);
      }, err => {
        alert ("Falló");
      this.router.navigate(['']);
      }
    )
  }

}

