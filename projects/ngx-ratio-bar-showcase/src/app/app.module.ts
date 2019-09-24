import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxRatioBarModule } from '../../../ngx-ratio-bar/src/lib/ngx-ratio-bar.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { HighlightModule } from 'ngx-highlightjs';

import bash from 'highlight.js/lib/languages/bash';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';

/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */
export function hljsLanguages() {
  return [
    { name: 'bash', func: bash },
    { name: 'xml', func: xml },
    { name: 'scss', func: scss },
    { name: 'typescript', func: typescript },
  ];
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxRatioBarModule,
    ColorPickerModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
