import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclam } from 'src/models/reclam';

@Injectable({
  providedIn: 'root'
})
export class ReclamServiceService {

  private baseUrl='http://localhost:8084/reclamsLists';
  private baseUrl2='http://localhost:8084/addReclam';
  private baseUrl3='http://localhost:8084/repondreclam';


  reclam:Reclam;

  constructor(private http: HttpClient) { }

  repondre(id:number, reponse:string): Observable<any> {
    return this.http.put(`${this.baseUrl3}/${id}`, reponse);
  }

  createReclam(reclam: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl2}`,reclam);
  }

  getReclamationsList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

}
