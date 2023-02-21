import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  list(): Course[] {
    return [
      { _id: '1', name: 'Angular', category: 'front-end'},
      { _id: '2', name: 'Java', category: 'back-end'},
      { _id: '3', name: 'Springboot', category: 'back-end'},
      { _id: '4', name: 'React', category: 'front-end'}
    ];
  }
}
