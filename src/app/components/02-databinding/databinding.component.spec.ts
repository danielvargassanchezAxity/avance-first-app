import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingComponent } from './databinding.component';
import { MockCreditCardPipe } from '../mocks/pipes.mocks.html';

describe('DatabindingComponent', () => {
  let component: DatabindingComponent;
  let fixture: ComponentFixture<DatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DatabindingComponent,
        MockCreditCardPipe
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should changeButtonStatus', () => {
    component.disabledButton = true;
    component.changeButtonStatus();
    expect(component.disabledButton).toBeFalse();
  });
  it('should clearInput', () => {
    component.inputValue = "hola";
    component.clearInput();
    expect(component.inputValue).toBe("");
  });
});
