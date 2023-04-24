import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBox]'
})
export class BoxDirective implements OnInit{

  constructor(private element:ElementRef , private renderer:Renderer2) { }

  ngOnInit(){
    this.renderer.addClass(this.element.nativeElement, 'box')
  }

}
