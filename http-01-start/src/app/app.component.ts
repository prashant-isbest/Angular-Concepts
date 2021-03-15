import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post(
        "https://http-angular-f8955-default-rtdb.firebaseio.com/post.json",
        postData
      )
      .subscribe((responeData) => {
        console.log(responeData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.http
      .get("https://http-angular-f8955-default-rtdb.firebaseio.com/post.json")
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  onClearPosts() {
    // Send Http request
  }
}
