import { Component , OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {quizCategory} from "./model/quizCategory";
import {QuizCategoriesService} from './quizCategories.service';
import {GlobalService} from './global.service';


//import {ControlGroup} from '@angular/common';

@Component({
    selector:'navbar',
    moduleId: module.id,
    templateUrl:'navbar.component.html',
    providers:[QuizCategoriesService]
})
export class NavBarComponent implements OnInit{
   
    searchText;
    enableFlag;
    constructor(private _quizCategoriesService: QuizCategoriesService,
    private router: Router, globals:GlobalService) {
        /*globals.onMainEvent.subscribe(
            flag=>{
                this.disableFlag = flag;
            }
        )
         this.disableFlag = globals.disableFlag;*/

         globals.onnavbarEnabledChange.subscribe(
             flag=>{
                 this.enableFlag = flag;
             }
         )
         this.enableFlag = globals.navbarEnabled;
    }

    quizCategories: quizCategory[];

     ngOnInit() {
         
        this._quizCategoriesService.getCategories()
            .subscribe(
                categories => {
                    this.quizCategories = categories;
                },
                error => console.error(error)
            );
    }

    onSubmit(){
        if (this.enableFlag){
        this.router.navigate(['/quizlist', {search:this.searchText}]);

        console.log(this.searchText);
        }
    }

    


}