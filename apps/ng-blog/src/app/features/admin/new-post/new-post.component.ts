import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Post, ContentType } from '@ng-blog/domain';
import { NewPostPresenter } from './new-post.presenter';

@Component({
  selector: 'app-new-post-ui',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  newContentControl = new FormControl(ContentType.TEXT);
  ContentType = ContentType;
  preview = false;
  previewPost: Post;

  constructor(public presenter: NewPostPresenter) { }

  ngOnInit(): void {
    this.presenter.initNewPostForm();
  }

  addContent(index: number): void {
    this.presenter.addContent(this.newContentControl.value, index)
  }

  expandTextarea(event: Event): void {
    (event.target as HTMLTextAreaElement).style.height = "34px";
    (event.target as HTMLTextAreaElement).style.height = (event.target as HTMLTextAreaElement).scrollHeight + "px";
  }

  get postObject(): Post {
    const newPostObject = JSON.parse(JSON.stringify(this.presenter.newPost.value));
    newPostObject.date = new Date(new Date(newPostObject.date).setHours(12));

    // convert comma separated tags into array
    newPostObject.tags = newPostObject.tags.split(',');
    newPostObject.tags.forEach((tag: string) => tag.trim());

    // convert code string into array
    newPostObject.body.forEach((content: any) => {
      if (content.type === ContentType.CODE) {
        content.code = content.code.split('\n');
      }
    });

    return newPostObject as Post;
  }

  printPost(): void {
    console.log(this.postObject);
  }

  togglePreview(): void {
    this.previewPost = this.preview? this.previewPost : this.postObject;
    this.preview = !this.preview
  }

}
