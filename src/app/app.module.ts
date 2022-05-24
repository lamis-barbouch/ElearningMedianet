import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './interceptor/auth.interceptor';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './components/student/student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './components/teacher/teacher-dashboard/teacher-dashboard.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { SidebarComponent } from './components/teacher/sidebar/sidebar.component';
import { SidebarComponent as StudentSidebarComponent } from './components/student/sidebar/sidebar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminSidebarComponent } from './components/admin/admin-sidebar/admin-sidebar.component';
import { AddCategoryComponent } from './components/admin/add-category/add-category.component';
import { ShowQuizzesComponent } from './components/teacher/show-quizzes/show-quizzes.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddQuizComponent } from './components/teacher/add-quiz/add-quiz.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { QuizQuestionsComponent } from './components/teacher/quiz-questions/quiz-questions.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddQuestionComponent } from './components/teacher/add-question/add-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { StudentHomeComponent } from './components/student/student-home/student-home.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from "ngx-ui-loader";
import { SearchQuizComponent } from './components/student/search-quiz/search-quiz.component';
import { QuizScheduleComponent } from './components/teacher/quiz-schedule/quiz-schedule.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { QuizInstructionsComponent } from './components/student/quiz-instructions/quiz-instructions.component';
import { ExamComponent } from './components/exam/exam.component';
import { SubmitExamComponent } from './components/submit-exam/submit-exam.component';
import { ExamResultComponent } from './components/student/exam-result/exam-result.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { QuizResultSheetComponent } from './components/teacher/quiz-result-sheet/quiz-result-sheet.component';
import { StudentAnswerSheetComponent } from './components/teacher/student-answer-sheet/student-answer-sheet.component';
import { UserRegistrationComponent } from './components/admin/user-registration/user-registration.component';
import { TeacherHomeComponent } from './components/teacher/teacher-home/teacher-home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderFormateurComponent } from './header-formateur/header-formateur.component';
import { JitsiComponent } from './jitsi/jitsi.component';
import { PaymentFrComponent } from './payment-fr/payment-fr.component';
import { ErrorsFrComponent } from './errors-fr/errors-fr.component';
import { FormationsComponent } from './components/admin/formations/formations.component';
import { DetailsFormationsComponent } from './components/admin/details-formations/details-formations.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { GestionFormationsComponent } from './gestion-formations/gestion-formations.component';
import { AjouterFormationComponent } from './ajouter-formation/ajouter-formation.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { ForumAdminComponent } from './forum-admin/forum-admin.component';
import { DictionnaireForumComponent } from './dictionnaire-forum/dictionnaire-forum.component';
import { ShowCategoryComponent } from './show-category/show-category.component';
import { CommonModule } from '@angular/common';
import { RessourcesComponent } from './ressources/ressources.component';
import { HeaderApprenantComponent } from './header-apprenant/header-apprenant.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { TestComponent } from './test/test.component';
import { ChatComponent } from './chat/chat.component';
import { PdfResultatComponent } from './pdf-resultat/pdf-resultat.component';
import { ReclamAdminComponent } from './reclam-admin/reclam-admin.component';
import { ReponseReclamComponent } from './reponse-reclam/reponse-reclam.component';
import { MSubjectByLikesComponent } from './msubject-by-likes/msubject-by-likes.component';
import { ForumUserComponent } from './forum-user/forum-user.component';
import { ReclamUserComponent } from './reclam-user/reclam-user.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegistrationComponent,
    LoginComponent,
    AdminDashboardComponent,
    StudentDashboardComponent,
    TeacherDashboardComponent,
    UnauthorizedComponent,
    SidebarComponent,
    StudentSidebarComponent,
    ProfileComponent,
    AdminSidebarComponent,
    AddCategoryComponent,
    ShowQuizzesComponent,
    AddQuizComponent,
    QuizQuestionsComponent,
    AddQuestionComponent,
    StudentHomeComponent,
    SearchQuizComponent,
    QuizScheduleComponent,
    QuizInstructionsComponent,
    ExamComponent,
    SubmitExamComponent,
    ExamResultComponent,
    QuizResultSheetComponent,
    StudentAnswerSheetComponent,
    UserRegistrationComponent,
    TeacherHomeComponent,
    WelcomeComponent,
    AdminHomeComponent,
    PageNotFoundComponent,
    HeaderFormateurComponent,
    JitsiComponent,
    PaymentFrComponent,
    ErrorsFrComponent,
    FormationsComponent,
    DetailsFormationsComponent,
    DialogExampleComponent,
    GestionFormationsComponent,
    AjouterFormationComponent,
    FormateursComponent,
    ForumAdminComponent,
    DictionnaireForumComponent,
    ShowCategoryComponent,
    RessourcesComponent,
    HeaderApprenantComponent,
    ThankYouComponent,
    TestComponent,
    ChatComponent,
    PdfResultatComponent,
    ReclamAdminComponent,
    ReponseReclamComponent,
    MSubjectByLikesComponent,
    ForumUserComponent,
    ReclamUserComponent,
    
  ],
  entryComponents:[DialogExampleComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    CKEditorModule,
    BrowserModule, MatDialogModule,
    MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatSnackBarModule, MatToolbarModule, MatFormFieldModule,
    MatDividerModule, MatListModule, FormsModule, HttpClientModule, MatSlideToggleModule, MatTooltipModule, MatSelectModule,
    MatRadioModule, MatPaginatorModule, ClipboardModule, MatDatepickerModule, MatNativeDateModule, MatProgressSpinnerModule,
    NgxUiLoaderModule, NgxUiLoaderHttpModule, NgxMaterialTimepickerModule,   ReactiveFormsModule
    
            
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
