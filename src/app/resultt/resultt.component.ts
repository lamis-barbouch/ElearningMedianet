import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz/quiz.service';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
import { UserAuthService } from '../_services/user-auth.service';
interface Result {
  username: string;
  submitQuizId: number;
  quizId: number;
  title: string;
  numberOfQuestion: number;
  maxMarks: number;
  totalCorrectAnswer: number;
}

@Component({
  selector: 'app-resultt',
  templateUrl: './resultt.component.html',
  styleUrls: ['./resultt.component.css']
})
export class ResulttComponent implements OnInit {

  public quizId: number;
  public quizTitle: string;
  public resultList: Result[] = [];

  public resultListLength: number;
  constructor(
    private snackBar: MatSnackBar,
    private activeRoute: ActivatedRoute,
    private quizService: QuizService,
    private router: Router,
    private userAuthService: UserAuthService,
  ) {}
  @ViewChild('pdfTable') pdfTable: ElementRef;
   
  public downloadAsPDF() {
    
    const doc = new jsPDF();
    
    const pdfTable = this.pdfTable.nativeElement;
    
    var html = htmlToPdfmake(pdfTable.innerHTML);
      
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open(); 
      
  }
  ngOnInit(): void {
    this.quizId = this.activeRoute.snapshot.params.quizId;
    this.quizTitle = this.activeRoute.snapshot.params.title;

    this.quizService.getQuizParticipantsResult(this.quizId).subscribe(
      (response: any) => {
        this.resultList = response;
        this.resultListLength = this.resultList.length;
      },
      (error: any) => {
        Swal.fire(
          'Get No Data ! ! ! !',
          'There is an Error From Server',
          'error'
        );
        console.log(error);
      }
    );
  }
  public logout(){
    localStorage.clear();
    this.userAuthService.clear();
    
    this.router.navigate(['/']);
  
   }

  public generatePdf() {
    this.quizService.getQuizParticipantsResultPdf(this.quizId).subscribe(
      (response: any) => {
        let file = new Blob([response], { type: 'application/pdf' });
        let fileURL = URL.createObjectURL(file);

        window.open(fileURL);

        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
