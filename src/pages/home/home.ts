import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShowStudentPage} from '../show-student/show-student';

import { AddStudentPage} from '../add-student/add-student';
import { AddGradePage} from  '../add-grade/add-grade';
import { GlobalveriableProvider } from "../../providers/globalveriable/globalveriable";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public global: GlobalveriableProvider,) {
  
  }

 
  AddStudent() {
    this.navCtrl.push(AddStudentPage);
  }
  AddGrade() {
    this.navCtrl.push(AddGradePage);
  }
  StudentPage() {
    this.navCtrl.push(ShowStudentPage);
  }

}
