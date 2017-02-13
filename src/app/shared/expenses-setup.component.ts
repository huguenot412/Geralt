import { Component, OnInit } from '@angular/core';

import { ExpensesService } from "./expenses.service";

@Component({
  selector: 'app-expenses-setup',
  templateUrl: './expenses-setup.component.html',
  styleUrls: ['./expenses-setup.component.css']
})
export class ExpensesSetupComponent implements OnInit {
  
  constructor(private expensesService: ExpensesService) { }
  
  selectFrequency(frequency) {
    this.expensesService.selected = frequency;
  }
  
  ngOnInit() {
  }

}
