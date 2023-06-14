import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  locations: string[] = ['Rabat', 'Casablanca', 'Marrakech','Tanger'];
  jobsLocationPairs: { [key: string]: any[] } = {};

  constructor(private requestapiService:RequestapiService,private userservice:UserService,private router:ActivatedRoute ) { }

  ngOnInit(): void {
    this.userservice.Newlocation.subscribe(x=>this.locations=x)
    this.user=this.router.snapshot.params['userid'].toString();
    this.jobs$=this.requestapiService.recommendJobsBySkills(this.user);
    // this.jobslocation$=this.requestapiService.recommendJobsByLocation(this.user,"Rabat");
    this.requestapiService.recommendJobsByLocations(this.user, this.locations)
    .then((locationJobPairs: { [key: string]: any[] }) => {
      this.jobsLocationPairs = locationJobPairs;
    });
    this.jobsindustry$=this.requestapiService.recommendJobsByIndustry(this.user);
    
    

  
  }


}
