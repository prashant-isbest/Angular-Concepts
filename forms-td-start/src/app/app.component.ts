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

  user = {
    username: "",
    email: "",
    question: "",
    answer: "",
  };

  submitted = false;

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
    this.submitted = true;
    this.user.username = this.signupForm.value.userdata.username;
    this.user.email = this.signupForm.value.userdata.email;
    this.user.question = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.signupForm.reset();
  }
}
