// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    console.log("✅ Middleware is running for path:", request.nextUrl.pathname);

  if (request.nextUrl.pathname == '/') {
    return NextResponse.redirect(new URL('/modules/about/views', request.url));
  }
   return NextResponse.next()
}

export const config = {
  matcher: ['/','/modules/about/views'],
};