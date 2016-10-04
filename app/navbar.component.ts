import { Component , OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {quizCategory} from "./model/quizCategory";
import {QuizCategoriesService} from './quizCategories.service';



//import {ControlGroup} from '@angular/common';

@Component({
    selector:'navbar',
    moduleId: module.id,
    templateUrl:'navbar.component.html',
    providers:[QuizCategoriesService]
})
export class NavBarComponent implements OnInit{
   
    searchText;
    constructor(private _quizCategoriesService: QuizCategoriesService,
    private router: Router) {
         
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
        this.router.navigate(['/quizlist', {search:this.searchText}]);

        console.log(this.searchText);
    }

    


}