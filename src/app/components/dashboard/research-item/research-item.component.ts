import { Component, Input } from '@angular/core';
import { ResearchBrief } from 'src/app/interfaces/ResearchBrief';

@Component({
  selector: 'app-research-item',
  templateUrl: './research-item.component.html',
  styleUrls: ['./research-item.component.css']
})
export class ResearchItemComponent {
  @Input() research!: ResearchBrief;
}
