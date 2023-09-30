import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { CourseResolver } from './course.resolver';

describe('courseResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => CourseResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
