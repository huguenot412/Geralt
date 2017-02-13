import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoalsDashboardComponent } from './shared/goals-dashboard.component';
import { ExpensesDashboardComponent } from './shared/expenses-dashboard.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'goals' },
    { path: 'goals', component: GoalsDashboardComponent },
    { path: 'expenses', component: ExpensesDashboardComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {  }

export const routableComponents = [
    GoalsDashboardComponent,
    ExpensesDashboardComponent
];

