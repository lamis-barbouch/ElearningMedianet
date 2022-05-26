import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/_services/user-auth.service';
import { UserService } from 'src/app/_services/user.service';
import Swal from 'sweetalert2';

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
        const actif=response.user.isEnabled;
        console.log(actif);

       const role= response.user.role[0];
       console.log(token);

      this.userAuthService.setToken(token);
      this.userAuthService.setRoles(role);
      this.userAuthService.setRoleName(role.roleNom);

       if(role.roleNom === 'Admin'){
        this.router.navigate(['/admin']);
       }
       else if (role.roleNom === 'Formateur') {
         this.router.navigate(['/formateur']);
       }
       else {
         if(actif==1)
         {this.router.navigate(['/student/home']);}
         else{
          Swal.fire({
            icon:'warning',
           title: "Le nom utilisateur ou le mot de passe que vous avez saisi est pas associé(e) à un compte."
           } );
         }

       }
      },
      (error: any) => {
        Swal.fire({
          icon:'warning',
          title:'Mot de passe ou nom utilisateur erroné',
         
      });
        console.log(error);
      }
    );
  }


  

  

}
