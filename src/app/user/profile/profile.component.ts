import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IUserProfile } from './model';
@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileFormGroup: FormGroup;
  profile: any;

  constructor(private $formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      const mocUserProfile: IUserProfile = {
        personalInfo: {
          firstName: 'David',
          lastName: 'Boal'
        },
        credentials: {
          userName: 'boaldavid',
          password: 'password'
        },
        addresses: [
          {
            address1: '6265 Gunbarrel Ave',
            address2: '',
            city: 'Boulder',
            state: 'CO',
            zip: '80301'
          }
        ],
        phones: [
          {
            number: '822-555-1212',
            phoneType: 'cell',
            isPrimary: true
          }
        ]
      };

      this.profileFormGroup = this.$formBuilder.group({
        personalInfo: mocUserProfile.personalInfo,
        credentials: mocUserProfile.credentials,
        addresses: mocUserProfile.addresses,
        phones: mocUserProfile.phones
      });
    }, 0);
  }
}
