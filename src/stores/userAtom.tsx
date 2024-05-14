import { atom } from 'jotai';

interface User {
  id: string;
  first_name: string;
  email: string;
  isAuth: boolean;
}

export const userAtom = atom<User>({
  id: '',
  first_name: '',
  email: '',
  isAuth: false,
});