import { Component, inject, OnInit } from '@angular/core';
import { ProjectService } from '../../../core/service/project/project-service';
import { IProject } from '../../../core/model/interface/iproject';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-list',
  imports: [RouterLink],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css',
})
export class ProjectList /* implements OnInit */ {

  projectsList: IProject[] = [];

  projectService = inject(ProjectService);


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
