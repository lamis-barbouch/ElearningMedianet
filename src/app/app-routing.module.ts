import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './components/admin/add-category/add-category.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { StudentDashboardComponent } from './components/student/student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './components/teacher/teacher-dashboard/teacher-dashboard.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { AdminGuard } from './guard/admin/admin.guard';
import { ShowQuizzesComponent } from './components/teacher/show-quizzes/show-quizzes.component';
import { AddQuizComponent } from './components/teacher/add-quiz/add-quiz.component';
import { QuizQuestionsComponent } from './components/teacher/quiz-questions/quiz-questions.component';
import { AddQuestionComponent } from './components/teacher/add-question/add-question.component';
import { StudentHomeComponent } from './components/student/student-home/student-home.component';
import { SearchQuizComponent } from './components/student/search-quiz/search-quiz.component';
import { QuizScheduleComponent } from './components/teacher/quiz-schedule/quiz-schedule.component';
import { QuizInstructionsComponent } from './components/student/quiz-instructions/quiz-instructions.component';
import { ExamComponent } from './components/exam/exam.component';
import { SubmitExamComponent } from './components/submit-exam/submit-exam.component';
import { ExamResultComponent } from './components/student/exam-result/exam-result.component';
import { QuizResultSheetComponent } from './components/teacher/quiz-result-sheet/quiz-result-sheet.component';
import { StudentAnswerSheetComponent } from './components/teacher/student-answer-sheet/student-answer-sheet.component';
import { UserRegistrationComponent } from './components/admin/user-registration/user-registration.component';
import { TeacherHomeComponent } from './components/teacher/teacher-home/teacher-home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormationsComponent } from './components/admin/formations/formations.component';
import { JitsiComponent } from './jitsi/jitsi.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { ForumAdminComponent } from './forum-admin/forum-admin.component';
import { DictionnaireForumComponent } from './dictionnaire-forum/dictionnaire-forum.component';
import { ShowCategoryComponent } from './show-category/show-category.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ChatComponent } from './chat/chat.component';
import { PdfResultatComponent } from './pdf-resultat/pdf-resultat.component';
import { ReclamAdminComponent } from './reclam-admin/reclam-admin.component';
import { MSubjectByLikesComponent } from './msubject-by-likes/msubject-by-likes.component';
import { ForumUserComponent } from './forum-user/forum-user.component';
import { ReclamUserComponent } from './reclam-user/reclam-user.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { FormationApprenantComponent } from './formation-apprenant/formation-apprenant.component';
import { DetailsFormationComponent } from './details-formation/details-formation.component';
import { CoursApprenantComponent } from './cours-apprenant/cours-apprenant.component';
import { ResulttComponent } from './resultt/resultt.component';


const routes: Routes = [
  {path:'reclam',component:ReclamUserComponent},
  {path:'blog',component:ForumUserComponent},
  {path:'SubjectRate',component:MSubjectByLikesComponent},
  {path:'reclamAdmin',component:ReclamAdminComponent},
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: '401', component: UnauthorizedComponent, pathMatch: 'full' },
  {path:'detailFormation/:idFormation',component:DetailsFormationComponent},
{path:'formateurs',component:FormateursComponent},
{path:'forumAdmin',component:ForumAdminComponent},
{path:'dictionnaireForum',component:DictionnaireForumComponent},
{path:'cours',component:RessourcesComponent},
{path:'meet',component:JitsiComponent},
{path:'thank-you',component:ThankYouComponent},
{path:'chat',component:ChatComponent},
{path:'pdf',component:PdfResultatComponent},

  {
    path: 'admin',
    component: AdminDashboardComponent,canActivate: [AdminGuard],
    children: [
      { path: '', component: AdminHomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'user-registration', component: UserRegistrationComponent },
      { path: 'category', component: AddCategoryComponent },
      { path: 'formations', component:FormationsComponent },
      {path:'showCategory',component:ShowCategoryComponent},
    ],
  },
  {
    path: 'formateur',
    component: TeacherDashboardComponent,
    children: [
      { path: '', component: TeacherHomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'quizzes', component: ShowQuizzesComponent },
      { path: 'quiz', component: AddQuizComponent },
      {
        path: 'quiz-schedule/:quizId/:title',
        component: QuizScheduleComponent,
      },
      {
        path: 'quiz-questions/:quizId/:title',
        component: QuizQuestionsComponent,
      },
      {
        path: 'quiz-result-sheet/:quizId/:title',
        component: QuizResultSheetComponent,
      },
      {
        path: 'student-exam-result/:submitQuizId',
        component: StudentAnswerSheetComponent,
      },
      { path: 'add-question/:quizId/:title', component: AddQuestionComponent },
    ],
  },
  {
    path: 'student',
    component: StudentDashboardComponent,
    children: [
      {path:'quiz-result-sheet/:quizId/:title',component:ResulttComponent},
      {path:'cours',component:CoursApprenantComponent},
      {path:'formations',component:FormationApprenantComponent},
      {path:'detailFormation/:idFormation',component:DetailsFormationComponent},
      { path: 'quizs', component: StudentHomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'find-quiz', component: SearchQuizComponent },
      {path:'home',component:HomeStudentComponent},
      {
        path: 'quiz-instructions/:quizId/:title',
        component: QuizInstructionsComponent,
      },
      {
        path: 'exam-result/:submitQuizId',
        component: ExamResultComponent,
      },
      {path:'meet',component:JitsiComponent}
    ],
  },
  {
    path: 'exam-start/:quizId',
    component: ExamComponent,
  },
  {
    path: 'exam-submit/:submitQuizId/:marks',
    component: SubmitExamComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
