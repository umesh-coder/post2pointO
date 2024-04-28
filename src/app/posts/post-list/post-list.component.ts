import { Component , Input } from '@angular/core';

import { post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {

  //   {
  //     title:"first post" , content:"this is first post"
  //   },
  //   {
  //     title: "second post", content: "this is second post"
  //   },
  //   {
  //     title: "third post", content: "this is third post"
  //   }
  // ]

  @Input() posts: post[] = [];

}
