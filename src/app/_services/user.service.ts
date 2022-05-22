import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl1 = 'http://localhost:8084/register1';
  private baseUrl2 = 'http://localhost:8084/formateurs';
  user:User;

  
  PATH_OF_API="http://localhost:8084";
  requestHeader=new HttpHeaders(
    {"No-Auth":"True"}
  )
  http: any;
  constructor(private httpclient: HttpClient,private userAuthService: UserAuthService) { }
  public register(user:User):Observable<any> {
    return this.httpclient.post(`${this.baseUrl1}`,user);
  }
  public login (loginData : any){
    return this.httpclient.post(this.PATH_OF_API+"/authenticate", loginData,{ headers:this.requestHeader});
  }

  public roleMatch(allowedRoles: string | any[]): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
    return isMatch;
  }
  getFormateur(cinUser: number): Observable<any> {
    return this.httpclient.get(`${this.baseUrl2}/${cinUser}`);
  }

  createFormateur(user: Object): Observable<Object> {
    return this.httpclient.post(`${this.baseUrl2}`,user);
  }

  updateFormateur(cinUser: number, value: any): Observable<Object> {
    return this.httpclient.put(`${this.baseUrl2}/${cinUser}`, value);
  }

  deleteFormateur(cinUser: number): Observable<any> {
    return this.httpclient.delete(`${this.baseUrl2}/${cinUser}`, { responseType: 'text' });
  }

  getFormateursList(): Observable<any> {
    return this.httpclient.get(`${this.baseUrl2}`);
  }
}
