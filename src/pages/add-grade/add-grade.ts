import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalveriableProvider } from "../../providers/globalveriable/globalveriable";
import {AlertController} from 'ionic-angular';
/**
 * Generated class for the AddGradePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-grade',
  templateUrl: 'add-grade.html',
})
export class AddGradePage {
student:any;
studentchoose:any;
course:any;
grade:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public global: GlobalveriableProvider,private alertController: AlertController) {
    this.student=global.studentArray;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddGradePage');
    
  }
  Addgrade() {
    this.global.score.push({  id: this.studentchoose,course: this.course,grade:this.grade});
    this.openFilters();
    this.navCtrl.pop();
  }


  openFilters() {
    let alert = this.alertController.create({
        title: 'grade',
        subTitle: 'grade was added',
        buttons: ['OK']
    });
    

    alert.present();
}
  
}
