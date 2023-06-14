import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../model/User';
import { RequestapiService } from './requestapi.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public Newlocation = new Subject<string[]>();
  loggedUser !: User;
  public locations:string[]=['Rabat', 'Casablanca', 'Marrakech','Tanger'];

  constructor(private requestapiservice:RequestapiService,private router:Router) { }

  addNewUser(user: { user_id: string, skills: string, interests: string }){
    console.log(user)
    const thenewUser: {
      user_id: string;
      skills: string[];
      interests: string[];
    } = {
      user_id: user.user_id,
      skills: user.skills.split(",").map((skill: string) => skill.trim()),
      interests: user.interests.split(",").map((interest: string) => interest.trim())
    };
    console.log(thenewUser)
    // @ts-ignore
    //const newClient : Client = new Client(client.value.get('userId'),client.get('userEmail')?.value, client.get('userName')?.value, client.get('userTel')?.value, client.get('userAddress')?.value, client.get('userP')?.value);
    // const newUser : User = {...user};
    this.requestapiservice.createUser(thenewUser.user_id,thenewUser.skills,thenewUser.interests).subscribe(x=>console.log(x));
  }
  loginUser(user : {userId : string}){
    // this.loggedUser=user;
    this.loggedUser=new User(user.userId,[],[]);
    // console.log(this.loggedUser);
    // this.ActiveUser.next(this.loggedUser);
    this.router.navigate(['logged',user.userId]);


}

addNewOffer(job: {
  job_id: string;
  title: string;
  description: string;
  required_skills: string;
  location: string;
  industry: string;
}) {

  const newOffer: {
    job_id: string;
    title: string;
    description: string;
    required_skills: string[];
    location: string;
    industry: string;
  } = {
    job_id: job.job_id,
    title: job.title,
    description: job.description,
    required_skills: job.required_skills.split(",").map((skill: string) => skill.trim()),
    location: job.location,
    industry: job.industry
  };
  console.log(job)
  console.log(newOffer)
  this.locations.push(newOffer.location);
 this.Newlocation.next(this.locations);
  this.requestapiservice.createJobOffer(newOffer.job_id,newOffer.title,newOffer.description,newOffer.required_skills,newOffer.location,newOffer.industry).subscribe(x=>console.log(x));;
}


}
