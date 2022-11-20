import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post,
  mockCodeContent,
  mockHeaderContent,
  mockImageContent,
  mockPost,
  mockSubheaderContent,
  mockTextContent } from '@ng-blog/domain';
import { from, map, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { entityToPost, PostEntity, postToEntity } from './post-entity';

@Injectable()
export class PostService {
  constructor(@InjectRepository(PostEntity) private postRepository: Repository<PostEntity>) { }

  hydratePosts(): void {
    this.postRepository.clear().then(() => {
      const mavenPost = JSON.parse('{"title":"How to Setup Maven on Windows","permalink":"how-to-setup-maven-on-windows","date":"2018-01-17T17:00:00.000Z","tags":["java"],"body":[{"type":"TEXT","text":"Maven is a free tool developed by the Apache Software Foundation that can be used to simplify the build process and to manage dependencies for Java projects. Before you can take advantage of its features you’ll need to setup maven on your machine."},{"type":"SUBHEADER","text":"Download Maven","permalink":"download-maven"},{"type":"TEXT","text":"Before we can setup Maven you will need to download the archive from [a=https://maven.apache.org/download.cgi]Apache’s official download page[/a]. There are a few different setup options but the easiest way is to download the binary zip archive. This version is already compiled and ready for you to use. You’ll find it named [e]apache-maven-x.x.x-bin.zip[/e]."},{"type":"SUBHEADER","text":"Unzip Maven","permalink":"unzip-maven"},{"type":"TEXT","text":"After Maven has been downloaded, unzip the archive to a permanent directory. We will reference this directory in the next step."},{"type":"SUBHEADER","text":"Add Maven to Your Path Variable","permalink":"add-maven-to-your-path-variable"},{"type":"TEXT","text":"In order for Maven to be recognized you’re going to need to add the directory that Maven is in to your [e]PATH[/e] variable. To update your Path, open a command prompt (Windows > cmd) and run the following command."},{"type":"CODE","code":["systempropertiesadvanced.exe"]},{"type":"TEXT","text":"This will open up the Advanced tab of your System Properties. Click on the button labeled [e]Environment Variables[/e] and a new window will open."},{"type":"TEXT","text":"Windows 10: Select the variable named [e]Path[/e] under System Variables and click edit. Click ‘New’ and paste in the full path to the bin directory located within the maven files you extracted earlier. This should look something like [e]C:\\\\Your Directory\\\\apache-maven-x.x.x\\\\bin[/e]."},{"type":"TEXT","text":"Not Windows 10: Select the variable named [e]Path[/e] under System Variables and click edit. The items in this list are separated by semicolons which means you will need to add a semicolon followed by the full path to the bin directory at the end of the list. Your path should look something like [e]some;other;paths;C:\\\\Your Directory\\\\apache-maven-x.x.x\\\\bin[/e]."},{"type":"SUBHEADER","text":"Validate","permalink":"validate-maven"},{"type":"TEXT","text":"Close the System Properties window and the command prompt you opened earlier. Open a new command prompt (Windows > cmd) and run mvn -v. The output should provide the maven version and home directory, along with a few other configurations."},{"type":"CODE","code":["Apache Maven x.x.x","Maven home: C:\\\\Your Directory\\\\apache-maven-x.x.x\\\\bin\\\\..","Java version: 1.x.x, vendor: Oracle Corporation","Java home: C:\\\\Your Directory\\\\Java\\\\jre1.x.x","Default locale: en_US, platform encoding: Cp1252","OS name: \\"windows 10\\", version: \\"10.0\\", arch: \\"amd64\\", family: \\"windows\\"","Posts navigation","Newer Post "]}]}');
      mavenPost.date = new Date(mavenPost.date);

      const posts: Post[] =[
        mavenPost as Post,
        mockPost({ title: 'How to do awesome things today', permalink: 'do-awesome-things', body: [mockTextContent(), mockHeaderContent({ text: 'Deeper dive' }), mockTextContent({ text: 'This is [e]code for thought[/e]. There is more text here too just to see what multiple lines looks like with emphasis on [e]some of[/e] the text. Let me see what it looks like with 3 lines too. Lastly, lets see what a link looks like, [a=http://google.com]click here[/a]! And one more line for good measure.'}), mockSubheaderContent({ text: 'Ocean life' }),mockImageContent(), mockTextContent(), mockCodeContent()] }),
        mockPost({ title: 'Get started with life', permalink: 'start-life' }),
        mockPost({ permalink: 'hello-1' }),
        mockPost({ permalink: 'hello-2' }),
        mockPost({ permalink: 'hello-3' }),
        mockPost({ permalink: 'hello-4' }),
        mockPost({ permalink: 'hello-5' }),
        mockPost({ permalink: 'hello-6' }),
        mockPost({ permalink: 'hello-7' }),
        mockPost({ title: 'New post, who dis?', permalink: 'new-post' }),
      ];

      for(let p = 0; p < posts.length; p++) {
        this.postRepository.save(postToEntity(posts[p]));
      }
    });
  }

  getPost(permalink: string): Observable<Post> {
    return from(this.postRepository.findOneBy({ permalink })).pipe(
      map((entity: PostEntity) => entityToPost(entity))
    );
  }

  getAllPosts(): Observable<{ posts: Post[] }> {
    return from(this.postRepository.find({ order: { date: 'DESC' } })).pipe(
      map((entities: PostEntity[]) => {
        const posts: Post[] = [];
        for(let e = 0; e< entities.length; e++) {
          posts.push(entityToPost(entities[e]))
        }

        return { posts };
      })
    );
/*
    return { posts };
    return { posts : [
          JSON.parse('{"title":"How to Setup Maven on Windows","permalink":"how-to-setup-maven-on-windows","date":"2018-01-17T17:00:00.000Z","tags":["java"],"body":[{"type":"TEXT","text":"Maven is a free tool developed by the Apache Software Foundation that can be used to simplify the build process and to manage dependencies for Java projects. Before you can take advantage of its features you’ll need to setup maven on your machine."},{"type":"SUBHEADER","text":"Download Maven","permalink":"download-maven"},{"type":"TEXT","text":"Before we can setup Maven you will need to download the archive from [a=https://maven.apache.org/download.cgi]Apache’s official download page[/a]. There are a few different setup options but the easiest way is to download the binary zip archive. This version is already compiled and ready for you to use. You’ll find it named [e]apache-maven-x.x.x-bin.zip[/e]."},{"type":"SUBHEADER","text":"Unzip Maven","permalink":"unzip-maven"},{"type":"TEXT","text":"After Maven has been downloaded, unzip the archive to a permanent directory. We will reference this directory in the next step."},{"type":"SUBHEADER","text":"Add Maven to Your Path Variable","permalink":"add-maven-to-your-path-variable"},{"type":"TEXT","text":"In order for Maven to be recognized you’re going to need to add the directory that Maven is in to your [e]PATH[/e] variable. To update your Path, open a command prompt (Windows > cmd) and run the following command."},{"type":"CODE","code":["systempropertiesadvanced.exe"]},{"type":"TEXT","text":"This will open up the Advanced tab of your System Properties. Click on the button labeled [e]Environment Variables[/e] and a new window will open."},{"type":"TEXT","text":"Windows 10: Select the variable named [e]Path[/e] under System Variables and click edit. Click ‘New’ and paste in the full path to the bin directory located within the maven files you extracted earlier. This should look something like [e]C:\\\\Your Directory\\\\apache-maven-x.x.x\\\\bin[/e]."},{"type":"TEXT","text":"Not Windows 10: Select the variable named [e]Path[/e] under System Variables and click edit. The items in this list are separated by semicolons which means you will need to add a semicolon followed by the full path to the bin directory at the end of the list. Your path should look something like [e]some;other;paths;C:\\\\Your Directory\\\\apache-maven-x.x.x\\\\bin[/e]."},{"type":"SUBHEADER","text":"Validate","permalink":"validate-maven"},{"type":"TEXT","text":"Close the System Properties window and the command prompt you opened earlier. Open a new command prompt (Windows > cmd) and run mvn -v. The output should provide the maven version and home directory, along with a few other configurations."},{"type":"CODE","code":["Apache Maven x.x.x","Maven home: C:\\\\Your Directory\\\\apache-maven-x.x.x\\\\bin\\\\..","Java version: 1.x.x, vendor: Oracle Corporation","Java home: C:\\\\Your Directory\\\\Java\\\\jre1.x.x","Default locale: en_US, platform encoding: Cp1252","OS name: \\"windows 10\\", version: \\"10.0\\", arch: \\"amd64\\", family: \\"windows\\"","Posts navigation","Newer Post "]}]}'),
          mockPost({ title: 'How to do awesome things today', permalink: 'do-awesome-things', body: [mockTextContent(), mockHeaderContent({ text: 'Deeper dive' }), mockTextContent({ text: 'This is [e]code for thought[/e]. There is more text here too just to see what multiple lines looks like with emphasis on [e]some of[/e] the text. Let me see what it looks like with 3 lines too. Lastly, lets see what a link looks like, [a=http://google.com]click here[/a]! And one more line for good measure.'}), mockSubheaderContent({ text: 'Ocean life' }),mockImageContent(), mockTextContent(), mockCodeContent()] }),
          mockPost({ title: 'Get started with life', permalink: 'start-life' }),
          mockPost(),
          mockPost(),
          mockPost(),
          mockPost(),
          mockPost(),
          mockPost(),
          mockPost(),
          mockPost(),
          mockPost(),
          mockPost(),
          mockPost(),
          mockPost(),
      ]
    };*/
  }
}
