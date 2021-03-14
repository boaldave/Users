import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-address',
  templateUrl: './profile-address.component.html',
  styleUrls: ['./profile-address.component.scss']
})
export class ProfileAddressComponent implements OnInit {
  @Input() model: any;

  addressFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.addressFormGroup = this.formBuilder.group({
    });

  }

}
