import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Forum } from 'src/models/forum';
import { TestComponent } from '../test/test.component';
import { ForumService } from '../_services/forum.service';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category/category.service';
import { QuizService } from 'src/app/services/quiz/quiz.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.css']
})
export class HomeStudentComponent implements OnInit {
  public categories = [];
  public serverQuizzes = [];

  public quizzes = [];

  forums:Observable<Forum []>;
  constructor( public dialog:MatDialog,private userAuthService: UserAuthService,
    private router: Router,
    public userService: UserService,public forumService: ForumService,    private snackBar: MatSnackBar,
    private categoryService: CategoryService,
    private quizService: QuizService ) { }
    ngOnInit(): void {
      this.reloadData();
      this.quizService.getAllActiveQuizzes().subscribe(
        (response: any) => {
          this.serverQuizzes = response;
          this.quizzes = this.serverQuizzes;
        },
        (error: any) => {
          Swal.fire(
            'Get No Data From Server ! ! ! !',
            'There is an Error From Server',
            'error'
          );
          console.log(error);
        }
      );
    }
  
    reloadData() {
      this.forums=this.forumService.getSubjectList();
    }
    openDialog(){
      this.dialog.open(TestComponent);
    }
  
  public logout(){
    this.userAuthService.clear();
    
    this.router.navigate(['/login']);
    
 
   }

   openChat(){
    this.router.navigate(['/student/meet']);
   }
   opencours(){
    this.router.navigate(['/student/cours']);
   }

}

