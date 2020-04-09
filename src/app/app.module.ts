import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RevisionsComponent } from './revisions/revisions.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TranslateComponent } from './exercices/translate/translate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RevisionsComponent,
    ExercicesComponent,
    TranslateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
