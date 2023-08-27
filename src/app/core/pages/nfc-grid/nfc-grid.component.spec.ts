import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfcGridComponent } from './nfc-grid.component';

describe('NfcGridComponent', () => {
  let component: NfcGridComponent;
  let fixture: ComponentFixture<NfcGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NfcGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NfcGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
