import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-profile-phones',
  templateUrl: './profile-phones.component.html',
  styleUrls: ['./profile-phones.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePhonesComponent implements OnInit {

  @Input() model: any;

  constructor() { }

  ngOnInit(): void {
  }

}
