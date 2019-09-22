import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';

import { NgxRatioBarComponent, isEmptyString, isValidNumber } from './ngx-ratio-bar.component';

describe('NgxRatioBarComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;
  let component: NgxRatioBarComponent;
  let hostElement: any;
  let componentElement: any;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [ NgxRatioBarComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    hostElement = fixture.nativeElement;
    component = hostComponent.ngxRatioBarComponent;
    componentElement = hostElement.querySelector('ngx-ratio-bar');
    fixture.detectChanges();
  });

  /* * * * * * * * *
   * Isolated test * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * * * * * * * * */

  it('should exist.', () => {
    expect(component).toBeTruthy();
  });

  it('should treat empty values as empty.', () => {
    expect(isEmptyString('')).toBeTruthy();
    expect(isEmptyString(null)).toBeTruthy();
    expect(isEmptyString(undefined)).toBeTruthy();
  });

  it('should recognize valid numbers.', () => {
    expect(isValidNumber(0)).toBeTruthy();
    expect(isValidNumber(0.51910)).toBeTruthy();
    expect(isValidNumber(-1005)).toBeTruthy();
    expect(isValidNumber(0x441)).toBeTruthy();
    expect(isValidNumber(6e-12)).toBeTruthy();
    expect(isValidNumber(NaN)).toBeFalsy();
    expect(isValidNumber(Infinity)).toBeFalsy();
  });

  /* * * * * * * * *
   * Shallow test * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * * * * * * * * */

  it('should have an initial label of `0%` if no custom label is provided.', () => {
    return expect(component.ratioDisplayLabel).toEqual('0%');
  });

  it('should validate and reset faulty input values.', () => {
    const validationTest = () => component.value >= 0 && component.value <= 1.0;

    hostComponent.value = undefined;
    fixture.detectChanges();
    expect(component.value).toEqual(0);

    hostComponent.value = null;
    fixture.detectChanges();
    expect(component.value).toEqual(0);

    hostComponent.value = 1.04;
    fixture.detectChanges();
    expect(component.value).toEqual(1);

    hostComponent.value = -1.9999;
    fixture.detectChanges();
    expect(component.value).toEqual(0);

    hostComponent.value = Math.random();
    fixture.detectChanges();
    expect(validationTest()).toBeTruthy();
  });

  it(`should have (0) decimal places in the displayed value.`, () => {
    hostComponent.value = 0.584665322;
    fixture.detectChanges();
    expect(componentElement.querySelector('.base .ratio .text').innerText).toBe('58%');
  });

  it('should display the custom label, instead of the percent value, when one is provided.', () => {
    hostComponent.value = 0.64;
    fixture.detectChanges();
    expect(componentElement.querySelector('.base .ratio .text').innerText).toBe('64%');

    hostComponent.label = 'My Custom Label';
    fixture.detectChanges();
    expect(componentElement.querySelector('.base .ratio .text').innerText).toBe('My Custom Label');
  });

  it('should display the end-label when one is provided.', () => {
    hostComponent.endLabel = 'My End Label';
    fixture.detectChanges();
    expect(componentElement.querySelector('.footer .end-label').innerText).toBe('My End Label');
  });
});

@Component({
  template: `<ngx-ratio-bar [value]="value"
                                [ratioLabel]="label"
                                [endLabel]="endLabel"></ngx-ratio-bar>`
})
class TestHostComponent {
  @ViewChild (NgxRatioBarComponent)
  ngxRatioBarComponent: NgxRatioBarComponent;

  value: number;
  label: string;
  endLabel: string;
}
