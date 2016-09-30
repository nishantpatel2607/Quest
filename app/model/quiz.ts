export class quiz{
    public quizName: string;
    public categoryName:string;
    public subCategoryName:string;
    public introductionText:string;
    public passingMarks:number;
    public resultCategories = new Array<resultCategory>();
    public questions= new Array<question>();
    public durationinMins:number;
    public tags = new Array<string>();
    public privateQuiz:number; 
}

export class resultCategory{
    public marks: number;
    public category: string;
}


export class question {
    public questionText: string;
    public questionType: number;
    public options = new Array<string>();
    public correctAnswer:number;
    public marks:number;
}
    