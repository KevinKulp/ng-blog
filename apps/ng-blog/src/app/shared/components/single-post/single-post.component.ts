import { ViewportScroller } from '@angular/common';
import { Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Content,
  ContentType,
  getCodeContent,
  getHeaderContent,
  getImageContent, getSubheaderContent,
  getTextContent,
  Post
} from '@ng-blog/domain';

@Component({
  selector: 'app-single-post-ui',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
  // allowing styles to impact innerHTML
  encapsulation: ViewEncapsulation.None
})
export class SinglePostComponent implements OnChanges{
  @Input() post: Post;
  @Input() preview = false;

  ContentType = ContentType;
  getImageContent = getImageContent;
  getHeaderContent = getHeaderContent;
  getSubheaderContent = getSubheaderContent;
  getCodeContent = getCodeContent;

  constructor(private viewportScroller: ViewportScroller, private route: ActivatedRoute) { }

  ngOnChanges(): void {
    // scroll to deep link, if there is one
    setTimeout(() => {this.viewportScroller.scrollToAnchor(this.route.snapshot.fragment)}, 100);
  }

  getTextContentHtml(content: Content) {
    let text = getTextContent(content).text;

    // replace emphasis tags
    text = text.replace(/\[e\]/g, '<span class="text-content-emphasis">');
    text = text.replace(/\[\/e\]/g, '</span>');

    // replace anchor tags
    text = text.replace(/\[\/a\]/g, '</a>');
    text = text.replace(/\[a=(?=(.+))/g, '<a class="text-content-link" target="_blank" href="');
    text = text.replace(/(?!(\.+))\]/g, '">');

    return text;
  }

}
