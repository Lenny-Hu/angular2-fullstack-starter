import {TestComponentBuilder, describe, expect, inject, it} from 'angular2/testing';
import {Component} from 'angular2/angular2';

import {About} from './about';

@Component({
    selector: 'test-cmp',
    directives: [About],
    template: '<div><about></about></div>'
})
class TestComponent {
}

describe('About Component', () => {
    it('should work', inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
            .then((rootTC) => {
                rootTC.detectChanges();

                let instance = rootTC.debugElement.componentViewChildren[0].componentInstance;
                let element = rootTC.debugElement.componentViewChildren[0].nativeElement;

                expect(instance).toBeDefined();
                expect(element).toBeDefined();

                expect(instance.title).toEqual('About Page');
            });
    }));
});