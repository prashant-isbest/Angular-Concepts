import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elref: ElementRef, private myrenderer: Renderer2) {}
  @HostBinding("style.backgroundColor") backgroundColor: string = "transparent";
  ngOnInit() {
    // this.myrenderer.setStyle(
    //   this.elref.nativeElement,
    //   "backgroundColor",
    //   "lightgreen"
    // );
  }
  @HostListener("mouseenter") mouseover(eventData: Event) {
    this.backgroundColor = "lightgreen";
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.backgroundColor = "pink";
  }
}
