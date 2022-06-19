import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsPaginationComponent } from './cats-pagination.component';

describe('CatsPaginationComponent', () => {
  let component: CatsPaginationComponent;
  let fixture: ComponentFixture<CatsPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
