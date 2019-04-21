import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDeduplicateInterceptorComponent } from './ng-deduplicate-interceptor.component';

describe('NgDeduplicateInterceptorComponent', () => {
  let component: NgDeduplicateInterceptorComponent;
  let fixture: ComponentFixture<NgDeduplicateInterceptorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDeduplicateInterceptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDeduplicateInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
