import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NetworkCallServiceService } from 'src/services/network-call-service.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit{
  formG!:FormGroup;
  idValue!:string;

  constructor(private fb:FormBuilder,private serviceCall:NetworkCallServiceService,private arouter:ActivatedRoute,private router:Router){
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

  ngOnInit(): void {
    this.idValue=String(this.arouter.snapshot.paramMap.get('id'));
    alert(this.idValue)
    if(this.idValue){
      this.serviceCall.viewById(this.idValue).subscribe((data)=>{
        this.formG.patchValue(data);
      })
    }
  }

  updateInfo():void{
    if(this.formG.valid){
      this.serviceCall.updateStudent(this.idValue,this.formG.value).subscribe((data)=>{
        alert("Update Successfully!")
        this.router.navigate(['/viewAll'])
      })
    }
  }
}
