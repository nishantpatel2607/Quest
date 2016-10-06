import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import {user} from "../model/user";
import {AuthService} from './auth.service';
import {FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms'; 
import {EmailValidator} from './emailvalidator';

@Component({
    selector:'signIn',
    templateUrl:'signin.component.html',
    moduleId:module.id,
    providers:[AuthService]
})
export class SignInComponent implements OnInit{
    signinForm: FormGroup;

    constructor(private _fb: FormBuilder, private _authService:AuthService,
       private route: ActivatedRoute,
       private router: Router) { }

       ngOnInit(): void {

           this.signinForm =this. _fb.group({
               'email':['',Validators.compose([Validators.required,EmailValidator.EmailIsValid])],
               'password':['', Validators.required]
           })
       }
}