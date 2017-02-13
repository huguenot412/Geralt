import { Component, OnInit } from '@angular/core';

import { ExpensesSetupComponent } from './expenses-setup.component';
import { ExpensesComponent } from './expenses.component';

import { ExpensesService } from './expenses.service';

@Component({
  selector: 'app-expenses-dashboard',
  templateUrl: './expenses-dashboard.component.html',
  styleUrls: ['./expenses-dashboard.component.css']
})
export class ExpensesDashboardComponent implements OnInit {

  constructor(private goalsService: ExpensesService, private expensesService: ExpensesService) { }

  ngOnInit() {
  }

}
