import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts:any=[]
  loadingComp : boolean =true;

  constructor(private global:GlobalService) { }

  ngOnInit(): void {
    this.global.getPosts().subscribe(data=>{
      this.posts=data;
      this.posts=this.posts.data
    },(err)=>{
      console.log(err);
      
    },()=>{
      this.loadingComp=false;
    })
  }

}
