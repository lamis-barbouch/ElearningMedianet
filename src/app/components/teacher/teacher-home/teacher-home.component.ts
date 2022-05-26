import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormationService } from 'src/app/_services/formation.service';
import { Formation } from 'src/models/formation';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from 'src/app/dialog-example/dialog-example.component';
import { GestionFormationsComponent } from 'src/app/gestion-formations/gestion-formations.component';
import { AjouterFormationComponent } from 'src/app/ajouter-formation/ajouter-formation.component';
import { Reclam } from 'src/models/reclam';
import { ReclamServiceService } from 'src/app/_services/reclam-service.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { UserAuthService } from 'src/app/_services/user-auth.service';



@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.css']
})
export class TeacherHomeComponent implements OnInit {

  reclams:Observable<Reclam[]>;
  
  formations: Observable<Formation[]>;
  cin=6;

  submitted = false;
 reclam :Reclam= new Reclam();
 showMsg: boolean = false;


  constructor(public reclService:ReclamServiceService, 
    public dialog:MatDialog,private formationService:FormationService,
    private router:Router,private userAuthService: UserAuthService) { }

  
  public Editor = ClassicEditor;

  newFormation():void{
    this.submitted=false;
    this.reclam=new Reclam();
  }
  
  save() {
    this.reclService.createReclam(this.reclam).subscribe(data => {
      console.log(data)
      this.showMsg= true;
      this.reclam=new Reclam();
    }, 
    error => console.log(error));
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }



  openDialog(){
    this.dialog.open(DialogExampleComponent);
  }
  openDialog1(){
    this.dialog.open(GestionFormationsComponent);
  }
  openDialog2(){
    this.dialog.open(AjouterFormationComponent);
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

