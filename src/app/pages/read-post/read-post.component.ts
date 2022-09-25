import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-read-post',
  templateUrl: './read-post.component.html',
  styleUrls: ['./read-post.component.css']
})
export class ReadPostComponent implements OnInit {
  postId:any 
  post:any
  loadingComp : boolean =true;
  constructor(private global : GlobalService , private activated: ActivatedRoute) { }

  ngOnInit(): void {
    this.postId=this.activated.snapshot.paramMap.get('id')
    this.global.getSinglePost(this.postId).subscribe(post=>{
      this.post=post.data
    },(err)=>{
      console.log(err);
      
    },()=>{
      this.loadingComp=false;
    })
  }

}
