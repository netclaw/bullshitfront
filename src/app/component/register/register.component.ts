import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(private formBuilder:FormBuilder, private userservice : UserService,private router:Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      user_id: [null, [Validators.required]],
      skills: [null, [Validators.required]],
      interests: [null, [Validators.required]],
    });
  }

  onSubmit() {
    //console.log(this.signUpForm.value.get('userId').value);
    this.userservice.addNewUser(this.signUpForm.value)
    this.router.navigateByUrl("");
    
  }
}
