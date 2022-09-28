import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
 myPosts:any
 user:any 
 img:any
 imgUploadFlag = false;
 userId:any

  constructor( public auth : AuthService ,private router:Router, private activated:ActivatedRoute , private toastr : ToastrService) { 
    this.userId = this.activated.snapshot.paramMap.get('id')
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
  uploadImage(){
    return this.imgUploadFlag= !this.imgUploadFlag
  }

  handleUploadImage(ev : any){
   
    this.img = ev.target.files[0]
  }

  handleUploadImageForm(){
    let formData = new FormData()
    formData.append('img' , this.img)
    this.auth.profileImage(formData).subscribe(res=>{
        console.log(res)
        this.uploadImage()
        window.location.reload();
      })
   }

  handlePostDelete(id:any,index:any){
    this.auth.deletePost(id).subscribe()
    this.myPosts.splice(index,1)
  }

}
