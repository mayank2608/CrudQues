import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Student } from 'src/model/student';

@Injectable({
  providedIn: 'root'
})
export class NetworkCallServiceService {

  apiUrl:string = "https://ec2-15-206-189-236.projects.wecreateproblems.com/proxy/3000/student";
  constructor(private httpCall:HttpClient) { }

  addStudent(studentData:Student):Observable<any>{
    return this.httpCall.post(this.apiUrl,studentData);
  }

  viewStudent():Observable<any>{
    return this.httpCall.get(this.apiUrl);
  }

  viewById(id:any):Observable<any>{
    return this.httpCall.get(this.apiUrl+"/"+id)
  }

  deleteById(id:any):Observable<any>{
    return this.httpCall.delete(this.apiUrl+"/"+id)
  }

  updateStudent(id:any,studentData:Student):Observable<any>{
    return this.httpCall.put(this.apiUrl+"/"+id,studentData);
  }
}
