import { Injectable } from '@angular/core';

@Injectable()
export class GoalsServiceService {
  
  totalSavings: number = 0
  
  idGenerator: number = 0
  
  goals = []
  
  calculateTotalSavings(): number {
    return this.goals.reduce((a, b) => {return a + Number(b.cost)}, 0)
  }
  
  addNewGoal = (name, cost, date) => {
    
    this.goals.push({
      name: name.value,
      cost: cost.value,
      date: date.value,
      id: this.idGenerator
    })
    
    name.value = ""
    cost.value = ""
    date.value = ""
    
    this.idGenerator++
  }
  
  deleteGoal(id: number) {
   this.goals = this.goals.filter((element) => {return element.id !== id})
  }
    
}