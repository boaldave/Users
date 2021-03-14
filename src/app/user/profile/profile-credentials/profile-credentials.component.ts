import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-profile-credentials',
  templateUrl: './profile-credentials.component.html',
  styleUrls: ['./profile-credentials.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileCredentialsComponent implements OnInit {
  @Input() model: any;

  constructor() { }

  ngOnInit(): void {
  }

}
