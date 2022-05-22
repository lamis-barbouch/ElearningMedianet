import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.css']
})
export class FormateursComponent implements OnInit {
  users: Observable<User[]>;
  submitted = false;
  user: User = new User();
  showMsg: boolean = false;

  constructor(private userAuthService: UserAuthService,
    private router: Router,
    public userService: UserService) { }

  ngOnInit(): void {
     this.reloadData();
  }
  newUser():void{
    this.submitted=false;
    this.user=new User();
  }
  save() {
    this.userService
    .createFormateur(this.user).subscribe(data => {
      console.log(data)
      this.showMsg= true;
      this.user = new User();
    }, 
    error => console.log(error));
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  reloadData() {
    this.users = this.userService.getFormateursList();
  }
  deleteFormateur(cinUser:number){
    this.userService.deleteFormateur(cinUser).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
}
formateurDetails(cinUser:number){
  this.router.navigate(['details',cinUser])
}
  public logout(){
    this.userAuthService.clear();
    this.router.navigate(['/login']);
    
 
   }
    

}
