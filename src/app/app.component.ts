import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tree } from './types/Tree';
import { TreeComponent } from './tree/tree.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'treeApp';

  tree: Tree = {
    a: ['b', 'c'],
    b: ['d', 'e'],
    c: ['f', 'g'],
    e: ['h', 'i'],
    f: ['j', 'k'],
  };

  root = 'a';
}
