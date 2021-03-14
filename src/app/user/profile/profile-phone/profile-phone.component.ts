import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-profile-phone',
  templateUrl: './profile-phone.component.html',
  styleUrls: ['./profile-phone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePhoneComponent implements OnInit {

  @Input() model: any;

  constructor() { }

  ngOnInit(): void {
  }

}
