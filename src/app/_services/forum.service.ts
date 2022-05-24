import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forum } from 'src/models/forum';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private baseUrl='http://localhost:8084/viewAllSubject';
  private baseUrl2='http://localhost:8084/addSubject';

  private baseUrl3='http://localhost:8084/displayBestSubjectsByComments';


  private baseUrl6='http://localhost:8084/displayBestSubjectByrating';

forum:Forum;

  constructor(private http: HttpClient) { }

  getSubjectList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  createSubject(forum :Object): Observable<Object> {
    return this.http.post(`${this.baseUrl2}`,forum);
  }


  displayBestSubjectsByComments():Observable<any>{
    return this.http.get(`${this.baseUrl3}`);
  }

  displayBestSubjectByrating():Observable<any>{
    return this.http.get(`${this.baseUrl6}`);
  }


}
