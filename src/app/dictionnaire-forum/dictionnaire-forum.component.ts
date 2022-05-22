import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-dictionnaire-forum',
  templateUrl: './dictionnaire-forum.component.html',
  styleUrls: ['./dictionnaire-forum.component.css']
})
export class DictionnaireForumComponent implements OnInit {

  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    public userService: UserService,
  ) { }

  ngOnInit(): void {
  }
  public logout(){
    this.userAuthService.clear();
    this.router.navigate(['/login']);
    
 
   }
}
