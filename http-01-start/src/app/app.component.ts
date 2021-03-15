import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

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
      .pipe(
        map((responsedData) => {
          const postArray = [];
          for (const key in responsedData) {
            postArray.push({ ...responsedData[key], id: key });
          }
          return postArray;
        })
      )
      .subscribe((posts) => {
        console.log(posts);
      });
  }

  onClearPosts() {
    // Send Http request
  }
}
