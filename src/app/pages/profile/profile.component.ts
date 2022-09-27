import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
 myPosts:any
 user:any 
  constructor( public auth : AuthService) { 
    this.auth.authMe().subscribe(data=>{
      this.user=data
    })
    this.auth.myPosts().subscribe(data=>{
      this.myPosts=data;
      this.myPosts=this.myPosts.data
   
    })
   

  }

  ngOnInit(): void {
 
  }
  handlePostDelete(id:any,index:any){
    this.auth.deletePost(id).subscribe()
    this.myPosts.splice(index,1)
  }

}
