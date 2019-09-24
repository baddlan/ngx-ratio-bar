import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ratioValue = 0.17;
  ratioLabel = '';
  endLabel = 'Quota (1.0 GB)';
  baseBackgroundColor = '#fbe6be';
  ratioBackgroundColor = '#d08906';
  ratioTextColor = 'white';
  showBorder = true;

  // // // Code blocks

  cbUsageDeclaration = unindent(`
  import { NgxRatioBarModule } from 'ngx-ratio-bar';
  ...
  @NgModule({
    declarations: [AppComponent],
    imports: [
      ...
      NgxRatioBarModule,
      ...
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule {}
  `);

  cbUsageInTemplates1 = unindent(`
  <ngx-ratio-bar [value]="0.67"></ngx-ratio-bar>
  `);

  cbUsageInTemplates2 = unindent(`
  <ngx-ratio-bar [ratioLabel]="'My Custom Label'"></ngx-ratio-bar>
  `);

  cbUsageInTemplates3 = unindent(`
  <ngx-ratio-bar [endLabel]="'À la fin'"></ngx-ratio-bar>
  `);

  cbUsageInTemplates4 = unindent(`
  <ngx-ratio-bar [baseBackgroundColor]="'blue'"
                 [ratioBackgroundColor]="'#ddccff'"
                 [ratioTextColor]="'white'"
                 [showBorder]="false">
  </ngx-ratio-bar>
  `);

  /**
   * Constructor
   */
  constructor() {

  }
}

/**
 * Un-indent a string {@param str} by a given number of leading {@param spaces}.
 * @param str String to be un-indented.
 * @param spaces Number of leading spaces to omit.
 * @return The un-indented string.
 */
const unindent = (str: string, spaces: number = 2): string => {
  const regex = new RegExp('\\n\\s{' + spaces + '}', 'g');
  return str.replace(regex, '\n').trim();
};
