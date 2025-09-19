import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NetworkCallServiceService } from 'src/services/network-call-service.service';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent {
  formG!:FormGroup;

  constructor(private fb:FormBuilder,private serviceCall:NetworkCallServiceService){
    this.formG=this.fb.group({
      // (?.=*[a-z])(?.=*[A-Z])(?.=*[0-9])(?.=*[!@#%&*])[a-zA-Z0-9]
        studentName:["",[Validators.required,Validators.minLength(2),Validators.maxLength(12)]],
        password:["",[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&*])[a-zA-Z0-9!@#%&*]{8,}$')]],
        mobile:["",[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
        email:["",[Validators.required,Validators.pattern('^[a-zA-z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$')]],
        dateofBirth:["",[Validators.required,Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]]
      }
    )
  }

  // validatedateofBirth(abc:AbstractControl):ValidationErrors|null{
  //   // const datepattern=/^\\d{4}-\\d{2}-\\d{2}$/;
  //   const datepattern=/^\d{4}-\d{2}-\d{2}$/;
  //   if(!datepattern.test(abc.value)){
  //     return {retVal:true}
  //   }
  //   return null;
  // }

  addInfo(){
    if(this.formG.valid){
      this.serviceCall.addStudent(this.formG.value).subscribe((data)=>{
        console.log(data);
        alert("Successfully added");
      })
    }
  }

}
