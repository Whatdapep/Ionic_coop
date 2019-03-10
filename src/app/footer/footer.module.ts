import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FooterPage } from './footer.page';

const routes: Routes = [
  {
    path: 'footer',
    component: FooterPage,
    children:[
  {
    path:'index',
    loadChildren: '../index/index.module#IndexPageModule'

  },
  {
    path:'menu',
    loadChildren: '../menu/menu.module#MenuPageModule'
  },
  {
    path:'profile',
    loadChildren: '../profile/profile.module#ProfilePageModule'
  },
  { path: 'gain', loadChildren: '../profile/gain/gain.module#GainPageModule' },
  { path: 'coll', loadChildren: '../profile/coll/coll.module#CollPageModule' },
]
},
   {
    path: '',
    redirectTo: 'footer/index',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FooterPage]
})
export class FooterPageModule {}
