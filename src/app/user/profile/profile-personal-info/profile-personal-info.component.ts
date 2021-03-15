import { Component, OnInit, ChangeDetectionStrategy, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlValueAccessor } from 'src/app/core/forms/BaseControlValueAccessor';
import { IPersonalInfo } from '../model';

@Component({
  selector: 'app-profile-personal-info',
  templateUrl: './profile-personal-info.component.html',
  styleUrls: ['./profile-personal-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProfilePersonalInfoComponent),
      multi: true
    }
  ]
})
export class ProfilePersonalInfoComponent
  extends BaseControlValueAccessor<IPersonalInfo>
  implements ControlValueAccessor, OnInit {

  @Input() model: any;

  personalInfoFormGroup: FormGroup;

  constructor(private $formBuilder: FormBuilder) {
    super();

    this.personalInfoFormGroup = $formBuilder.group({
      firstName: '',
      lastName: ''
    });

    this.personalInfoFormGroup.valueChanges.subscribe(val => {
      this.value = val;
      this.onChange(val);
    });
  }

  ngOnInit(): void {
  }

  writeValue(value: IPersonalInfo): void {
    this.value = value;
    this.personalInfoFormGroup.patchValue(value);
  }
}
