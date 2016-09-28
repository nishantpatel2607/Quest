import { Component , OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {quizCategory} from "./model/quizCategory";
import {QuizCategoriesService} from './quizCategories.service';


@Component({
    selector:'navbar',
    templateUrl:'app/navbar.component.html',
    providers:[QuizCategoriesService]
})
export class NavBarComponent implements OnInit{

    constructor(private _quizCategoriesService: QuizCategoriesService) {}

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

    onCategoryClicked(category:string){
        console.log(category);
        
        
    }


}