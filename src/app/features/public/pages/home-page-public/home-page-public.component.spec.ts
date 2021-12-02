import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePagePublicComponent } from './home-page-public.component';

describe('HomePagePublicComponent', () => {
  let component: HomePagePublicComponent;
  let fixture: ComponentFixture<HomePagePublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePagePublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePagePublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
