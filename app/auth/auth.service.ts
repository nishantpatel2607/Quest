import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import {user} from "../model/user";

@Injectable()
export class AuthService{
    private url = "http://localhost:3000/";
    constructor (private _http: Http) {}

    signUp(signUpUser:user){

    }
    

}