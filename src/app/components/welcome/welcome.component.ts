import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/_services/user-auth.service';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/models/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  submitted = false;
  user:User=new User();
  showMsg: boolean = false;

  constructor(
    private userService: UserService,
    private userAuthService:UserAuthService,
    private router :Router ) { }

    
  ngOnInit(): void {}

  newUser():void{
    this.submitted=true;
    this.user=new User();
  }
  save() {
    this.userService.register(this.user).subscribe(data => {
      console.log(data)
      this.showMsg= true;
      this.user=new User();
    }, 
    error => console.log(error));
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
    Swal.fire({
      icon: 'success',
      title:"Inscription réalisée avec succés, Veuillez activer votre compte en cliquant sur le lien envoyé par Email ",
     } );
  }

  login(loginForm:NgForm ){
    this.userService.login(loginForm.value).subscribe(
      (response:any)=>{
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);
        
        
        const token=response.jwtToken;
        const actif=response.user.isEnabled;
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
          title: "Votre Compte n'est pas encore activée"
          } );
        }

      }
      },
      (error: any) => {
        Swal.fire({
          icon:'warning',
          title:'Le nom utilisateur ou le mot de passe que vous avez saisi est pas associé(e) à un compte.',
         
      });
        console.log(error);
      }
    );
  }


  

  

}
