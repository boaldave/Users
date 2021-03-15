import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ControlValueAccessor, FormGroup, FormBuilder } from '@angular/forms';
import { BaseControlValueAccessor } from 'src/app/core/forms/BaseControlValueAccessor';
import { IProfilePhone } from '../model';

@Component({
  selector: 'app-profile-phone',
  templateUrl: './profile-phone.component.html',
  styleUrls: ['./profile-phone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePhoneComponent
  extends BaseControlValueAccessor<IProfilePhone>
  implements ControlValueAccessor, OnInit {

  phoneGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    super();

    this.phoneGroup = formBuilder.group({
      number: '',
      phoneType: 'cell',
      isPrimary: false
    });

    this.phoneGroup.valueChanges.subscribe(val => {
      this.value = val;
      this.onChange(val);
    });
  }

  ngOnInit(): void {
  }

  writeValue(value: IProfilePhone): void {
    this.value = value;
    this.phoneGroup.patchValue(value);
  }
}
