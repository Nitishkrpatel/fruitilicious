import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems:any;
  constructor(private service :ServiceService) { }

  ngOnInit(): void {
    this.getMenuItems();
    
  }
  getMenuItems(){
    this.service.getMenuItems().subscribe(data=>{
      this.menuItems = data.data;
    })
  }
  
  
}



