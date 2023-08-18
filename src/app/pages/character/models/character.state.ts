import { ICharacter } from './characters.model';

export const CharacterState: ICharacter = {
  id: 1,
  name: 'Nombre...',
  status: 'Estado...',
  species: 'Especie...',
  type: 'Tipo....',
  gender: 'Genero....',
  origin: {
    name: 'Origen...',
    url: '',
  },
  location: {
    name: 'Lugar...',
    url: '',
  },
  image: '',
  episode: [''],
  url: '',
  created: '',
};

export const CharacterResultState = {
  info: {
    count: 826,
    pages: 42,
    next: 'https://rickandmortyapi.com/api/character?page=2',
    prev: null,
  },
  results: [CharacterState],
};

export const EventRefreshMock = { target: { complete: () => true } }