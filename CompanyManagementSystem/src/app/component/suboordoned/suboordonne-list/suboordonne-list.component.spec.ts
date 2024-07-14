import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuboordonneListComponent } from './suboordonne-list.component';

describe('SuboordonneListComponent', () => {
  let component: SuboordonneListComponent;
  let fixture: ComponentFixture<SuboordonneListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuboordonneListComponent]
    });
    fixture = TestBed.createComponent(SuboordonneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
