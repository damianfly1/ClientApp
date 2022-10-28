import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubforumDetailComponent } from './subforum-detail.component';

describe('SubforumDetailComponent', () => {
  let component: SubforumDetailComponent;
  let fixture: ComponentFixture<SubforumDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubforumDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubforumDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
