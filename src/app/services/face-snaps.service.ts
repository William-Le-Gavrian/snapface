import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      desc: 'Mon meilleur ami depuis tout petit !',
      createdDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      location: 'Paris',
    },
    {
      id: 2,
      title: 'Three Rock Mountain',
      desc: 'Un endroit magnifique pour les randonnées',
      createdDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/0/08/Three_Rock_Mountain_Southern_Tor.jpg',
      location: 'la montagne',
    },
    {
      id: 3,
      title: 'Un bon repas',
      desc: "Mmmh... que c'est bon",
      createdDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://www.mutuellebleue.fr/app/uploads/sites/2/2020/07/quappelle-t-on-un-repas-%C3%A9quilibr%C3%A9.jpg',
    },
    {
      id: 4,
      title: 'Archibald',
      desc: 'Mon meilleur ami depuis tout petit !',
      createdDate: new Date(),
      snaps: 25,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      location: 'Paris',
    },
    {
      id: 5,
      title: 'Three Rock Mountain',
      desc: 'Un endroit magnifique pour les randonnées',
      createdDate: new Date(),
      snaps: 105,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/0/08/Three_Rock_Mountain_Southern_Tor.jpg',
      location: 'la montagne',
    },
    {
      id: 6,
      title: 'Un bon repas',
      desc: "Mmmh... que c'est bon",
      createdDate: new Date(),
      snaps: 200,
      imageUrl:
        'https://www.mutuellebleue.fr/app/uploads/sites/2/2020/07/quappelle-t-on-un-repas-%C3%A9quilibr%C3%A9.jpg',
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!faceSnap) {
      throw new Error('FaceSnap not found');
    }
    return faceSnap;
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
