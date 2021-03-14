import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-profile-addresses',
  templateUrl: './profile-addresses.component.html',
  styleUrls: ['./profile-addresses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileAddressesComponent implements OnInit {
  @Input() model: any;

  constructor() { }

  ngOnInit(): void {
  }

}
