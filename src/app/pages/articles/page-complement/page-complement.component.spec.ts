import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComplementComponent } from './page-complement.component';

describe('PageComplementComponent', () => {
  let component: PageComplementComponent;
  let fixture: ComponentFixture<PageComplementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageComplementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
