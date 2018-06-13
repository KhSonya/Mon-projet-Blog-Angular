import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-post-item',
  templateUrl: './list-post-item.component.html',
  styleUrls: ['./list-post-item.component.scss']
})
export class ListPostItemComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input ()postLoveIts: number;
  @Input () postCreated_at: Date;

  constructor() { }

  ngOnInit() {
  }
  onLove() {
    this.postLoveIts++;
  }
  onDontLove() {
    this.postLoveIts--;
  }
 
}

