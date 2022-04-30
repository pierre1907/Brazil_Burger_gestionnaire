import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBurgerComponent } from './page-burger.component';

describe('PageBurgerComponent', () => {
  let component: PageBurgerComponent;
  let fixture: ComponentFixture<PageBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBurgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
