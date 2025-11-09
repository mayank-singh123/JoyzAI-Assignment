import { Component, Input } from '@angular/core';
import { Tree } from '../types/Tree';
import { TreeNodeComponent } from '../tree-node/tree-node.component';

@Component({
  selector: 'app-tree',
  imports: [TreeNodeComponent],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.css',
})
export class TreeComponent {
  @Input() tree: Tree = {};
  @Input() root: string = '';
}
