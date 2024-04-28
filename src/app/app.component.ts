import { Component } from '@angular/core';
import { post } from './posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  storedPosts: post[] = [];

  onPostAdded(post:any){
    this.storedPosts.push(post)
  }
}
