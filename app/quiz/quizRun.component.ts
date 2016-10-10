import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import {quiz,resultCategory,question} from "../model/quiz";
import {QuizListService} from './quizList.service';


@Component({
    selector: 'quizRun',
    templateUrl:'quizRun.component.html',
    moduleId: module.id,
    providers:[QuizListService],
    
    
   
})

export class QuizRunComponent implements OnInit{
    quizId:string;
    private sub: any;
    questionNo = 1;
    currentQuestion:any;
    totalQuestions:number;
    Answers:string[] = [];
    currentAnswer:string;
    
    questions:any[]=[
        {"questionText": "Question 1 Text here",
        "questionType": 0,
        "marks": 1,
        "_id": "57fb2fc39891a044b4a692e4",
        "options": [
          "Option 1",
          "Option 2",
          "Option 3",
          "Option 4",
        "Option 5"
        ]},
        {
            "questionText": "Question 2 Text here",
        "questionType": 0,
        "marks": 2,
        "_id": "57fb2fcf9891a044b4a692e5",
        "options": [
          "Option 1",
          "Option 2",
          "Option 3",
          "Option 4"
        ]},
        {
            "questionText": "Question 3 Text here",
        "questionType": 0,
        "marks": 1,
        "_id": "57fb2fd89891a044b4a692e6",
        "options": [
          "Option 1",
          "Option 2",
          "Option 3",
          "Option 4"
        ]},
        {
            "questionText": "Question 4 Text here",
        "questionType": 0,
        "marks": 1,
        "_id": "57fb2fdd9891a044b4a692e7",
        "options": [
          "Option 1",
          "Option 2",
          "Option 3",
          "Option 4"
        ]}
        ];

    
    
    
    
    constructor(private _quizListService:QuizListService,
       private route: ActivatedRoute,
       private router: Router) {
    }

     ngOnInit(): void {

         this.sub = this.route.params.subscribe(params => {
        this.quizId= params["quizId"];
       
        });
         this.currentQuestion = this.questions[this.questionNo-1];
        this.totalQuestions = this.questions.length;
        for(var i=0;i<this.totalQuestions;i++){
            this.Answers.push("");
        }
     }

     previous():void{
         --this.questionNo;
         if (this.questionNo <=0) this.questionNo = 1;
         this.currentQuestion = this.questions[this.questionNo-1];
         this.currentAnswer = this.Answers[this.questionNo-1];
         console.log('Current:' + this.currentAnswer);
     }

     next():void{
         ++this.questionNo;
         
         if (this.questionNo > this.questions.length) this.questionNo = this.questions.length;
         this.currentAnswer = this.Answers[this.questionNo-1];
         this.currentQuestion = this.questions[this.questionNo-1];
         
         console.log('Current:' + this.currentAnswer);
         
     }

     saveValue(option) {
      //this.selectedOption = this.options.filter((item)=> item.id == optionid)[0];
      console.log("Option:" + option);
      this.Answers[this.questionNo-1] = option;
      //console.log(this.Answers);
  }
}
