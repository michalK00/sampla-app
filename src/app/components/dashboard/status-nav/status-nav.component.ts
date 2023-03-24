import { Component } from '@angular/core';
import { RESEARCHES } from 'src/app/mock-researches';
@Component({
  selector: 'app-status-nav',
  templateUrl: './status-nav.component.html',
  styleUrls: ['./status-nav.component.css']
})
export class StatusNavComponent {
  allResearches: number = RESEARCHES.length;
  completedResearches: number = getResearchesNumberWithStatus("Completed");
  inProgresResearches: number = getResearchesNumberWithStatus("In Progress");
}

function getResearchesNumberWithStatus(searchedStatus: string) {
  var count: number = 0;
  RESEARCHES.forEach(research => {
    if (research.status === searchedStatus) {
      count += 1;
    }
  });
  return count;
}