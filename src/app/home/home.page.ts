import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router,RouterModule } from '@angular/router';
import { IndexPage } from '../index/index.page';
import { AppModule } from '../app.module';
import { MenuPageModule } from '../menu/menu.module';
// import {MenuPageModule}
// import{IndexPage}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


    username:string;
    password:string;
    strlogin:string;
  constructor(
    public navCtrl: NavController ,  
    public alertController : AlertController,
    public router:Router
    ){}

// ---------------------------------------Alert-------------------------------------------------------------------------------------------------------
async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Error',
    // subHeader: 'Subtitle',
    message: 'Please Enter Username and Password Correctly',
    buttons: ['OK']
  });

  await alert.present();
}
async LoginComplete() {
  const alert = await this.alertController.create({
    header: 'Alert',
    // subHeader: 'Subtitle',
    message: 'Hello Admin Wellcome',
    buttons: ['OK']
  });
  setTimeout(()=>{  this.router.navigate(['/footer']);
 },2000);
  await alert.present();
}


  // ----------------------------------------Login Controller---------------------------------------------------------------------------------------
  login(_username,_password){
    if ((this.username == null) || (this.password == null)){
      this.presentAlert();

    }
    if((this.username == "user") && (this.password == "1234")){
      console.log(" Hello Welcome ");
      this.LoginComplete();
      // setTimeout(()=>{
      //    this.formlogin = false;
      // this.formafter = true;
      // },1000);
     
    }
    else if ((this.username == "Admin") && (this.password == "Admin")){
      this.LoginComplete();
      
    

    }
    else{
      this.presentAlert();

    }
    console.log(" Username is "+this.username);
    console.log(" Password is "+this.password);
    this.strlogin = this.username+this.password;
    
  }
}
