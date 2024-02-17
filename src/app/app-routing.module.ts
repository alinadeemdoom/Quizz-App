import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinPageComponent } from './pages/join-page/join-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';
import { EnterPageComponent } from './pages/enter-page/enter-page.component';

const routes: Routes= [
  { path: '', component: JoinPageComponent },
  { path:'quiz-info', component: InfoPageComponent},
  { path:'enter-quiz', component:EnterPageComponent},
  { path: 'quiz', component: QuizPageComponent},
  { path: 'quiz-score', component: ResultPageComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
