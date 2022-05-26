import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Formation } from 'src/models/formation';
import { User } from 'src/models/user';
import Swal from 'sweetalert2';
import { FormationService } from '../_services/formation.service';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-ajouter-formation',
  templateUrl: './ajouter-formation.component.html',
  styleUrls: ['./ajouter-formation.component.css']
})
export class AjouterFormationComponent implements OnInit {
  formations: Observable<Formation[]>;
  submitted = false;
  formation:Formation = new Formation();
  showMsg: boolean = false;

  constructor(private userAuthService: UserAuthService,
    private router: Router,
    public formationService: FormationService) { }

  ngOnInit(): void {
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
      Swal.fire({
        icon:'success',
       title: "Formation ajouté avec succés"
       } );
    }, 
    error => console.log(error));
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }

}
