import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePhonesComponent } from './profile-phones.component';

describe('ProfilePhonesComponent', () => {
  let component: ProfilePhonesComponent;
  let fixture: ComponentFixture<ProfilePhonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePhonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
