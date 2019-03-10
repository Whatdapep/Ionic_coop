import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'
    
    },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'footer', loadChildren: './footer/footer.module#FooterPageModule' },
  // { path: 'index', loadChildren: './index/index.module#IndexPageModule' },
  // { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  // { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminPageModule' },
  // { path: 'gain', loadChildren: './profile/gain/gain.module#GainPageModule' },
  // { path: 'coll', loadChildren: './profile/coll/coll.module#CollPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
