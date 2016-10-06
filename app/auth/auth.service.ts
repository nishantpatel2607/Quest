import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import {user} from "../model/user";

@Injectable()
export class AuthService{
    private url = "http://localhost:3000/user/";
    constructor (private _http: Http) {}

    createUser(_user:user){
        const body = JSON.stringify(_user);
        const headers = new Headers({'Content-Type': 'application/json'});

        //console.log(JSON.stringify(_user));
        return this._http.post(this.url+"signup",body,{headers:headers})
        .map(res => res.json())
        .catch(error => Observable.throw(error.json()));
    }

    updateUser(_user:user){
        const body = JSON.stringify(_user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.put(this.url+ _user.Id,body,{headers:headers})
        .map(res => res.json())
        .catch(error => Observable.throw(error.json()));
    }

    
    isEmailExists(email:string){
        var _url = this.url + "user/verifyemail?email=" + email;
         return this._http.get(_url)
        .map(response =>{
            const data = response.json();
            return data;
        });

    }

}