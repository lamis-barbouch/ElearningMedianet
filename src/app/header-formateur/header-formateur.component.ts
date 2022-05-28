import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormationService } from '../_services/formation.service';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-header-formateur',
  templateUrl: './header-formateur.component.html',
  styleUrls: ['./header-formateur.component.css']
})
export class HeaderFormateurComponent implements OnInit {

  notifications:Observable<Notification[]>;
  cinUser:number;
  i:number;
  
  
    constructor(private formationService:FormationService,private router:Router,private userAuthService: UserAuthService) { }
  
    ngOnInit(): void {
      this.cinUser=165;
      this.reloadData();
    }
    
    public logout(){
      localStorage.clear();
      this.userAuthService.clear();
      
      this.router.navigate(['/']);
    
     }
    
  
    getAllNotSeenNotif(cinUser:number){
      this.cinUser=165;
      this.formationService.getAllNotSeenNotif(this.cinUser);
    }
  
    reloadData() {
     this.notifications=this.formationService.getAllNotSeenNotif(this.cinUser);
    }
  
    seen(idNotif:number){
      this.formationService.seenNotif(idNotif).subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
    }
  }
  