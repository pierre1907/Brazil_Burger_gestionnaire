import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesCmdClientComponent } from './pages-cmd-client.component';

describe('PagesCmdClientComponent', () => {
  let component: PagesCmdClientComponent;
  let fixture: ComponentFixture<PagesCmdClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesCmdClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesCmdClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
