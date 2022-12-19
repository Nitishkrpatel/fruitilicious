import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs:any;
  constructor(private service :ServiceService) { }

  ngOnInit(): void {
    this.getAllBlogs();
    
  }
  getAllBlogs(){
    this.service.getBlogs().subscribe((data:any)=>{
       this.blogs = data.data;
       this.blogs.forEach((blog:any) => {
        blog.trimdesc = blog.description.slice(0,200);
        blog.date = blog.timestamp
       });
    })
    
  }
}
