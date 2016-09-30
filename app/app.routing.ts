import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';

import {QuizListComponent} from './quiz/quizList.component';
import {AppComponent} from './app.component';
import { HomeComponent }         from './home.component';
const appRoutes: Routes = [
    

    {
        path:'quizlist',
        component:QuizListComponent
        
    },

    { 
        path: '', 
        component: HomeComponent
     }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);