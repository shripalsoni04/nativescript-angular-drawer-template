import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

import { Button } from 'ui/button';
import { isAndroid } from 'platform';
import * as application from 'application';

declare const android: any;

/**
 * Android Only.
 *
 * Directive which removes border from the button when applied on android.
 */
@Directive({
  selector: '.borderless-btn'
})
export class BorderlessBtnDirective implements OnInit, OnDestroy {

  private nsBtn: Button;

  constructor(private _el: ElementRef) { }

  setBorderlessBackground() {
    let outValue = new android.util.TypedValue();
    application.android.context.getTheme().resolveAttribute(
      android.R.attr.selectableItemBackground, outValue, true
    );
    this.nsBtn.android.setBackgroundResource(outValue.resourceId);
  }

  ngOnInit() {
    if (isAndroid) {
      this.nsBtn = <Button>this._el.nativeElement;

      // if the view has already loaded - set immediately
      if (this.nsBtn.isLoaded) {
        this.setBorderlessBackground();
      }

      // Attach the setter for future loaded events
      this.nsBtn.on('loaded', () => { this.setBorderlessBackground(); });
    }
  }

  ngOnDestroy() {
    // Cleanup
    if (isAndroid) {
      this.nsBtn.off('loaded');
      this.nsBtn = undefined;
    }
  }
}
