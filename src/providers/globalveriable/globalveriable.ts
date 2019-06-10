import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

/*
  Generated class for the GlobalveriableProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalveriableProvider {
  ApiUrl="assets/student.json";
  

    public score:any;
      public studentArray:any;
      public json:any;
  constructor(public http: HttpClient) {
    

 //this.http.get("assets/score.json").map(res => res).subscribe(data=>{this.json=data;  })

    
 this.http.get('assets/student.json').subscribe(response => this.studentArray=response);
 this.http.get('assets/score.json').subscribe(response => this.score=response);

 console.log(this.json)
  }
  
 

}

