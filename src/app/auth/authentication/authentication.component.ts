import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from './authentification.service';

@Component({
  selector: 'kA-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
  }
  public onSubmit(data: NgForm){
console.log("Button Clicked");
console.log(data);
this.auth.signup(data.value.email, data.value.password).subscribe(data => {
  console.log(data);
}

)

data.reset();
  }
}
