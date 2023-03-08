import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[setBackground]'
})
export class setBackgroundDirective{
    constructor(element: ElementRef){
        element.nativeElement.style.backgroundColor = '#C8E6C9';
    }
    
}