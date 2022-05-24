import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.css']
})
export class HomeStudentComponent implements OnInit {

  
  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  public logout(){
    
    this.router.navigate(['/login']);
    
 
   }

}

