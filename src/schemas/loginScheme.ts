import { z } from "zod";

const loginScheme = z.object({
  body: z.object({
    fullName: z.string({
      required_error: "Full name is required",
    }),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email("Not a valid email"),
  }),
});

export default loginScheme;
