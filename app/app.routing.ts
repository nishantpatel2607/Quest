import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';

import {QuizListComponent} from './quiz/quizList.component';
import {QuizCoverComponent}      from './quiz/quizCover.component';
import {QuizRunComponent}      from './quiz/quizRun.component';
import {AppComponent} from './app.component';
import {SignUpComponent}      from './auth/signup.component';
import { HomeComponent }         from './home.component';

const appRoutes: Routes = [
    

    {
        path:'quizlist',
        component:QuizListComponent
        
    },

    {
        path:'quizcover',
        component:QuizCoverComponent
        
    },
    {
        path:'quizrun',
        component:QuizRunComponent
        
    },
    {
        path:'signup',
        component:SignUpComponent
        
    },

    { 
        path: '', 
        component: HomeComponent
     }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);