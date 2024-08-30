import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { getUserMeLoader } from './data/services/get-user-me-loader';

export const middleware = async (request: NextRequest) => {
  const user = await getUserMeLoader();
  const currentPath = request.nextUrl.pathname;

  if (currentPath.startsWith('/my-services') && user.ok === false) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  return NextResponse.next();
};
