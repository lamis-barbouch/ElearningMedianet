import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from 'src/app/_services/formation.service';
import { UserAuthService } from 'src/app/_services/user-auth.service';
import { Formation } from 'src/models/formation';
import { User } from 'src/models/user';

@Component({
  selector: 'app-details-formations',
  templateUrl: './details-formations.component.html',
  styleUrls: ['./details-formations.component.css']
})
export class DetailsFormationsComponent implements OnInit {
  idFormation:number;
  formation:Formation;
  user:User;
  cinUser:number;
  value:null;
  constructor(private route: ActivatedRoute,private router: Router,
    private formationService:FormationService,private userAuthService: UserAuthService,) { }
  
public logout(){
  localStorage.clear();
  this.userAuthService.clear();
  
  this.router.navigate(['/']);

 }

    ngOnInit(){
      this.formation=new Formation();
  
      this.idFormation=this.route.snapshot.params['idFormation'];
      this.cinUser=6;
      this.formationService.getFormationDetail(this.idFormation).subscribe(data => {
        console.log(data)
        this.formation = data;
      }, error => console.log(error));

     
    }
    getFormationDetail(idFormation:number){
      this.router.navigate(['getFormationDetail',Formation])
    }

    participer(){
      this.gotoSuccessPage();
      this.formationService.participer(this.cinUser,this.idFormation,this.value).subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error)
      );
      
      
    }
  gotoSuccessPage() {
    this.router.navigate(['/succesParticipeFormation']);
  }
}
