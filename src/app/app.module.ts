import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BudgetComponent } from './shared/budget.component';
import { GoalDisplayComponent } from './shared/goal-display.component';

import { GoalsServiceService } from './shared/goals-service.service';
import { ExpensesService } from './shared/expenses.service';
import { GoalSetupComponent } from './shared/goal-setup.component';
import { ExpensesSetupComponent } from './shared/expenses-setup.component';
import { GoalComponent } from './shared/goal.component';
import { ExpensesComponent } from './shared/expenses.component';
import { ExpenseComponent } from './shared/expense.component';
import { PainMeterComponent } from './shared/pain-meter.component';

import { AppRoutingModule, routableComponents } from './app-routing.module';
import { GoalsDashboardComponent } from './shared/goals-dashboard.component';
import { ExpensesDashboardComponent } from './shared/expenses-dashboard.component';

@NgModule({
  declarations: [
    routableComponents,
    AppComponent,
    BudgetComponent,
    GoalDisplayComponent,
    GoalComponent,
    ExpensesComponent,
    ExpenseComponent,
    PainMeterComponent,
    GoalSetupComponent,
    ExpensesSetupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    GoalsServiceService,
    ExpensesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
