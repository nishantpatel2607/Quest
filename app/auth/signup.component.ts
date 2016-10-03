import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import {user} from "../model/user";
import {AuthService} from './auth.service';

@Component({
    selector:'signUp',
    templateUrl:'signup.component.html',
    moduleId:module.id,
    providers:[AuthService]
})
export class SignUpComponent implements OnInit{

    constructor(private _authService:AuthService,
       private route: ActivatedRoute,
       private router: Router) {
    }

    ngOnInit(): void {
    }
}