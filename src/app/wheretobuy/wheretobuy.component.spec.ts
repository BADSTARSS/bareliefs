import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheretobuyComponent } from './wheretobuy.component';

describe('WheretobuyComponent', () => {
  let component: WheretobuyComponent;
  let fixture: ComponentFixture<WheretobuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheretobuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WheretobuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
