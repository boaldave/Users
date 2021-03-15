import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { BaseControlValueAccessor } from 'src/app/core/forms/BaseControlValueAccessor';
import { IProfilePhone } from '../model';

@Component({
  selector: 'app-profile-phones',
  templateUrl: './profile-phones.component.html',
  styleUrls: ['./profile-phones.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePhonesComponent
  extends BaseControlValueAccessor<IProfilePhone[]>
  implements OnInit {

  phonesGroup: FormGroup;
  get phonesArr(): FormArray { return this.phonesGroup.get('phones') as FormArray; }

  constructor(private formBuilder: FormBuilder) {
    super();

    this.phonesGroup = formBuilder.group({
      phones: formBuilder.array([
        {
          number: '',
          phoneType: '',
          isPrimary: false
        }
      ])
    });

    this.phonesGroup.valueChanges.subscribe(val => {
      this.onChange(val)
      this.value = val.todos;
    })
  }

  ngOnInit(): void {
  }

  writeValue(phones: IProfilePhone[]) {
    super.writeValue(phones);

    // this sucks, maybe there's a better way, just trying to 
    // set the value of the array to the new value
    while (this.phonesArr.length > 0) { this.phonesArr.removeAt(0); }
    phones.forEach(phone => this.phonesArr.push(this.formBuilder.control(phone)));
  }

  newPhone() {
    this.writeValue(this.value.concat(
      {
        number: '',
        phoneType: '',
        isPrimary: false
      }));
  }
}
