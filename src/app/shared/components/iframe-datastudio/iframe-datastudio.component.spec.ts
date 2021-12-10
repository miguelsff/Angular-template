import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeDatastudioComponent } from './iframe-datastudio.component';

describe('IframeDatastudioComponent', () => {
  let component: IframeDatastudioComponent;
  let fixture: ComponentFixture<IframeDatastudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IframeDatastudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IframeDatastudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
