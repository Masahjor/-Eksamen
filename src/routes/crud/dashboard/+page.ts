import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async () => {
  const isAdmin = localStorage?.getItem('isAdmin');
  if (!isAdmin) {
    throw redirect(302, '/crud/login');
  }
};
