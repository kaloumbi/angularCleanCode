import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { IProject } from '../../model/interface/iproject';
import { GlobalConstant } from '../../constant/Global.constant';
import { getPieValue } from '../../helper/common.helper';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  getAllProject(): Observable<IProject[]> {
    return this.http.get<IProject[]>(
      environment.API_URL +
        GlobalConstant.API_END_POINT_CONTROLLER +
        '/' +
        GlobalConstant.API_END_POINT_METHOD.PROJECT.GET_ALL_PROJECTS
    );
  }

  getValueFromHelper(){
    const value = getPieValue();
  }

  createNewProject(obj: any) {
    return this.http.post(environment.API_URL + 'projet/added', obj);
  }
}
