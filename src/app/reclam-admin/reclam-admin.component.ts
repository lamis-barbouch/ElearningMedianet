import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Reclam } from 'src/models/reclam';
import { ReponseReclamComponent } from '../reponse-reclam/reponse-reclam.component';
import { ReclamServiceService } from '../_services/reclam-service.service';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-reclam-admin',
  templateUrl: './reclam-admin.component.html',
  styleUrls: ['./reclam-admin.component.css']
})
export class ReclamAdminComponent implements OnInit {

  reclams:Observable<Reclam[]>;

  constructor(public dialog:MatDialog,private reclamService:ReclamServiceService,
    private router:Router,private userAuthService: UserAuthService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.reclams=this.reclamService.getReclamationsList();
  }
  
  openDialog(){
    this.dialog.open(ReponseReclamComponent);
  }

  public logout(){
    localStorage.clear();
    this.userAuthService.clear();
    
    this.router.navigate(['/']);
  
   }

}
