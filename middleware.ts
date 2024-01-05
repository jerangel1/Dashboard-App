import NextAuth, { NextAuthConfig } from 'next-auth';
import { authConfig } from './auth.config';

const validatedAuthConfig: NextAuthConfig = {
  providers: authConfig.providers || [], // Ensure 'providers' is defined
  pages: authConfig.pages,
};

export default NextAuth(validatedAuthConfig).auth;

export const config = {
  // Other configurations
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

export { authConfig };
