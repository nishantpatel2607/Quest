import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import {user} from "../model/user";
import {AuthService} from './auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 

@Component({
    selector:'signUp',
    templateUrl:'signup.component.html',
    moduleId:module.id,
    providers:[AuthService]
})
export class SignUpComponent implements OnInit{
    signupForm: FormGroup;

    user = new user();
    

    constructor(private _fb: FormBuilder, private _authService:AuthService,
       private route: ActivatedRoute,
       private router: Router) {

           this.signupForm = _fb.group({
               'fullName' : '',
               'email':'',
               'password':'',
               'confirmPassword':''
           })
    }

    ngOnInit(): void {
    }

    signUp(value:any):void{

    }
}