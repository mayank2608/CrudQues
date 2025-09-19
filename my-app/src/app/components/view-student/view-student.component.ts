import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/model/student';
import { NetworkCallServiceService } from 'src/services/network-call-service.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit{
  stud!:Student;
  constructor(private ar:ActivatedRoute,private serviceCall:NetworkCallServiceService){}
  ngOnInit(): void {
    const id=this.ar.snapshot.paramMap.get('id');
    this.serviceCall.viewById(id).subscribe((data1)=>{
      console.log(data1);
      this.stud=data1;
    })
  }
}
