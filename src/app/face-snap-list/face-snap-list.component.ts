import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent, CommonModule],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss',
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
})
export class FaceSnapListComponent implements OnInit {
  constructor(private faceSnapsService: FaceSnapsService) {
    registerLocaleData(fr.default);
  }

  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
  }
}
