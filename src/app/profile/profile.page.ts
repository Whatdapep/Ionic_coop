import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ViewController } from '@ionic/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  // public viewCtrl: ViewController
  // public appCtrl: App
  constructor( 
    
    public navCtrl:NavController
    
    ) { }

  ngOnInit() {
  }

  master:any = {
    name:"hanat yoma",
    mem_id:"0000091",
    user_id:"1110100182221",
    date_born:"31-03-1997",
    date_app:"10-03-2019",
    company:"Sripatum University"
  }

  coll(){
    // this.navCtrl.push(coll);
  
  }
  gain(){

  }
}
