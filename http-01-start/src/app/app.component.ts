import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { post } from "./post.model";

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
      .get<{ [key: string]: post }>(
        "https://http-angular-f8955-default-rtdb.firebaseio.com/post.json"
      )
      .pipe(
        map((responsedData) => {
          const postArray: post[] = [];
          for (const key in responsedData) {
            postArray.push({ ...responsedData[key], id: key });
          }
          return postArray;
        })
      )
      .subscribe((posts) => {
        console.log(posts[0].id);
        console.log(posts[0].content);
      });
  }

  onClearPosts() {
    // Send Http request
  }
}
