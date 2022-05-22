import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles (roles:[]){
    localStorage.setItem("roles",JSON.stringify(roles)) ;
  }
  public getRoles(): [] {
    return JSON.parse(localStorage.getItem('roles') || '{}');
  }
  
  
  public setToken(jwtToken:string){
    localStorage.setItem('jwtToken', jwtToken);
  }

  public setRoleName(role:string){
    localStorage.setItem("role",role);
  }

  public getRoleName():string {
    return localStorage.getItem('role')|| '{}';
  }

  public isLoggedIn(){
    let token =localStorage.getItem('jwtToken');
    if (token == undefined || token === '' || token == null) {
      return false;
    } else {
      return true;
    }
    
  }
  public getToken (): string {
    return localStorage.getItem('jwtToken')|| '{}';
  }

  public clear (){
    localStorage.clear();
  }
 
    
  }

  

