import { Injectable } from '@angular/core';

@Injectable()
export class ExpensesService {
  
  expenses = []
  
  totalExpenses = 0
  
  idGenerator = 0
  
  selected: string
  
  constructor() { }
  
  calculateMonthlyCost(timeUnit, cost, frequency) {
    
    let monthlyCost: number
    
    switch (timeUnit) {
      case "Day":
        monthlyCost = Number((frequency * 30) * cost);
        break;
      case "Week":
        monthlyCost = Number((frequency * 4) * cost);
        break;
      case "Month":
        monthlyCost = Number(frequency * cost);
        break;
      default:
        monthlyCost = Number(frequency * cost);  
    }
    
    return monthlyCost;
    
  }
  
  calculateTotalExpenses(): number {
    return this.expenses.reduce((a, b) => {return a + Number(b.monthlyCost)}, 0)
  }
  
  addNewExpense = (name, cost, frequency, timeUnit, pain) => {
    
    this.expenses.push({
      name: name.value,
      cost: cost.value,
      frequency: frequency.value,
      timeUnit: timeUnit,
      monthlyCost: this.calculateMonthlyCost(timeUnit, cost.value, frequency.value),
      painLevel: pain.value,
      id: this.idGenerator
    })
    
    this.idGenerator++
    
    name.value = ""
    cost.value = ""
    frequency.value = ""
    pain.value = ""
    this.selected = ""
    
  }
  
  deleteExpense(id: number) {
   this.expenses = this.expenses.filter((element) => {return element.id !== id})
  }

}
