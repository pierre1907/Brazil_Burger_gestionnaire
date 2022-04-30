import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComplementComponent } from './detail-complement.component';

describe('DetailComplementComponent', () => {
  let component: DetailComplementComponent;
  let fixture: ComponentFixture<DetailComplementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailComplementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
