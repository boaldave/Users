import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileAddressComponent } from './profile/profile-address/profile-address.component';
import { ProfilePersonalInfoComponent } from './profile/profile-personal-info/profile-personal-info.component';
import { ProfilePhoneComponent } from './profile/profile-phone/profile-phone.component';
import { ProfileCredentialsComponent } from './profile/profile-credentials/profile-credentials.component';
import { ProfileAddressesComponent } from './profile/profile-addresses/profile-addresses.component';
import { ProfilePhonesComponent } from './profile/profile-phones/profile-phones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileAddressComponent,
    ProfilePersonalInfoComponent,
    ProfilePhoneComponent, ProfileCredentialsComponent, ProfileAddressesComponent, ProfilePhonesComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
