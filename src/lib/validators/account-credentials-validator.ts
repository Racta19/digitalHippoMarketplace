import { z } from "zod";

export const AuthCredentialsValidator = z.object({
    email: z.string().email(),
    password: z.string().min(8, "Wrong Password.")
});

export type TAuthCredentailsValidator = z.infer<typeof AuthCredentialsValidator>