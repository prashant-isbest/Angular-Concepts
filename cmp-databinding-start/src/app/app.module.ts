import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ServerElementComponent } from "./server-element/server-element.component";
import { CockpitComponent } from "./cockpit/cockpit.component";
import { BasicHighlightDirective } from "./directives/basic-highlight.directive";
import { BetterHighlightDirective } from "./directives/better-highlight.directive";

@NgModule({
  declarations: [
    AppComponent,
    ServerElementComponent,
    CockpitComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
