import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signInForm !: FormGroup;

  
  constructor(private formBuilder : FormBuilder,private userservice : UserService,private router:Router) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      userId: [null, [Validators.required]],
    });
  }

  onSubmit(){
    this.router.navigate(['logged',this.signInForm.value.userId]);
    // console.log(this.signInForm.value)
    this.userservice.loginUser(this.signInForm.value);
    
    
   
  }

}
