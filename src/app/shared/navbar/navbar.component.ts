import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/services/global.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  
  post:any=[]
  
  constructor(public auth :AuthService , private global : GlobalService) { 
    let token = localStorage.getItem('token')
    if(token) this.auth.loginFlag=true
   }

  ngOnInit(): void {
  
  }

  handleLogOut(){
    localStorage.removeItem('token')
    this.auth.loginFlag=false
  }


 
 


}
