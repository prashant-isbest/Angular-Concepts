import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  @Input("appBetterHighlight") defaultColor: string = "transparent";
  @Input() highlightColor: string = "lightgreen";
  constructor(private elref: ElementRef, private myrenderer: Renderer2) {}

  @HostBinding("style.backgroundColor") backgroundColor: string = "transparent";

  ngOnInit() {
    // this.myrenderer.setStyle(
    //   this.elref.nativeElement,
    //   "backgroundColor",
    //   "lightgreen"
    // );
    this.backgroundColor = this.defaultColor;
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }
}
