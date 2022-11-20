import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ContentType } from '@ng-blog/domain';

@Injectable({
  providedIn: 'root'
})
export class NewPostPresenter {
  public newPost: FormGroup;

  initNewPostForm(): void {
    this.newPost = new FormGroup({
      title: new FormControl(),
      permalink: new FormControl(),
      date: new FormControl(new Date().toISOString().split('T')[0]),
      tags: new FormControl(),
      body: new FormArray([this.getNewTextContent()])
    });
  }

  addContent(type: ContentType, index: number): void {
    switch(type) {
      case ContentType.TEXT:
        this.postBody.insert(index, this.getNewTextContent());
        break;
      case ContentType.HEADER:
        this.postBody.insert(index, this.getNewHeaderContent());
        break;
      case ContentType.SUBHEADER:
        this.postBody.insert(index, this.getNewSubheaderContent());
        break;
      case ContentType.IMAGE:
        this.postBody.insert(index, this.getNewImageContent());
        break;
      case ContentType.CODE:
        this.postBody.insert(index, this.getNewCodeContent());
        break;
    }
  }

  removeContent(index: number): void {
    this.postBody.removeAt(index);
  }

  get postBody(): FormArray {
    return this.newPost.get('body') as FormArray;
  }

  getContentGroup(index: number): FormGroup {
    return this.postBody.at(index) as FormGroup;
  }

  getNewTextContent(): FormGroup {
    return new FormGroup({
      type: new FormControl(ContentType.TEXT),
      text: new FormControl('')
    });
  }

  getNewHeaderContent(): FormGroup {
    return new FormGroup({
      type: new FormControl(ContentType.HEADER),
      text: new FormControl(),
      permalink: new FormControl()
    });
  }

  getNewSubheaderContent(): FormGroup {
    return new FormGroup({
      type: new FormControl(ContentType.SUBHEADER),
      text: new FormControl(),
      permalink: new FormControl()
    });
  }

  getNewImageContent(): FormGroup {
    return new FormGroup({
      type: new FormControl(ContentType.IMAGE),
      url: new FormControl(),
      alt: new FormControl(),
      caption: new FormControl(),
    });
  }

  getNewCodeContent(): FormGroup {
    return new FormGroup({
      type: new FormControl(ContentType.CODE),
      code: new FormControl(),
    });
  }
}
