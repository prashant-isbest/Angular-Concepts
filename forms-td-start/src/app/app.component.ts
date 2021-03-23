import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { NgForm, NgModel } from "@angular/forms";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  @ViewChild("f") signupForm: NgForm;
  @ViewChild("inputusername") inputuser: ElementRef;
  @ViewChild("email") email: NgModel;

  answer: string = "";

  ngAfterViewInit() {
    this.inputuser.nativeElement.focus();
  }
  suggestUserName() {
    const suggestedName = "Superuser";
    // this.signupForm.setValue({
    //   userdata: {
    //     username: suggestedName,
    //     email: "",
    //   },
    //   secret: "pet",
    //   questionAnswer: "",
    // });

    this.signupForm.form.patchValue({
      userdata: {
        username: suggestedName,
      },
    });
  }
  onSubmit() {
    console.log(this.signupForm);
    console.log(this.email);
  }
}
