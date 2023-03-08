import { ElementRef, Renderer2, OnInit } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appHeighlight]'
})
export class HeighlightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#F1948A');
    this.renderer.addClass(this.element.nativeElement, 'container');
    this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is Example Directive')
  }

}
