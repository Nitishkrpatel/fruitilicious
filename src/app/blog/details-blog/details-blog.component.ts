import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-details-blog',
  templateUrl: './details-blog.component.html',
  styleUrls: ['./details-blog.component.css']
})
export class DetailsBlogComponent implements OnInit {
  blogDetailsData:any;
  constructor(private service: ServiceService,private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.getblogDetailsData();
  }

  getblogDetailsData() {
    let id = this.route.snapshot.params['id'];
    this.service.blogDetailsData(id).subscribe((data:any)=> {
    this.blogDetailsData = data.data;
    console.log(id)
    });
  }
}
