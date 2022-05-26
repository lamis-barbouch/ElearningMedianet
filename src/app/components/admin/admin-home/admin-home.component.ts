import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/_services/user-auth.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private userAuthService: UserAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  public logout(){
    localStorage.clear();
    this.userAuthService.clear();
    
    this.router.navigate(['/']);
  
   }
      

}
