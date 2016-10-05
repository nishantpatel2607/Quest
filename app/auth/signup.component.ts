import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import {signUpuser} from "../model/user";
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

    user = new signUpuser();
    

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
        
        //this.signupForm.controls["email"].setAsyncValidators(this.isEmailExist);
    }

    signUp(value:any):void{
        /*this.user = new user();
        this.user.fullName = value.fullName;
        this.user.email = value.email;
        this.user.password = value.password;*/
        this._authService.createUser(this.user).subscribe(
            res => {console.log(res)});
        
    }

    /*isEmailExist (control: FormControl){
        var emailFlag = '';
    
        
        this._authService.isEmailExists(control.value)
        .debounceTime(400)
        .subscribe(ans => {
            emailFlag = ans;
        });
        if (emailFlag == "true")
            return{emailExists:true}
    }*/
    
}