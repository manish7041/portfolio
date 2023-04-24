import { Component,OnInit } from '@angular/core';

import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers:[DataService]
})
export class ProjectsComponent implements OnInit{

  data:any = [];
  constructor(private projectService:DataService){}

  ngOnInit(){
    this.data = this.projectService.projects
  }
}
