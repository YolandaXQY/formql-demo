import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPageComponent } from './programs/test/indexPage.component';
import { FormQLTestComponent } from './programs/test/formQLTest.component';


const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/index'
  },
  {
    path: 'index',
    component: IndexPageComponent,
  },
  {
    path: 'form/:name',
    component: FormQLTestComponent,
  },
  {
    path: 'form/:name/:id',
    component: FormQLTestComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true, useHash: false }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
