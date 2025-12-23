import { z } from 'zod';

export const loginSchema = z.object({
    email: z.email("Invalid email"),
    password: z.string().min(8, "Password must be longer than 8 characters").max(16, "Password must not be longer than 16 characters")
})