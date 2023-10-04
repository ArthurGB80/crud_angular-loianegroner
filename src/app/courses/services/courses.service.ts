import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Course } from '../model/course';

@Injectable()
export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      // delay(5000),
      //tap((courses) => console.log(courses))
    );
  }

  loadById(id: string){
    return this.httpClient.get<Course>('${this.API}/${id}');
  }

  save(record: Partial<Course>) {
    console.log(record);
    if(record._id){
      console.log('update');
      return this.update(record);
  }
  console.log('create');
  return this.create(record);
  }



  private create(record: Partial<Course>) {
    return this.httpClient.post<Course>(this.API, record).pipe(first());
  }

  private update(record: Partial<Course>) {
    return this.httpClient.put<Course>('${this.API}/${record._id}', record).pipe(first());
  }

  remove(id: string) {
    return this.httpClient.delete('${this.API}/${record._id}').pipe(first());
  }

}



