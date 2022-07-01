import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { footer } from '../model/footer.model';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  URL = 'http://localhost:8080/footer/';

  constructor(private http: HttpClient) { }
  
  public getFooter(): Observable<footer>{
    return this.http.get<footer>(this.URL+'traer/perfil');
   }
}
