import { Component, Input } from '@angular/core';
import { Tree } from '../types/Tree';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tree-node',
  imports: [CommonModule],
  templateUrl: './tree-node.component.html',
  styleUrl: './tree-node.component.css',
})
export class TreeNodeComponent {
  @Input() tree: Tree = {};
  @Input() node: string = '';

  getChildren(node: string): string[] {
    return this.tree[node] || [];
  }
}
