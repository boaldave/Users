import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-profile-personal-info',
  templateUrl: './profile-personal-info.component.html',
  styleUrls: ['./profile-personal-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePersonalInfoComponent implements OnInit {
  @Input() model: any;

  constructor() { }

  ngOnInit(): void {
  }

}
