import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicformComponent } from './dynamicform.component';

import {
  PoModule,
} from '@po-ui/ng-components';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('DynamicformComponent', () => {
  let component: DynamicformComponent;
  let fixture: ComponentFixture<DynamicformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoModule, RouterTestingModule, FormsModule, HttpClientTestingModule],
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
