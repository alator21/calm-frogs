import {
  Component,
  OnInit
} from '@angular/core';
import {
  Post
} from '../../models/post';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  post: Post = new Post();
  constructor() {}

  ngOnInit() {}


  tweet() {
    window.alert('Successfully posted!');
    this.post.content = '';
  }

}
