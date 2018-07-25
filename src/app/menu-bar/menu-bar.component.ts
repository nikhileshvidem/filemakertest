import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
@Component({
  selector: 'filemaker-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
 appName = 'FileMaker';
 menuArray;
  constructor(private menuservice:MenuService) {
    this.menuservice.getMenuData().subscribe(data =>{
      this.menuArray = data;
   });
   }

  ngOnInit() {
  }

}
