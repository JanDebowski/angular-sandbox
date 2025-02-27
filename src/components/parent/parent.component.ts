import {NgTemplateOutlet} from '@angular/common';
import {Component, contentChild, contentChildren, effect, input, TemplateRef, viewChild} from '@angular/core';
import {ChildComponent} from "../child/child.component";

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.scss'
})
export class ParentComponent {
    contentChild = contentChildren(ChildComponent);

    #bullshit = effect(() => {
        console.log("Hi", this.contentChild().length);
    });
}
