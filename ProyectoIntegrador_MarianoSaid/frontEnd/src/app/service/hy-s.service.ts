import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hys } from '../model/HyS.model';

@Injectable({
  providedIn: 'root'
})
export class HySService {
  URL = 'https://appmsbackend.herokuapp.com/HyS/';

  constructor(private http: HttpClient) { }

  public getHyS(): Observable<hys[]>{ 
    return this.http.get<hys[]>(`${this.URL}traer`);
}
}


