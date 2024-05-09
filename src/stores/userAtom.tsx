import { atom } from 'jotai';

interface User {
  id: string;
  first_name: string;
}

export const userAtom = atom<User>({
  id: '',
  first_name: '',
});