import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import {user} from "../model/user";
import {AuthService} from './auth.service';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms'; 
import {EmailValidator} from './emailvalidator';
import {matchingPasswords} from './matchpasswordvalidator';

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
               'fullName' : [null, Validators.required],
               'email':['',Validators.compose([Validators.required,EmailValidator.EmailIsValid])],
               'password':[null, Validators.required],
               'confirmPassword':[null, Validators.required]
           }, {validator: matchingPasswords('password', 'confirmPassword')})
    }

    ngOnInit(): void {
    }

    signUp(value:any):void{
        console.log(value);
    }
}