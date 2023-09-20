import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNavigationComponent } from './button-navigation.component';

describe('ButtonNavigationComponent', () => {
  let component: ButtonNavigationComponent;
  let fixture: ComponentFixture<ButtonNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonNavigationComponent]
    });
    fixture = TestBed.createComponent(ButtonNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
