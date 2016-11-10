import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'contact',
    templateUrl: 'modules/contact/contact.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
    text: string = 'Contact Page';
}
