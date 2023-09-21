import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';
import { FormsModule } from '@angular/forms';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the sum correctly', () => {
    component.num1 = 5;
    component.num2 = 3;
    component.calculateSum();
    expect(component.result).toEqual(8);
  });

  // Add more tests here
  it('should initialize num1 and num2 to 0', () => {
    expect(component.num1).toEqual(0);
    expect(component.num2).toEqual(0);
  });

  it('should have a null result initially', () => {
    expect(component.result).toBeNull();
  });

  it('should handle negative numbers correctly', () => {
    component.num1 = -5;
    component.num2 = 3;
    component.calculateSum();
    expect(component.result).toEqual(-2);
  });

  it('should handle decimal numbers correctly', () => {
    component.num1 = 2.5;
    component.num2 = 1.5;
    component.calculateSum();
    expect(component.result).toEqual(4);
  });

  it('should handle zero correctly', () => {
    component.num1 = 0;
    component.num2 = 0;
    component.calculateSum();
    expect(component.result).toEqual(0);
  });

  it('should handle a null result when not calculated', () => {
    component.num1 = 5;
    component.num2 = 3;
    expect(component.result).toBeNull();
  });

  it('should round the result to two decimal places', () => {
    component.num1 = 1.1;
    component.num2 = 2.2;
    component.calculateSum();
    expect(component.result).toBeCloseTo(3.3, 2);
  });

});
