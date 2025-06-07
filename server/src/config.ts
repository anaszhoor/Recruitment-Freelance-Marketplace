import { config as dotenvConfig } from 'dotenv';
import { z } from 'zod';
import path from 'path';

const env = process.env.NODE_ENV || 'development';

dotenvConfig({
  path: path.resolve(process.cwd(), `.env.${env}`),
});

const envSchema = z.object({
  NODE_ENV: z.enum(['Development', 'Production']).default('Development'),
  PORT: z.string().regex(/^\d+$/).transform(Number),
});

const parsed = envSchema.safeParse(process.env);
if (!parsed.success) {
  console.error("Invalid env config:", parsed.error.format());
  process.exit(1);
}

export const config = parsed.data;

