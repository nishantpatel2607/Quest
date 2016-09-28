import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import {quizCategory} from "./model/quizCategory";


@Injectable()
export class QuizCategoriesService{
    private url = "http://localhost:3000/";

    constructor (private _http: Http) {}

    getCategories(){
        return this._http.get(this.url + "quizcategories")
        .map(response =>{
            const data = response.json().obj;
            let objs: any[]=[];
            for (let i=0; i< data.length; i++){
                let Category = new quizCategory();
                Category.categoryName = data[i].categoryName;
                Category.subCategories = new Array<String>();
                for (let j=0; j<data[i].subCategories.length;j++){
                    Category.subCategories.push(data[i].subCategories[j]);
                    //console.log(data[i].subCategories[j]);
                }
                objs.push(Category);
            }
            return objs;
        })
        .catch(error => Observable.throw(error));
    }
    
}