import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://appmsbackend.herokuapp.com/personas/';


  constructor(private http: HttpClient) { }

  //obtener una persona
  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+'traer/perfil');
   }

   


}
 