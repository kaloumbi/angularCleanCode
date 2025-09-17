import { Component, inject, OnInit } from '@angular/core';
import { ProjectService } from '../../../core/service/project/project-service';
import { IProject } from '../../../core/model/interface/iproject';

@Component({
  selector: 'app-project-list',
  imports: [],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css',
})
export class ProjectList implements OnInit {

  projectService = inject(ProjectService);

  projectsList: IProject[]= [];

  ngOnInit(): void {
    this.getProject();
  }

  getProject() {
    this.projectService.getAllProject().subscribe((res: IProject[]) => {
      this.projectsList = res;
      console.log(this.projectService);
      
    });
  }
}
