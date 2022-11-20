import { ContentType } from './content-type.enum';

export interface Post {
  title: string;
  permalink: string;
  date: Date;
  tags?: string[];
  body: PostBody;
}

// Intentionally not exported
interface BaseContent {
  type: ContentType;
}

// Content type interfaces
export interface TextContent extends BaseContent {
  type: ContentType.TEXT,
  text: string;
}

export const getTextContent = (content: Content): TextContent => content as TextContent;

export interface ImageContent extends BaseContent {
  type: ContentType.IMAGE;
  url: string;
  alt: string;
  caption: string;
}

export const getImageContent = (content: Content): ImageContent => content as ImageContent;

export interface HeaderContent extends BaseContent {
  type: ContentType.HEADER;
  text: string;
  permalink: string;
}

export const getHeaderContent = (content: Content): HeaderContent => content as HeaderContent;

export interface SubheaderContent extends BaseContent {
  type: ContentType.SUBHEADER;
  text: string;
  permalink: string;
}

export const getSubheaderContent = (content: Content): SubheaderContent => content as SubheaderContent;

export interface CodeContent extends BaseContent {
  type: ContentType.CODE,
  code: string[];
}

export const getCodeContent = (content: Content): CodeContent => content as CodeContent;


// Union type for post content
export type Content = TextContent | ImageContent | HeaderContent | SubheaderContent | CodeContent;

export type PostBody = [TextContent, ...Content[]]

export const mockParagraph = (): string => {
  const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu est eget odio pretium vulputate nec a ante. Duis tristique malesuada turpis, eget iaculis orci pellentesque at. Nunc aliquam, orci non pulvinar facilisis, justo nisl lacinia mauris, ac venenatis sapien lorem ac ipsum. Nulla malesuada dolor id ultrices iaculis. Mauris ac dignissim lectus, sit amet rhoncus est. Phasellus a suscipit mauris. Praesent consequat libero quis erat ultrices eleifend id rhoncus neque. Suspendisse vel ligula ullamcorper, mollis orci non, tempor nisi. Phasellus magna tellus, fermentum non scelerisque nec, volutpat at mauris. Nullam eget lacinia mauris, interdum malesuada tortor.",
    "Vestibulum et dignissim enim. Aenean viverra pulvinar enim quis interdum. Aliquam ut vehicula mi, ut tincidunt arcu. Curabitur at lobortis diam. Nulla risus leo, fringilla non leo a, convallis pretium urna. Mauris sed massa massa. Ut maximus, metus non posuere malesuada, velit justo pretium augue, sit amet sodales purus nibh luctus eros. Pellentesque et porttitor arcu. Nunc sed tincidunt dui. Phasellus eu sollicitudin mi. Nunc eleifend ut erat eu vehicula. Aliquam nec purus risus. Phasellus a neque sodales, feugiat tortor vel, scelerisque diam. Mauris vel lobortis tortor.",
    "Praesent sit amet blandit tellus. Integer accumsan ante eu diam semper ultrices. Nunc bibendum quis ex nec consequat. Nunc vehicula diam at sem consequat sagittis. Pellentesque ac sem in turpis lacinia fermentum ornare non nunc. Morbi maximus massa in consectetur consequat. Duis ultrices tempor leo, vitae eleifend ipsum dapibus id. Nunc eget ligula id justo facilisis vestibulum.",
    "Donec congue, massa non sodales finibus, tellus ex euismod quam, quis tempor urna dui in purus. Aliquam ut porttitor est. Nam consequat odio eget erat aliquam varius. Nunc venenatis accumsan dolor, et sodales quam gravida vel. Aliquam sed ex vestibulum, commodo nunc malesuada, condimentum lectus. Nunc et molestie augue, eget venenatis ante. Sed condimentum vehicula elit, id facilisis erat mattis at. Aliquam nec eleifend nulla. Maecenas consequat orci non sapien gravida, luctus facilisis arcu tincidunt. Aliquam fringilla pulvinar bibendum. Maecenas molestie felis ex, vel cursus mauris viverra a. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    "Aliquam commodo ullamcorper tincidunt. Nunc sed mollis lectus, et pellentesque sapien. Vivamus accumsan hendrerit justo at iaculis. Vivamus diam sem, mollis eu magna quis, laoreet finibus sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ac lacinia ante. In cursus nisl a egestas aliquet. In facilisis elementum neque, sit amet porta sapien posuere ut. Aenean interdum fringilla fringilla. Fusce nec metus ut lacus feugiat lacinia eu vel dui."
  ];

  const randomNum = Math.floor(Math.random() * paragraphs.length);

  return paragraphs[randomNum];
}

export const mockTextContent = (partial?: Partial<TextContent>): TextContent => ({
  type: ContentType.TEXT,
  text: mockParagraph(),
  ...partial
});

export const mockImageContent = (partial?: Partial<ImageContent>): ImageContent => ({
  type: ContentType.IMAGE,
  url: 'https://media.nature.com/lw1024/magazine-assets/d41586-022-01246-5/d41586-022-01246-5_20375184.jpg',
  alt: 'test alt text',
  caption: 'This is a caption.',
  ...partial
})

export const mockHeaderContent = (partial?: Partial<HeaderContent>): HeaderContent => ({
  type: ContentType.HEADER,
  text: 'Test Header',
  permalink: 'mock-header',
  ...partial
});

export const mockSubheaderContent = (partial?: Partial<SubheaderContent>): SubheaderContent => ({
  type: ContentType.SUBHEADER,
  text: 'Subheader',
  permalink: 'subheader',
  ...partial
});

export const mockCodeContent = (partial?: Partial<CodeContent>): CodeContent => ({
  type: ContentType.CODE,
  code: ['var x;', 'x = 25;', 'if (x > 0) {', '\tconsole.log(\'x is large.\');', '}'],
  ...partial
});

export const mockPost = (partial?: Partial<Post>): Post => ({
  title: 'Hello world',
  permalink: 'hello-world',
  date: new Date(),
  tags: ['code', 'chatty'],
  body: [mockTextContent()],
  ...partial
});
