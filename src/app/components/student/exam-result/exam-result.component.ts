import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-exam-result',
  templateUrl: './exam-result.component.html',
  styleUrls: ['./exam-result.component.css'],
})
export class ExamResultComponent implements OnInit {
  public submitQuizId: 1;
  public quizTitle: "Angular";
  public marks: 10;
  public questions = [];

  constructor(
    private snackBar: MatSnackBar,
    private activeRoute: ActivatedRoute,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.submitQuizId = this.activeRoute.snapshot.params.submitQuizId;

    this.quizService.getQuizExamResult(this.submitQuizId).subscribe(
      (response: any) => {
        this.quizTitle = response.title;
        this.questions = response.submitQuestionDtoList;
      },
      (error: any) => {
        this.snackBar.open('Fail Operation !  !  !  !', 'Close', {
          duration: 3000,
        });
      }
    );
  }
}
