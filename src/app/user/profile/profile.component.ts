import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: any;

  constructor() { }

  ngOnInit(): void {
  }

}
