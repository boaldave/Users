import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlValueAccessor } from 'src/app/core/forms/BaseControlValueAccessor';
import { IProfileAddress } from '../model';

@Component({
  selector: 'app-profile-address',
  templateUrl: './profile-address.component.html',
  styleUrls: ['./profile-address.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProfileAddressComponent),
      multi: true
    }
  ]
})
export class ProfileAddressComponent
  extends BaseControlValueAccessor<IProfileAddress>
  implements ControlValueAccessor, OnInit {

  addressFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    super();

    this.addressFormGroup = formBuilder.group({
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
    });

    this.addressFormGroup.valueChanges.subscribe(val => {
      this.value = val;
      this.onChange(val);
    });
  }

  ngOnInit(): void {
  }

  writeValue(value: IProfileAddress): void {
    this.value = value;
    this.addressFormGroup.patchValue(value);
  }
}

