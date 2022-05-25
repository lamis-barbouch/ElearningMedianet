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
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.css']
})
export class HomeStudentComponent implements OnInit {

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
  
  public logout(){
    
    this.router.navigate(['/login']);
    
 
   }

   openChat(){
    this.router.navigate(['/student/meet']);
   }

}

