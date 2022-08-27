import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PublicComponent } from './Public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: 'inicio', component: HomeComponent },
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
