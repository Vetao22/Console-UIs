import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartMainContentComponent } from './start-main-content.component';

describe('StartMainContentComponent', () => {
  let component: StartMainContentComponent;
  let fixture: ComponentFixture<StartMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartMainContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
