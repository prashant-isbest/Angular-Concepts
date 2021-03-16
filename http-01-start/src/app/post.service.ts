import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { post } from "./post.model";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class PostsService {
  constructor(private http: HttpClient) {}
  createAndStorePost(postData: post) {
    this.http
      .post<{ name: string }>(
        "https://http-angular-f8955-default-rtdb.firebaseio.com/post.json",
        postData
      )
      .subscribe((responeData) => {
        console.log(responeData);
      });
  }

  fetchPosts() {
    return this.http
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
      );
  }
}
