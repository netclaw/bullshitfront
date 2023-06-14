import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestapiService {

  url:string="http://127.0.0.1:5000/";

  constructor(private http:HttpClient) { }

  recommendJobsBySkills(userId:string){
    const body = { user_id: userId };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.url+"recommendJobsBySkills", body, { headers: headers });
  }

 recommendJobsByLocation(userId:string,location:string){
  const body = {
    user_id:userId,
  location:location
  };
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post(this.url+"recommendJobsByLocation", body, { headers: headers });
}

recommendJobsByLocations(userId: string, locations: string[]) {
  const locationJobPairs: { [key: string]: any[] } = {};

  const requests = locations.map((location: string) =>
    this.recommendJobsByLocation(userId, location)
      .toPromise()
      .then((jobs: any) => {
        locationJobPairs[location] = jobs;
      })
  );

  return Promise.all(requests).then(() => locationJobPairs);
}


recommendJobsByIndustry(userId:string){
  const body = { user_id: userId };
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post(this.url+"recommendJobsByIndustry", body, { headers: headers });
}

createUser(user_id:string,skills:Array<string>,interests:Array<string>){
  const body = {
    user_id:user_id,
    skills:skills,
    interests:interests
  };
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post(this.url+"createUser", body, { headers: headers });
}

createJobOffer(job_id:string,title:string,description:string,required_skills:Array<string>,location:string,industry:string){
  const body = {
    job_id:job_id,
title:title,
description:description,
required_skills:required_skills,
location:location,
industry:industry
};
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post(this.url+"createJobOffer", body, { headers: headers });
}

}
