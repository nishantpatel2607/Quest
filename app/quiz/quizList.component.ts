import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import {quiz,resultCategory,question} from "../model/quiz";
import {QuizListService} from './quizList.service';
@Component({
    selector: 'quizList',
    
    template:`
     <ul>
         <li  *ngFor = "let quiz of quizlist">
         {{quiz.quizName}}
         </li>
     </ul>
     {{searchTag}}
     
    `,
    providers:[QuizListService]
})
export class QuizListComponent implements OnInit{
     quizlist: quiz[];
     category:string;
     subCategory:string;
     searchTag:string;
     private sub: any;

     constructor(private _quizListService:QuizListService,
       private route: ActivatedRoute,
       private router: Router) {
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
                this.category = params["category"]  ;
                this.subCategory = params["subcategory"];
                this.searchTag = params["search"];
                if (this.searchTag == ''){
                    this._quizListService.getQuizessByCategory(this.category,this.subCategory)
                     .subscribe(
                    quizess => {
                        this.quizlist = quizess;
                    },
                    error => console.error(error)
                    );
                }
                else{
                    this._quizListService.getQuizessBySearchTag(this.searchTag)
                     .subscribe(
                    quizess => {
                        this.quizlist = quizess;
                    },
                    error => console.error(error)
                    );
                }

        });

        
    
    }

    ngOnDestroy() {
    this.sub.unsubscribe();
  }

}