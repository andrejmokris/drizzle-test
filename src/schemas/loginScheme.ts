import { z } from 'zod';

const loginScheme = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'Email is required'
      })
      .email('Not a valid email'),
    password: z.string({ required_error: 'Password is required' })
  })
});

export default loginScheme;
