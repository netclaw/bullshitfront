import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.css']
})
export class NewOfferComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(private formBuilder:FormBuilder, private userservice : UserService,private router:Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      job_id: [null, [Validators.required]],
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      required_skills: [null, [Validators.required]],
      location: [null, [Validators.required]],
      industry: [null, [Validators.required]]
    });
  }

  onSubmit() {
  
    this.userservice.addNewOffer(this.signUpForm.value);
    this.router.navigateByUrl("");
    
  }

}
