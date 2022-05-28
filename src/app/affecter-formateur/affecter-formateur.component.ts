import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';
import Swal from 'sweetalert2';
import { FormationService } from '../_services/formation.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-affecter-formateur',
  templateUrl: './affecter-formateur.component.html',
  styleUrls: ['./affecter-formateur.component.css']
})
export class AffecterFormateurComponent implements OnInit {
  public user = {
    cinUser:'',
    nomUser:'',
    prenomUser:'',
  }
  public users=[];

  constructor(private userService:UserService,private formationService:FormationService,   private snackBar: MatSnackBar,
    ) { }

idFormateur=165;
idFormation=1;
value:any;

Submit(){
  this.formationService.affecter(this.idFormateur,this.idFormation,this.value).subscribe(data => {
    console.log(data)
    Swal.fire({
      icon:'success',
     title: "Formateur ajouté avec succés"
     } );
  }, 
  error => console.log(error));
}
  ngOnInit() {
    this.userService.getFormateursList().subscribe(
      (response: any) => {
        this.users = response;
      },
      (error: any) => {
      
        console.log(error);
      }
    );
  }
 
}
