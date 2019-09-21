import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

const DEFAULT_PRIMARY_COLOR = 'darkgreen';
const DEFAULT_CONTRAST_COLOR = 'lightgreen';
const DEFAULT_DECIMAL_PLACES = 0;

@Component({
  selector: 'ngx-ratio-bar',
  template: `
    <div class="base"
         [style.color]="quotaBackgroundColor"
         [style.backgroundColor]="baseBackgroundColor">
      <span class="quota"
            [style.color]="quotaTextColor"
            [style.backgroundColor]="quotaBackgroundColor"
            [style.width]="(value * 100) + '%'">
        <span class="text">{{quotaDisplayLabel}}</span>
      </span>
      <span class="contrast-text">{{quotaDisplayLabel}}</span>
    </div>
    <div *ngIf="endLabel"
         class="footer"
         [style.borderRight]="baseBackgroundColor ? '1px solid ' + baseBackgroundColor  : ''">
      <span class="end-label">{{endLabel}}</span>
    </div>
  `,
  styleUrls: ['./ngx-ratio-bar.component.css'],
})
export class NgxRatioBarComponent implements OnInit, OnChanges {


  /**
   * The color of the bar container.
   */
  @Input()
  baseBackgroundColor: string = DEFAULT_PRIMARY_COLOR;

  /**
   * The color of text displayed within the bar.
   */
  @Input()
  quotaTextColor: string = DEFAULT_PRIMARY_COLOR;

  /**
   * The color of the bar itself.
   *
   * This should contrast with {@link baseBackgroundColor} to improve
   * visual accessibility.
   */
  @Input()
  quotaBackgroundColor: string = DEFAULT_CONTRAST_COLOR;

  /**
   * A Custom label to be used instead of the percentage value of {@link value}.
   */
  @Input()
  quotaLabel: string;

  /**
   * The unit interval -- a number between 0.0 and 1.0 -- that represents the size
   * of the bar in comparison to its base.
   */
  @Input()
  value = 0;

  /**
   * A label to be displayed at the far end of the bar; at the bottom of the component.
   */
  @Input()
  endLabel: string;

  /**
   * The quota label that will actually be displayed in the view.
   */
  quotaDisplayLabel = '0%';

  /**
   * Constructor
   */
  constructor() { }

  /**
   * ngOnInit
   */
  ngOnInit() {
    if (this.isEmptyString(this.baseBackgroundColor)) {
      this.baseBackgroundColor = DEFAULT_PRIMARY_COLOR;
    }
    if (this.isEmptyString(this.quotaTextColor)) {
      this.quotaTextColor = DEFAULT_PRIMARY_COLOR;
    }
    if (this.isEmptyString(this.quotaBackgroundColor)) {
      this.quotaBackgroundColor = DEFAULT_CONTRAST_COLOR;
    }
  }

  /**
   * ngOnChanges
   * @param changes SimpleChanges
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.updateValues();
  }

  /**
   * Update UI state according to input values.
   */
  updateValues() {
    this.validateValues();

    if (typeof this.quotaLabel === 'string') {
      this.quotaDisplayLabel = this.quotaLabel;
    } else {
      this.quotaDisplayLabel = (this.value * 100).toFixed(DEFAULT_DECIMAL_PLACES) + '%';
    }
  }

  /**
   * Validate input properties and reset them to default values if they
   * do not comply with requirements.
   */
  validateValues() {
    if (!this.isNumber(this.value) || isNaN(this.value) || this.value < 0) {
      this.value = 0;
    } else if (this.value > 1) {
      this.value = 1;
    }
  }

  /**
   * Check whether the provided parameter is an empty string.
   * @param subject The value to test
   * @return `true` if the parameter is a non-empty string; otherwise return `false`.
   */
  isEmptyString(subject: any): boolean {
    return !(typeof subject === 'string' && subject.length > 0);
  }

  /**
   * Check whether the provided parameter is a number.
   * @param subject The value to test
   * @return `true` if the parameter is a number; otherwise return `false`.
   */
  isNumber(subject: any): boolean {
    return typeof subject === 'number';
  }
}
