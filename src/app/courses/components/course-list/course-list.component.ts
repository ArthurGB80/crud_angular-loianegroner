import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../model/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  @Input() courses: Course[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor() {}

  ngOnInit(): void {}

  onAdd() {
    this.add.emit(true);
    // console.log('onAdd');
    //this.router.navigate(['/courses/new'], { relativeTo: this.route });
  }

  onEdit(course: Course) {
    this.add.emit(course);
  }

  onDelete(course: Course) {
    this.remove.emit(course);
  }
}
