import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentsComponent } from './components/add-students/add-students.component';
import { ViewStudentComponent } from './components/view-student/view-student.component';
import { ViewAllComponent } from './components/view-all/view-all.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';

const routes: Routes = [
  // {path:'',redirectTo:'addStudent',pathMatch:'full'},
  {path:'addStudent',component:AddStudentsComponent},
  {path:'viewById/:id',component:ViewStudentComponent},
  {path:'viewAll',component:ViewAllComponent},
  {path:'updateStudent/:id',component:UpdateStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
