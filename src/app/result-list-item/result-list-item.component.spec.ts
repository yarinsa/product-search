import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultListItemComponent } from './result-list-item.component';

describe('ProductListItemComponent', () => {
  let component: ResultListItemComponent;
  let fixture: ComponentFixture<ResultListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultListItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
