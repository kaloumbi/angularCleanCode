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
  private PROJECT_URL =
    environment.API_URL + GlobalConstant.API_END_POINT_CONTROLLER.PROJECT;

  constructor(private http: HttpClient) {}

  getAllProject(): Observable<IProject[]> {
    return this.http.get<IProject[]>(
      this.PROJECT_URL +
        '/' +
        GlobalConstant.API_END_POINT_METHOD.PROJECT.GET_ALL_PROJECTS
    );
  }

  getValueFromHelper() {
    const value = getPieValue();
  }

  saveProject(proj: IProject): Observable<IProject> {
    return this.http.post<IProject>(
      this.PROJECT_URL + '/' + GlobalConstant.API_END_POINT_METHOD.PROJECT.CREATE_NEW,
      proj
    );
  }
}
