import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomStructural]'
})
export class CustomStructuralDirective {

  //1. What to add or remove
  //2. Where to add or remove

  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) { 

  }

  @Input() set appCustomStructural(condition: boolean){
    if(condition){
      this.viewContainer.createEmbeddedView(this.template);
    }
    else{
      this.viewContainer.clear();
    }
  }

}
