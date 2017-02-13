import { Component, OnInit, Input } from '@angular/core';

import { GoalsServiceService } from './goals-service.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styles: [`
    .row {
      margin-bottom: 10px;
    }
  `]
})
export class GoalComponent implements OnInit {
  
  @Input() goal
  
  editMode: boolean
  
  constructor(private goalsService: GoalsServiceService) {
    this.editMode = false
   }

  ngOnInit() {
  }
  
  edit(): void {
    this.editMode = true
  }
  
  save(goal, name, cost, date): void {
    goal.name = name
    goal.cost = cost
    goal.date = date
    
    this.editMode = false
  }

}
