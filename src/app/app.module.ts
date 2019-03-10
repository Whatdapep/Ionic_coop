import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule,Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { AdminPage } from './admin/admin.page';
// import { MenuPage } from './menu/menu.page';
// import { IndexPage } from './index/index.page';
// import { ProfilePage } from './profile/profile.page';
// import { FooterPage } from './footer/footer.page';
// import { Test1Component } from './test1/test1.component';
import { UserService } from './index/user.service';

@NgModule({
  declarations: [
    AppComponent,
    // AdminPage,
    // MenuPage,
    // IndexPage,
    // ProfilePage,
    // FooterPage,
    // Test1Component,
    // MenuPageModule
],
  entryComponents: [
  //   AdminPage,
  //   MenuPage,
  //   IndexPage,
  //   ProfilePage,
  //   FooterPage,
  //   // MenuPageModule,
  // Test1Component
],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    // MenuPageModule
    // RouterModule.forRoot(routers)
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
