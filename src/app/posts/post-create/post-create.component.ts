import { Component , EventEmitter , Output} from '@angular/core';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css'
})
export class PostCreateComponent {
  newPost = 'NO CONTENT'
  enteredContent =""
  enteredTitle=""
  @Output() postCreated = new EventEmitter();
  onAddPost() {
    // this.newPost = this.enteredvalue
    // alert("Post Added..")

    const post={title:this.enteredTitle,content:this.enteredContent}
    this.postCreated.emit(post);
  }

}
