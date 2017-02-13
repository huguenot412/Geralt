import { Component, OnInit } from '@angular/core';

import { GoalSetupComponent } from './goal-setup.component';
import { ExpensesComponent } from './expenses.component';
import { ExpensesSetupComponent } from './expenses-setup.component';
import { GoalsServiceService } from './goals-service.service';
import { ExpensesService } from './expenses.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: []
})

export class BudgetComponent implements OnInit {

  constructor(private goalsService: GoalsServiceService, private expensesService: ExpensesService) { }

  ngOnInit() {
  }

}
