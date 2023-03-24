import { Component } from '@angular/core';
import { ResearchBrief } from 'src/app/interfaces/ResearchBrief';
import { RESEARCHES } from 'src/app/mock-researches';

@Component({
  selector: 'app-researches',
  templateUrl: './researches.component.html',
  styleUrls: ['./researches.component.css']
})
export class ResearchesComponent {
  researches: ResearchBrief[] = RESEARCHES;

}
