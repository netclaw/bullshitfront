import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestapiService } from 'src/app/service/requestapi.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs$!:Observable<any>;
  jobslocation$!:Observable<any>;
  jobsindustry$!:Observable<any>;
  user!:string;
  // jobs!:any[];
  // jobslocation!:any[];
  // jobsindustry!:any[];
  constructor(private requestapiService:RequestapiService,private userservice:UserService ) { }

  ngOnInit(): void {
    
    // this.f("user1")
    this.userservice.ActiveUser.subscribe(x => {
      console.log(x)
      this.jobs$=this.requestapiService.recommendJobsBySkills(x.user_id)
    
    });
    

    // this.jobs$=this.requestapiService.recommendJobsBySkills("user1");
    //   this.jobslocation$=this.requestapiService.recommendJobsByLocation("user1","Rabat");
    //   this.jobsindustry$=this.requestapiService.recommendJobsByIndustry("user1");

  
  }


}
