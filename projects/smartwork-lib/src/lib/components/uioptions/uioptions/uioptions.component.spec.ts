import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UIOptionsComponent } from './uioptions.component';

describe('UIOptionsComponent', () => {
  let component: UIOptionsComponent;
  let fixture: ComponentFixture<UIOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UIOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UIOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
