import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusNavComponent } from './status-nav.component';

describe('StatusNavComponent', () => {
  let component: StatusNavComponent;
  let fixture: ComponentFixture<StatusNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
