
import { Directive, ElementRef, Renderer2, HostBinding,HostListener , Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHostBinding]'
})
export class HostBindingDirective implements OnInit {

  constructor(private element: ElementRef, private renderer:Renderer2) { 

  }

  @Input() defaultColor:string = 'transparent';
  @Input() highlightColor:string = 'yellow';
  @HostBinding('style.backgroundColor') background: string = this.defaultColor;
  @HostBinding('style.border') border:string = 'none';

  ngOnInit(){
    this.background = this.defaultColor;
  }

  @HostListener('mouseenter') onmouseover(){
    this.background = this.highlightColor;
    this.border = 'red 2px solid';
   }

   @HostListener('mouseleave') onmouseout(){
    this.background = this.defaultColor;
    this.border = 'none';
   }

}
