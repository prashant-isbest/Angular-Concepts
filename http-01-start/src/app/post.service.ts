import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from "@angular/common/http";
import { post } from "./post.model";
import { map, tap } from "rxjs/operators";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class PostsService {
  errorSubject = new Subject<string>();
  constructor(private http: HttpClient) {}
  createAndStorePost(postData: post) {
    this.http
      .post<{ name: string }>(
        "https://http-angular-f8955-default-rtdb.firebaseio.com/post.json",
        postData
      )
      .subscribe(
        (responeData) => {
          console.log(responeData);
        },
        (error) => {
          this.errorSubject.next(error.message);
        }
      );
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append("print", "pretty");

    return this.http
      .get<{ [key: string]: post }>(
        "https://http-angular-f8955-default-rtdb.firebaseio.com/post.json",
        {
          headers: new HttpHeaders({ "custom-header": "hi" }),
          params: searchParams,
        }
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

  deletePost() {
    return this.http
      .delete(
        "https://http-angular-f8955-default-rtdb.firebaseio.com/post.json",
        {
          observe: "events",
        }
      )
      .pipe(
        tap((event) => {
          if (event.type == HttpEventType.Sent) {
            console.log(event);
            console.log(
              "preflight options sent woah waiting for the response to come"
            );
          }
          if (event.type == HttpEventType.Response) {
            console.log(event);
            console.log("Yeaha!! full respone received");
          }
        })
      );
  }
}
