import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import {quiz,resultCategory,question} from "../model/quiz";

@Injectable()
export class QuizListService{
    private url = "http://localhost:3000/";
    constructor (private _http: Http) {}

    getQuizessByCategory(category:string,subcategory?:string){
        var _url = this.url;
        _url += "quiz?category=" + category;
        if (!subcategory || subcategory == '')
            _url += "&&subcategory=";
        else
            _url += "&&subcategory=" + subcategory;
        
        return this._http.get(_url)
        .map(response =>{
            const data = response.json().obj;
            let objs: any[]=[];
            for (let i=0; i< data.length; i++){
                let _quiz = new quiz();
                _quiz.Id = data[i]._id;
                _quiz.quizName = data[i].quizName;
                _quiz.categoryName = data[i].categoryName;
                _quiz.subCategoryName = data[i].subCategoryName;
                _quiz.introductionText = data[i].introductionText;
                _quiz.passingMarks = data[i].passingMarks;
                _quiz.durationinMins = data[i].durationinMins;
                _quiz.privateQuiz = data[i].privateQuiz;
                
               
                for (let j=0; j<data[i].resultCategories.length;j++){
                    let resultCatg = new resultCategory();
                    resultCatg.category = data[i].resultCategories[j].category;
                    resultCatg.marks = data[i].resultCategories[j].marks;
                    _quiz.resultCategories.push(resultCatg);
                    
                }
                objs.push(_quiz);
            }
            return objs;
        })
        .catch(error => Observable.throw(error));
    }


    getQuizessBySearchTag(searchTag:string){
        var _url = this.url;
        _url += "quiz?tag=" + searchTag;
        
        return this._http.get(_url)
        .map(response =>{
            const data = response.json().obj;
            let objs: any[]=[];
            for (let i=0; i< data.length; i++){
                let _quiz = new quiz();
                _quiz.Id = data[i]._id;
                _quiz.quizName = data[i].quizName;
                _quiz.categoryName = data[i].categoryName;
                _quiz.subCategoryName = data[i].subCategoryName;
                _quiz.introductionText = data[i].introductionText;
                _quiz.passingMarks = data[i].passingMarks;
                _quiz.durationinMins = data[i].durationinMins;
                _quiz.privateQuiz = data[i].privateQuiz;
                
               
                for (let j=0; j<data[i].resultCategories.length;j++){
                    let resultCatg = new resultCategory();
                    resultCatg.category = data[i].resultCategories[j].category;
                    resultCatg.marks = data[i].resultCategories[j].marks;
                    _quiz.resultCategories.push(resultCatg);
                    
                }
                objs.push(_quiz);
            }
            return objs;
        })
        .catch(error => Observable.throw(error));
    }

    getQuizById(quizId:string){
        var _url = this.url;
        _url += "quiz/" + quizId;
       
         return this._http.get(_url)
        .map(response =>{
            const data = response.json().obj;
 
                let _quiz = new quiz();
                _quiz.Id = data._id;
                _quiz.quizName = data.quizName;
                _quiz.categoryName = data.categoryName;
                _quiz.subCategoryName = data.subCategoryName;
                _quiz.introductionText = data.introductionText;
                _quiz.passingMarks = data.passingMarks;
                _quiz.durationinMins = data.durationinMins;
                _quiz.privateQuiz = data.privateQuiz;
                
               
                for (let j=0; j<data.resultCategories.length;j++){
                    let resultCatg = new resultCategory();
                    resultCatg.category = data.resultCategories[j].category;
                    resultCatg.marks = data.resultCategories[j].marks;
                    _quiz.resultCategories.push(resultCatg);
                    
                }
               
            
            return _quiz;
        })
        .catch(error => Observable.throw(error));

    }   
}