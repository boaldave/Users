import { Component, OnInit, ChangeDetectionStrategy, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormGroup, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlValueAccessor } from 'src/app/core/forms/BaseControlValueAccessor';
import { ICredentials } from '../model';

@Component({
  selector: 'app-profile-credentials',
  templateUrl: './profile-credentials.component.html',
  styleUrls: ['./profile-credentials.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProfileCredentialsComponent),
      multi: true
    }
  ]
})
export class ProfileCredentialsComponent extends BaseControlValueAccessor<ICredentials>
  implements ControlValueAccessor, OnInit {

  credentialsFormGroup: FormGroup;

  constructor(private $formBuilder: FormBuilder) {
    super();

    this.credentialsFormGroup = $formBuilder.group({
      username: '',
      paswword: ''
    });

    this.credentialsFormGroup.valueChanges.subscribe(val => {
      this.value = val;
      this.onChange(val);
    });
  }

  ngOnInit(): void {
  }

  writeValue(value: ICredentials): void {
    this.value = value;
    this.credentialsFormGroup.patchValue(value);
  }
}