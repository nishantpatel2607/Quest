import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import {quiz,resultCategory,question} from "../model/quiz";
import {QuizListService} from './quizList.service';
import {GlobalService} from '../global.service';

@Component({
    selector: 'quizCover',
    templateUrl:'quizCover.component.html',
    moduleId: module.id,
    providers:[QuizListService]
})
export class QuizCoverComponent implements OnInit{

    quizId:string;
    _quiz = new quiz();
    private sub: any;

    constructor(private _quizListService:QuizListService,
       private route: ActivatedRoute,
       private router: Router, private globals:GlobalService) {
          
    }
    ngOnInit(): void {
        
    this.sub = this.route.params.subscribe(params => {
        this.quizId= params["quizId"];
        this._quizListService.getQuizById(this.quizId)
        .subscribe(quizFound=> {
                        this._quiz = quizFound;
                    },
                    error => console.error(error)
                    );
        });

        
        
    }

    startQuiz(){
        this.globals.enableNavBar(false);
        this.router.navigate(['/quizrun', {quizId:this.quizId}]);
    }

    ngOnDestroy():void{
        this.sub = null;
    }
}