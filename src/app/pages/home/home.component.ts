
import { Component, OnInit} from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts:any=[]
  postsData:any=[]
  loadingComp : boolean =true;
  searchedText:string = ''
  
  constructor(private global:GlobalService) { 
    
  }

  ngOnInit(): void {
    this.global.getPosts().subscribe(data=>{
      this.postsData=data;
      this.postsData=this.postsData.data
      this.posts=this.postsData;
    },(err)=>{
      console.log(err);
    },()=>{
      this.loadingComp=false;
    })
  
  }
  
  searchBlog(args?:string){
   
    if(args)
    { 
      this.posts=this.postsData.filter(( pos : any) => pos.category==args)
      return this.posts
    }
    else if(this.searchedText != '' ){
     this.posts=this.postsData.filter(( pos : any) => pos.title.includes(this.searchedText))
     return this.posts
    }
    else{
      this.posts=this.postsData
     return this.posts
    }
   }
  

}
