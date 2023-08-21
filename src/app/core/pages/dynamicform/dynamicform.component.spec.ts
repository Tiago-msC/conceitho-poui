import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicformComponent } from './dynamicform.component';

import {
  PoMenuModule,
  PoModule,
  PoPageModule,
  PoToolbarModule,
} from '@po-ui/ng-components';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DynamicformComponent', () => {
  let component: DynamicformComponent;
  let fixture: ComponentFixture<DynamicformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [DynamicformComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
