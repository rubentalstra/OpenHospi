import { SignJWT } from 'jose';

export async function mintSupabaseJWT(userId: string): Promise<string> {
  const secret = new TextEncoder().encode(process.env.SUPABASE_JWT_SECRET!);

  return new SignJWT({ sub: userId, role: 'authenticated' })
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(secret);
}
