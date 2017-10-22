import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AddComponent } from './add/add.component';
import { HomeComponent } from  './home/home.component';
import {AppComponent} from './app.component';
import { ReportComponent } from './report/report.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
const appRouts: Routes=[
    {
        path:'',
        component: HomeComponent 
    },{
        path:'home',
        component:HomeComponent
    
    },{
        path:'add',
        component:AddComponent
    },{
        path:'report',
        component:ReportComponent
    },{
        path:'search',
        component:SearchComponent
    },{
        path:'about',
        component:AboutComponent
    }
    
 
]

export const routing: ModuleWithProviders= RouterModule.forRoot(appRouts);


