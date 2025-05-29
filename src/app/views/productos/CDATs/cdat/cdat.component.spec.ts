import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDATComponent } from './cdat.component';

describe('CDATComponent', () => {
  let component: CDATComponent;
  let fixture: ComponentFixture<CDATComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CDATComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CDATComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
