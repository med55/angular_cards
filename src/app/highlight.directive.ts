import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

@Input() color:string = 'lightpink';

  constructor(private element:ElementRef) {  }

  @HostListener('mouseenter') addlighgt(){
    this.element.nativeElement.style.backgroundColor = this.color;
  }
  @HostListener('mouseleave') removelighgt(){
    this.element.nativeElement.style.backgroundColor = null;
    
  }
}
