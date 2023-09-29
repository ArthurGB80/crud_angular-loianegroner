import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, of, pipe } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [CoursesService],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;

  // coursesService: CoursesService

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // this.courses = [];
    //this.coursesService = new CoursesService();

    this.courses$ = this.coursesService.list();
    pipe(
      catchError((error) => {
        console.log(error);
        this.onError('Erro ao carregar cursos.');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: { errorMsg },
    });
  }

  ngOnInit(): void {}

  onAdd() {
    // console.log('onAdd');
    this.router.navigate(['/courses/new'], { relativeTo: this.route });
  }
}
