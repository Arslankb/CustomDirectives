import { Directive, ElementRef, Renderer2, Input } from '@angular/core';


@Directive({
  selector: '[appAppClass]'
})
export class AppClassDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) {

   }

   @Input() set display(value:Object){
    let entries = Object.entries(value);
    for(let entry of entries){
      if(entry[1]){
        this.renderer.addClass(this.element.nativeElement, entry[0])
      }
    }
    
   }

}
