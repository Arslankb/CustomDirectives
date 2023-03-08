import { Directive, ElementRef, Renderer2, Input } from '@angular/core';


@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { }

  @Input() set setStyle(styles:Object){
    let enrties = Object.entries(styles);

    for(let entry of enrties){
      this.renderer.setStyle(this.element.nativeElement, entry[0], entry[1]);
    }
  }

}
