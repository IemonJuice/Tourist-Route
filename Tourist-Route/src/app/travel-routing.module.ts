import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./core/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'explore',
    loadChildren: () => import('./core/pages/explore/explore.module').then( m => m.ExplorePageModule)
  },
  {
    path: 'saved',
    loadChildren: () => import('./core/pages/saved/saved.module').then( m => m.SavedPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./core/pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./core/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./core/pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./core/pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class TravelRoutingModule { }
