"use strict";
var quiz = (function () {
    function quiz() {
        this.resultCategories = new Array();
        this.questions = new Array();
        this.tags = new Array();
    }
    return quiz;
}());
exports.quiz = quiz;
var resultCategory = (function () {
    function resultCategory() {
    }
    return resultCategory;
}());
exports.resultCategory = resultCategory;
var question = (function () {
    function question() {
        this.options = new Array();
    }
    return question;
}());
exports.question = question;
//# sourceMappingURL=quiz.js.map