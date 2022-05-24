import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Forum } from 'src/models/forum';
import { TestComponent } from '../test/test.component';
import { ForumService } from '../_services/forum.service';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-forum-user',
  templateUrl: './forum-user.component.html',
  styleUrls: ['./forum-user.component.css']
})
export class ForumUserComponent implements OnInit {


  forums:Observable<Forum []>;
  constructor( public dialog:MatDialog,private userAuthService: UserAuthService,
    private router: Router,
    public userService: UserService,public forumService: ForumService ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.forums=this.forumService.getSubjectList();
  }
  openDialog(){
    this.dialog.open(TestComponent);
  }

  redirectToDictionnaire () {
    this.router.navigateByUrl('/dictionnaireForum');

  }
  public logout(){
    this.userAuthService.clear();
    this.router.navigate(['/login']);
    
 
   }

}
