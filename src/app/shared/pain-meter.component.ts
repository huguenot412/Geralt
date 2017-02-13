import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pain-meter',
  templateUrl: './pain-meter.component.html',
  styleUrls: ['./pain-meter.component.css']
})
export class PainMeterComponent implements OnInit {
  
  @Input() expense
  
  constructor() { }
  
  setPainLevel(painLevel) {
    this.expense.painLevel = painLevel
  }
  
  ngOnInit() {

  }
  
}
