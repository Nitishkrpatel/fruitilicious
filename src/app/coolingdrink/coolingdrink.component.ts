import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-coolingdrink',
  templateUrl: './coolingdrink.component.html',
  styleUrls: ['./coolingdrink.component.css']
})
export class CoolingdrinkComponent implements OnInit {
  coolingDrinks:any;
  constructor(private service :ServiceService) { }

  ngOnInit(): void {
    this.getCoolingDrinkData();
  }
  getCoolingDrinkData(){
    this.service.getCoolingDrinkData().subscribe((data:any)=>{
      this.coolingDrinks = data.data;
    })
  }
}
