import { Component, OnInit, Input } from '@angular/core';

import { ExpensesService } from './expenses.service';

import { PainMeterComponent } from './pain-meter.component'

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  
  @Input() expense
  
  editMode: boolean = false
  
  constructor(private expensesService: ExpensesService) { }

  ngOnInit() {
  }

  edit(): void {
    this.editMode = true
  }
  
  save(expense, name, cost, frequency): void {
    expense.name = name
    expense.cost = cost
    expense.frequency = frequency
    
    this.editMode = false
  }

}
