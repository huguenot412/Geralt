import { Component, OnInit } from '@angular/core';

import { GoalComponent } from './goal.component';
import { GoalsServiceService } from './goals-service.service'

@Component({
  selector: 'app-goal-display',
  templateUrl: './goal-display.component.html',
  styleUrls: []
})
export class GoalDisplayComponent implements OnInit {
  
  goals: Object[]
  
  constructor(private goalsService: GoalsServiceService) { }

  ngOnInit() {

  }

}
