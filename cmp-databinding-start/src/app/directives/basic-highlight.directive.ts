import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appBasicHighlight]",
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elref: ElementRef) {}

  ngOnInit() {
    this.elref.nativeElement.style.backgroundColor = "turquoise";
  }
}
