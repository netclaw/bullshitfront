import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../model/User';
import { RequestapiService } from './requestapi.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public ActiveUser = new Subject<User>();
  loggedUser !: User;

  constructor(private requestapiservice:RequestapiService,private router:Router) { }

  addNewUser(user : {
    user_id : string,
    skills : Array<string>,
    interests : Array<string>}){
    // @ts-ignore
    //const newClient : Client = new Client(client.value.get('userId'),client.get('userEmail')?.value, client.get('userName')?.value, client.get('userTel')?.value, client.get('userAddress')?.value, client.get('userP')?.value);
    const newUser : User = {...user};
    this.requestapiservice.createUser(newUser.user_id,newUser.skills,newUser.interests);
  }
  loginUser(user : {userId : string}){
    // this.loggedUser=user;
    this.loggedUser=new User(user.userId,[],[]);
    // console.log(this.loggedUser);
    this.ActiveUser.next(this.loggedUser);


}
}
