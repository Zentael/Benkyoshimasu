import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';

import {RevisionsComponent} from './revisions/revisions.component';

import {ExercicesComponent} from './exercices/exercices.component';
import {TranslateComponent} from './exercices/translate/translate.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, data: {animation: 'home'}},
    { path: 'revisions/:kana', component: RevisionsComponent,
        data: {animation: 'revisions'}},
    { path: 'exercices/:kana', component: ExercicesComponent,
        data: {animation: 'exercices'}},
    { path: 'exercices/:kana/:exerciceType', component: TranslateComponent, data: {animation: 'exercice'}},
    { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
