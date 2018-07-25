import { Component, OnInit } from '@angular/core';
import { isNgContainer } from '../../../node_modules/@angular/compiler';

@Component({
  selector: 'filemaker-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
 colors = ['red','blue','green','yellow'];
 
  constructor() { }
  

  ngOnInit() {
  }

}
