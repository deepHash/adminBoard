import { Component, NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserActivityComponent } from './components/user-activity/user-activity.component';

const routes: Routes = [{
    path: '', redirectTo: 'userActivity', pathMatch: 'full'
},
{ path: 'userActivity', component: UserActivityComponent }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule { }
