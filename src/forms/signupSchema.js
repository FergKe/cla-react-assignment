import { z } from 'zod';

export const signUpSchema = z.object({
    first_name: z.string().min(1, "Not a valid enter"),
    last_name: z.string().min(1, "Not a valid enter"),
    email: z.email("Invalid email"),
    password: z.string().min(8, "Not a valid password").max(16, "Not a valid password")
})