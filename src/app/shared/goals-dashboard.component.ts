import { Component, OnInit } from '@angular/core';

import { GoalSetupComponent } from './goal-setup.component';
import { GoalDisplayComponent } from './goal-display.component';

@Component({
  selector: 'app-goals-dashboard',
  templateUrl: './goals-dashboard.component.html',
  styleUrls: ['./goals-dashboard.component.css']
})
export class GoalsDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
