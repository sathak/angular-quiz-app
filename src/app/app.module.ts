import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { QuizComponent } from '../quiz/quiz.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,routing ],
  declarations: [ AppComponent, HelloComponent,WelcomeComponent,QuizComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
