import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

const DEFAULT_PRIMARY_COLOR = 'darkgreen';
const DEFAULT_CONTRAST_COLOR = 'lightgreen';
const DEFAULT_DECIMAL_PLACES = 0;

@Component({
  selector: 'ngx-ratio-bar',
  template: `
    <div class="base"
         [style.color]="ratioBackgroundColor"
         [style.backgroundColor]="baseBackgroundColor"
         [style.border]="showBorder === true ? '1px solid ' + ratioBackgroundColor : ''">
      <span class="ratio"
            [style.color]="ratioTextColor"
            [style.backgroundColor]="ratioBackgroundColor"
            [style.width]="(value * 100) + '%'">
        <span class="text">{{ratioDisplayLabel}}</span>
      </span>
      <span class="contrast-text">{{ratioDisplayLabel}}</span>
    </div>
    <div *ngIf="endLabel"
         class="footer"
         [style.borderRight]="'1px solid ' + (showBorder === true ? ratioBackgroundColor : baseBackgroundColor)">
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
  ratioTextColor: string = DEFAULT_PRIMARY_COLOR;

  /**
   * The color of the bar itself.
   *
   * This should contrast with {@link baseBackgroundColor} to improve
   * visual accessibility.
   */
  @Input()
  ratioBackgroundColor: string = DEFAULT_CONTRAST_COLOR;

  /**
   * A Custom label to be used instead of the percentage value of {@link value}.
   */
  @Input()
  ratioLabel: string;

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
   * Determine whether to display a border around the bar. By default, the border color
   * matches the bar color {@link ratioBackgroundColor}.
   */
  @Input()
  showBorder: boolean;

  /**
   * The ratio label that will actually be displayed in the view.
   */
  ratioDisplayLabel = '0%';

  /**
   * Constructor
   */
  constructor() { }

  /**
   * ngOnInit
   */
  ngOnInit() {
    if (isEmptyString(this.baseBackgroundColor)) {
      this.baseBackgroundColor = DEFAULT_PRIMARY_COLOR;
    }
    if (isEmptyString(this.ratioTextColor)) {
      this.ratioTextColor = DEFAULT_PRIMARY_COLOR;
    }
    if (isEmptyString(this.ratioBackgroundColor)) {
      this.ratioBackgroundColor = DEFAULT_CONTRAST_COLOR;
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

    if (typeof this.ratioLabel === 'string') {
      this.ratioDisplayLabel = this.ratioLabel;
    } else {
      this.ratioDisplayLabel = (this.value * 100).toFixed(DEFAULT_DECIMAL_PLACES) + '%';
    }
  }

  /**
   * Validate input properties and reset them to default values if they
   * do not comply with requirements.
   */
  validateValues() {
    if (!isValidNumber(this.value) || this.value < 0) {
      this.value = 0;
    } else if (this.value > 1) {
      this.value = 1;
    }
  }
}

/**
 * Check whether the provided parameter is an empty string.
 * @param subject The value to test
 * @return `true` if the parameter is a non-empty string; otherwise return `false`.
 */
export const isEmptyString = (subject: any) => {
  return !(typeof subject === 'string' && subject.length > 0);
};

/**
 * Check whether the provided parameter is a number.
 * @param subject The value to test
 * @return `true` if the parameter is a number; otherwise return `false`.
 */
export const isValidNumber = (subject: any) => {
  return typeof subject === 'number' && !isNaN(subject) && isFinite(subject);
};
