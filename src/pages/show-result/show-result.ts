import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalveriableProvider } from "../../providers/globalveriable/globalveriable";
/**
 * Generated class for the ShowResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-show-result',
  templateUrl: 'show-result.html',
})

export class ShowResultPage {
  student:any;
  score=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public global: GlobalveriableProvider) {  
this.student=this.navParams.data.cte;
//this.score=global.score;
for(let i = 0; i < global.score.length; i++){
  if (this.student.id==global.score[i].id)
  this.score.push(global.score[i]);
 
} 
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowResultPage');
  }

}
