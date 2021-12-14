import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-content',
  templateUrl: './nested-content.component.html',
  styleUrls: ['./nested-content.component.css']
})
export class NestedContentComponent implements OnInit {
  initDate!: Date;

  constructor() { }


  ngOnInit() {
    console.log('app-nested-component initialized!');
    this.initDate = new Date();
  }

  ngOnDestroy() {
    console.log('app-nested-component destroyed!');
  }
}
