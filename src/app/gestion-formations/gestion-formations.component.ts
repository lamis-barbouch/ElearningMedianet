import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Formation } from 'src/models/formation';
import { User } from 'src/models/user';
import Swal from 'sweetalert2';
import { FormationService } from '../_services/formation.service';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-gestion-formations',
  templateUrl: './gestion-formations.component.html',
  styleUrls: ['./gestion-formations.component.css']
})
export class GestionFormationsComponent implements OnInit {

  formations: Observable<Formation[]>;
  submitted = false;
  formation:Formation = new Formation();
  showMsg: boolean = false;
  user:User;
users: Observable<User[]>;

  constructor(
    private userService:UserService,
    private userAuthService: UserAuthService,
    private router: Router,
    public formationService: FormationService) { }

  ngOnInit(): void {
    this.userService.getFormateursList().subscribe(
      (response: any) => {
        this.users = response;
      },
      
    );
     this.reloadData();
  }
  newFormation():void{
    this.submitted=false;
    this.formation=new Formation();
  }
  save() {
    this.formationService
    .createFormation(this.formation).subscribe(data => {
      console.log(data)
      this.showMsg= true;
      this.formation = new Formation();
    }, 
    error => console.log(error));
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  reloadData() {
    this.formations= this.formationService.getFormationsList();
  }
  deleteFormation(idFormation:number){
    this.formationService.deleteFormation(idFormation).subscribe(
      data => {
        console.log(data);
        this.reloadData();
        Swal.fire({
          icon:'success',
         title: "Formation Supprimée avec succés"
         } );
      },
     
      error => console.log(error));
}

public logout(){
  localStorage.clear();
  this.userAuthService.clear();
  
  this.router.navigate(['/']);

 }
    

}
