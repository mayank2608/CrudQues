import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddStudentsComponent } from './components/add-students/add-students.component'
import { ReactiveFormsModule } from '@angular/forms';
import { ViewStudentComponent } from './components/view-student/view-student.component';
import { ViewAllComponent } from './components/view-all/view-all.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentsComponent,
    ViewStudentComponent,
    ViewAllComponent,
    UpdateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
