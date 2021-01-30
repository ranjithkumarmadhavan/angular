import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  userName = "ranjith"
  passWord =  "okgksi"
  ngOnInit(): void {
  }
  clickMe(username,password){
    if(username == this.userName && password == this.passWord){
      alert("Successfully logged in");
    }
    else{
      alert("Please check your username and password");
    }
  }
}
