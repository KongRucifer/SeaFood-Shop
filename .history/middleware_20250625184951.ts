import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/modules/home/views', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/','/modules/about/views'],
};