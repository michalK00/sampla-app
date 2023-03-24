import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchesHeaderComponent } from './researches-header.component';

describe('ResearchesHeaderComponent', () => {
  let component: ResearchesHeaderComponent;
  let fixture: ComponentFixture<ResearchesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchesHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
