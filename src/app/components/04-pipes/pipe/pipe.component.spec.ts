import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeComponent } from './pipe.component';
import { MockCreditCardPipe } from '../../mocks/pipes.mocks.html';

describe('PipeComponent', () => {
  let component: PipeComponent;
  let fixture: ComponentFixture<PipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipeComponent, MockCreditCardPipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
