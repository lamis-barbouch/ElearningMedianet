import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormationService } from 'src/app/_services/formation.service';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.css']
})
export class TeacherHomeComponent implements OnInit {

  constructor(private formationService:FormationService,private router:Router) { }

  ngOnInit(): void {
  }
  public logout(){
    
    this.router.navigate(['/login']);
    
 
   }

}
