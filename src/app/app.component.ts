import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './modal/photo.modal';
import { PhotosService } from './services/photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  photos$: Observable<Photo[]>;
  constructor(private photoService: PhotosService) {}

  ngOnInit() {
    this.photos$ = this.photoService.getPhotos();
  }
}
