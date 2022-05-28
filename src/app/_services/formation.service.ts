import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private baseUrl='http://localhost:8084/formationLists';
  private baseUrl2='http://localhost:8084/participerFormation';
  private baseUrl3='http://localhost:8084/findbyIdFormation';
  private baseUrl5='http://localhost:8084/getAllNotSeenNotif';
  private baseUrl6='http://localhost:8084/seenNotif';

  private baseUrl7='http://localhost:8084/addFormation';
  private baseUrl8='http://localhost:8084/formationLists';
  private baseUrl9='http://localhost:8084/deleteFormation';
  private baseUrl10='http://localhost:8084/affecterFormateurAFormation';
  


  user:User;
  notif:Notification;

  constructor(private http: HttpClient) { }

  affecter(idFormateur:number,idFormation:number,value: any){
  return this.http.post(`${this.baseUrl10}/${idFormateur}/${idFormation}`,value);}

  getAllNotSeenNotif(cinUser:number):Observable<any>{
    return this.http.get(`${this.baseUrl5}/${cinUser}`);}
  
  
  seenNotif(idNotif:number):Observable<any>{
    return this.http.get(`${this.baseUrl6}/${idNotif}`);}
  


  getFormationsList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

 participer(cinUser:number,idFormation:number,value: any){
    return this.http.post(`${this.baseUrl2}/${cinUser}/${idFormation}`,value);}
    
  
  getFormationDetail(id:number): Observable<any> {
    return this.http.get(`${this.baseUrl3}/${id}`);}

  
 
  createFormation(formation: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl7}`,formation);
  }


  deleteFormation(idFormation: number): Observable<any> {
    return this.http.delete(`${this.baseUrl9}/${idFormation}`, { responseType: 'text' });
  }

}


