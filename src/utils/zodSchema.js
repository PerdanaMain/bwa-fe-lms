import { z } from "zod";

export const exampleSchema = z.object({
  name: z.string().min(3),
});

export const signUpSchema = z.object({
  name: z.string().min(5),
  email: z.string().email(),
  password: z.string().min(5),
});

export const signInSchema = signUpSchema.omit({ name: true });

export const createCourseSchema = z.object({
  name: z.string().min(5),
  categoryId: z.string().min(5, { message: "please select category" }),
  tagline: z.string().min(5),
  description: z.string().min(10),
  thumbnail: z
    .any()
    .refine((file) => file?.name, { message: "thumbnail is required" }),
});

export const updateCourseSchema = createCourseSchema.extend({
  thumbnail: z.any().optional(),
});

export const mutateContentSchema = z
  .object({
    title: z.string().min(5),
    type: z.string().min(3, { message: "type is required" }),
    youtubeId: z.string().optional(),
    text: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    const parseYoutubeId = z.string().min(4).safeParse(data.youtubeId);
    const parseText = z.string().min(10).safeParse(data.text);

    if (data.type === "video") {
      if (!parseYoutubeId.success) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Youtube ID is required",
          path: ["youtubeId"],
        });
      }
    }

    if (data.type === "text") {
      if (!parseText.success) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Content Text is required",
          path: ["text"],
        });
      }
    }
  });
