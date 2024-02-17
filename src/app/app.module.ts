import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoinPageComponent } from './pages/join-page/join-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';
import { EnterPageComponent } from './pages/enter-page/enter-page.component';

@NgModule({
  declarations: [
    AppComponent,
    JoinPageComponent,
    InfoPageComponent,
    QuizPageComponent,
    ResultPageComponent,
    EnterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
