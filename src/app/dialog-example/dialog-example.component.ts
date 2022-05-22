import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from 'src/app/_services/formation.service';
import { Formation } from 'src/models/formation';
import { User } from 'src/models/user';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {

  
  idFormation:number;
  formation:Formation;
  user:User;
  cinUser:number;
  value:null;

  constructor(private route: ActivatedRoute,private router: Router,
    private formationService:FormationService) { }

    ngOnInit(){
      this.formation=new Formation();
  
      this.idFormation=1;
      this.cinUser=6;
      this.formationService.getFormationDetail(this.idFormation).subscribe(data => {
        console.log(data)
        this.formation = data;
      }, error => console.log(error));

     
    }
    getFormationDetail(idFormation:number){
      this.router.navigate(['getFormationDetail',Formation])
    }

}
