"use strict";
var router_1 = require('@angular/router');
var quizList_component_1 = require('./quiz/quizList.component');
var home_component_1 = require('./home.component');
var appRoutes = [
    {
        path: 'quizlist',
        component: quizList_component_1.QuizListComponent
    },
    {
        path: '',
        component: home_component_1.HomeComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map