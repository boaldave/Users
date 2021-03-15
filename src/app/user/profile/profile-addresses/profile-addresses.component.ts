import { Component, OnInit, ChangeDetectionStrategy, Input, forwardRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlValueAccessor } from 'src/app/core/forms/BaseControlValueAccessor';
import { IProfileAddress } from '../model';

@Component({
  selector: 'app-profile-addresses',
  templateUrl: './profile-addresses.component.html',
  styleUrls: ['./profile-addresses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProfileAddressesComponent),
      multi: true
    }
  ]
})
export class ProfileAddressesComponent
  extends BaseControlValueAccessor<IProfileAddress[]>
  implements OnInit {

  addressesGroup: FormGroup;
  get addressesArr(): FormArray { return this.addressesGroup.get('addresses') as FormArray; }

  constructor(private formBuilder: FormBuilder) {
    super();

    this.addressesGroup = formBuilder.group({
      phones: formBuilder.array([
        {
          address1: '',
          address2: '',
          city: '',
          state: '',
          zip: ''
        }
      ])
    });

    this.addressesGroup.valueChanges.subscribe(val => {
      this.onChange(val)
      this.value = val.todos;
    })
  }

  ngOnInit(): void {
  }

  writeValue(value: IProfileAddress[]) {
    super.writeValue(value);

    // this sucks, maybe there's a better way, just trying to 
    // set the value of the array to the new value
    while (this.addressesArr.length > 0) { this.addressesArr.removeAt(0); }
    value.forEach(address => this.addressesArr.push(this.formBuilder.control(address)));
  }

  newAddress() {
    this.writeValue(this.value.concat({
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: ''
    }));
  }


}
