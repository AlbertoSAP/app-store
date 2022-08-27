import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../Private/home/home.component';
import { PrivateComponent } from './Private.component';



const routes: Routes = [
    { path: 'dashboard', component: PrivateComponent,
    children:[
        {path:'panel', component:HomeComponent},
        {path:'', redirectTo:'/panel', pathMatch:'full'}
    ]
},


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrivateRoutingModule {}
