import { Injectable } from '@nestjs/common';
import { Genere } from './models/genere.model';

@Injectable()
export class GenereService {
  private generes: Genere[] = [];

  getAllGeneres(): Genere[] {
    return this.generes;
  }

  createGenere(genere: Genere): Genere {
    this.generes.push(genere);
    return genere;
  }

  updateGenere(id: number, updatedGenere: Partial<Genere>): Genere {
    const genereIndex = this.generes.findIndex(g => g.id === id);
    if (genereIndex === -1) {
      throw new Error('Genere not found');
    }
    this.generes[genereIndex] = { ...this.generes[genereIndex], ...updatedGenere };
    return this.generes[genereIndex];
  }
}
