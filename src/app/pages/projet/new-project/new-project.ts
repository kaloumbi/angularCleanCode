import { Component, inject } from '@angular/core';
import { ProjectService } from '../../../core/service/project/project-service';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IProject } from '../../../core/model/interface/iproject';

@Component({
  selector: 'app-new-project',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './new-project.html',
  styleUrl: './new-project.css'
})
export class NewProject {
  
  projectService = inject(ProjectService)

  router = inject(Router)

  projectForm : FormGroup = new FormGroup({
    titre : new FormControl(""),
    description : new FormControl(""),
    etat : new FormControl("")
  })


  onSave(){
    const formValue = this.projectForm.value;
    this.projectService.saveProject(formValue).subscribe((res:any) =>{
      if (res.result) {
        alert("project added")
      }else{
        alert(res.message)
      }
    })
    this.router.navigate(["/projects"])
    console.log(formValue);
  }

  onCancel(){
    if (this.projectForm.dirty) {
      const confirmCancel = confirm("Voulez-vous vraiment annuler ? Les modifications non enregistrées seront perdues !")
      if (!confirmCancel) {
        return;
      }

      this.router.navigate(["/projects"])
    }
  }
}
