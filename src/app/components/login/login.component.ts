import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/_services/user-auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService,
    private userAuthService:UserAuthService,
    private router :Router ) { }

  ngOnInit(): void {}

  login(loginForm:NgForm ){
    this.userService.login(loginForm.value).subscribe(
      (response:any)=>{
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);
        
        
        const token=response.jwtToken;
        
       const role= response.user.role[0];
       console.log(token);

      this.userAuthService.setToken(token);
      this.userAuthService.setRoles(role);
      this.userAuthService.setRoleName(role.roleNom);

       if(role.roleNom === 'Admin'){
        this.router.navigate(['/admin']);
       }
       else {
         this.router.navigate(['/formateur']);
       }
      },
      (error)=>{
        console.log(error);
      }
    );
  }


  

  

}
