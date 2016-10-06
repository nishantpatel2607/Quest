import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import {user} from "../model/user";
import {AuthService} from './auth.service';
import {FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms'; 
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
    emailExists = false;
    user = new user();
    

    constructor(private _fb: FormBuilder, private _authService:AuthService,
       private route: ActivatedRoute,
       private router: Router) { }

    ngOnInit(): void {
        
         this.signupForm =this. _fb.group({
               'fullName' : [null, Validators.required],
               'email':['',Validators.compose([Validators.required,EmailValidator.EmailIsValid])],
               'password':[null, Validators.required],
               'confirmPassword':[null, Validators.required]
           }, {validator: matchingPasswords('password', 'confirmPassword')})
        //this.signupForm.controls["email"].setAsyncValidators(this.isEmailExist);
       
    }

    signUp(value:any):void{
        this.emailExists = false;
        this._authService.createUser(this.user).subscribe(
            res => console.log(res),
            error=>{console.error(error);
                this.emailExists = true;
                });
        
    }

    isEmailExist (control: FormControl) : {[s: string]: boolean}{
        var emailFlag = '';
    
        
        this._authService.isEmailExists(control.value)
        .debounceTime(400)
        .subscribe(ans => {
            emailFlag = ans;
        });
        if (emailFlag == "true")
            return{emailExists:true}
    }
    
}