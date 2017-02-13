import { Component, OnInit } from '@angular/core';

import { GoalsServiceService } from './goals-service.service'
 
@Component({
  selector: 'app-goal-setup',
  templateUrl: './goal-setup.component.html',
  styleUrls: []
})
export class GoalSetupComponent implements OnInit {

  constructor(private goalsService: GoalsServiceService) { }

  ngOnInit() {
  }

}
