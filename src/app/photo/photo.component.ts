import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../modal/photo.modal';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit {
  @Input() photo: Photo;
  constructor() {}

  ngOnInit(): void {}
}
