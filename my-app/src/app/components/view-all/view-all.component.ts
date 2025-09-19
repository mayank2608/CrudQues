import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Student } from 'src/model/student';
import { NetworkCallServiceService } from 'src/services/network-call-service.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit{

  data$:Observable<Student[]>=of([]);
  finalData$:Observable<Student[]>=of([]);
  constructor(private serviceCall:NetworkCallServiceService,private router:Router){}

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.data$=this.serviceCall.viewStudent();
    this.finalData$=this.data$;
    console.log(this.finalData$);
  }

  deleteHandler(id:string):void{
    
    this.serviceCall.deleteById(id).subscribe((data)=>{
      console.log("deletion Successfull"+id)
      this.router.navigate(['/viewAll']);
    });
    
  }

}
