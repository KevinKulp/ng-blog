import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import type { Post } from '@ng-blog/domain';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  loadPosts(): Observable<{ posts: Post[] }> {
    return this.http.get<{ posts: [] }>('/api/post').pipe(delay(2000));
  }

  loadPost(permalink: string): Observable<Post> {
    return this.http.get<Post>(`/api/post/${permalink}`).pipe(delay(2000));
  }
}
