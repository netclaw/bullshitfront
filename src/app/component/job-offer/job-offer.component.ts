import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.css']
})
export class JobOfferComponent implements OnInit {
  @Input() job:any;

  constructor() { }

  ngOnInit(): void {
  }

}
