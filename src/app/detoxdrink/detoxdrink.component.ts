import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-detoxdrink',
  templateUrl: './detoxdrink.component.html',
  styleUrls: ['./detoxdrink.component.css']
})
export class DetoxdrinkComponent implements OnInit {
  detoxDrinks:any;
  constructor(private service :ServiceService) { }

  ngOnInit(): void {
    this.getdetoxDrinksData();
  }
  getdetoxDrinksData(){
    this.service.getDetoxDrinkData().subscribe((data:any)=>{
      this.detoxDrinks = data.data;
    })
  }
}
