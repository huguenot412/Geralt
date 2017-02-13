import { Component, OnInit } from '@angular/core';

import { ExpenseComponent } from './expense.component';
import { PainMeterComponent } from './pain-meter.component'

import { ExpensesService } from './expenses.service';


@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  constructor(private expensesService: ExpensesService) { }

  ngOnInit() {
  }

}
