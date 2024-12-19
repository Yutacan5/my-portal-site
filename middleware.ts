// middleware.ts
import { NextResponse } from 'next/server'
import type { NextMiddleware } from 'next/server'

export function middleware(req: Request) {
  const url = new URL(req.url)
  if (url.pathname === '/main') {
    return new Response("Access Forbidden", { status: 403 })
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/main'],
}
