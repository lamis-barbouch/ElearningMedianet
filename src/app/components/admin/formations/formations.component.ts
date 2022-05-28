import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormationService } from 'src/app/_services/formation.service';
import { Formation } from 'src/models/formation';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from 'src/app/dialog-example/dialog-example.component';
import { GestionFormationsComponent } from 'src/app/gestion-formations/gestion-formations.component';
import { AjouterFormationComponent } from 'src/app/ajouter-formation/ajouter-formation.component';
import { UserAuthService } from 'src/app/_services/user-auth.service';
import { AffecterFormateurComponent } from 'src/app/affecter-formateur/affecter-formateur.component';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  formations: Observable<Formation[]>;
  cin=6;
  constructor(public dialog:MatDialog,private formationService:FormationService,
    private router:Router,private userAuthService: UserAuthService) { }

  openDialog(){
    this.dialog.open(DialogExampleComponent);
  }
  openDialog1(){
    this.dialog.open(GestionFormationsComponent);
  }
  openDialog2(){
    this.dialog.open(AjouterFormationComponent);
  }

  openDialog5(){
    this.dialog.open(AffecterFormateurComponent);
  }
  
  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.formations=this.formationService.getFormationsList();
  }

  
  getFormationDetail(idFormation:number){
    this.router.navigate(['detailFormation',idFormation])
  }

  
public logout(){
  localStorage.clear();
  this.userAuthService.clear();
  
  this.router.navigate(['/']);

 }
}
