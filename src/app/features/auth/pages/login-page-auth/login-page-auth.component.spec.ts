import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageAuthComponent } from './login-page-auth.component';

describe('LoginPageAuthComponent', () => {
  let component: LoginPageAuthComponent;
  let fixture: ComponentFixture<LoginPageAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPageAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
