import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ShowResultPage } from '../pages/show-result/show-result';
import { ShowStudentPage } from '../pages/show-student/show-student';
import { AddGradePage } from '../pages/add-grade/add-grade';
import { AddStudentPage } from '../pages/add-student/add-student';
import { GlobalveriableProvider } from '../providers/globalveriable/globalveriable';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { File } from '@ionic-native/file';
import { FileProvider } from '../providers/file/file';
@NgModule({
  declarations: [
    MyApp,
    HomePage, ShowResultPage, ShowStudentPage, AddGradePage,AddStudentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, ShowResultPage, ShowStudentPage, AddGradePage,AddStudentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalveriableProvider,
    HttpClientModule,
    FileProvider,
    
  ]
})
export class AppModule {}
