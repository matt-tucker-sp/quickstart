import { Component, Inject } from '@angular/core';
import { StringUtilsService } from 'string-utils';

@Component({
    selector: 'my-app',
    template: `<h1>{{ title }}</h1>`
})
export class AppComponent {
    private stringUtils : StringUtilsService;
    public title : string;

    constructor(@Inject(StringUtilsService) stringUtils : StringUtilsService) {

        let spaceString = 'This String has some SPACES';

        this.stringUtils = stringUtils;

        this.title = `"${spaceString}" is now magically  "${this.stringUtils.convertToUnderscoreCase(spaceString)}"`;
    }
}