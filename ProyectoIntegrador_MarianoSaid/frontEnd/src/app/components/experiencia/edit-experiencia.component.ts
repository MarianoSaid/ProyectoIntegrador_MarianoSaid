import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab: Experiencia = null;

  constructor(private experienciaService: ExperienciaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.detail(id).subscribe(
      data =>{
        this.expLab = data;
      }
    )
  }
  
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['']);
      }
    )
  }

}


//, err =>{
//  alert("Error al modificar experiencia");
//  this.router.navigate(['']);
// )