import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCmdClientComponent } from './details-cmd-client.component';

describe('DetailsCmdClientComponent', () => {
  let component: DetailsCmdClientComponent;
  let fixture: ComponentFixture<DetailsCmdClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCmdClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCmdClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
