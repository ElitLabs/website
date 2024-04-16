import { NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export default async function middleware(req) {
  const url = req.nextUrl.clone();

  if (PUBLIC_FILE.test(url.pathname) || url.pathname.includes('_next')) return;

  const host = req.headers.get('host');
  const subdomain = getValidSubdomain(host);
  if (
    subdomain 
    && url.pathname != "/contact" 
    && url.pathname != "/terms"
    && url.pathname != "/privacy"
  ) 
  {
    url.pathname = `/${subdomain}${url.pathname}`;
  }

  return NextResponse.rewrite(url);
}

const getValidSubdomain = (host) => {
  let subdomain = null;
  if (!host && typeof window !== 'undefined') {
    host = window.location.host;
  }
  if (host && host.includes('.')) {
    const candidate = host.split('.')[0];
    if (candidate && !candidate.includes('localhost') && candidate != "dev") {
      subdomain = candidate;
    }
  }
  return subdomain;
};