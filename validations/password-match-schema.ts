import {z} from "zod";
import { passwordSchema } from "./password-schema";
import { ZodIssueCode } from "zod/v3";

export const passwordMatchSchema = z.object({
    password: passwordSchema,
    passwordConfirm: z.string()

}).superRefine((data,ctx) =>{
        if(data.password !== data.passwordConfirm){
            ctx.addIssue(
                {
                    code: ZodIssueCode.custom,
                    path: ["passwordConfirm"],
                    message: "Password do not match"
                }
            )
        }
})