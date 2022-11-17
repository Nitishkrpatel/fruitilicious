import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css'],
})
export class MenuItemsComponent implements OnInit {
  coffeeItems = [];
  constructor(private service: ServiceService,private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.coffeeData()
  }
  coffeeData() {
    let id = this.route.snapshot.params['id'];
    this.service.getcoffeData(id).subscribe((data:any)=> {
    this.coffeeItems = data.data;
    console.log(id)
    });
  }
}
