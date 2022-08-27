import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PrivateRoutingModule } from './Private/Private-router';
import { PublicRoutingModule } from './Public/Public-router';



const routes: Routes = [
    { path: '**', component: NopagefoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes),
    PublicRoutingModule,
    PrivateRoutingModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
