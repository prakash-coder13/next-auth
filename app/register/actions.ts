"use server";

import { passwordMatchSchema } from "@/validations/password-match-schema";
import z from "zod";

const registerUser = async ({
  email,
  password,
  passwordConfirm,
}: {
  email: string;
  password: string;
  passwordConfirm: string;
}) => {
    console.log("Action submitted");
    const newUserSchema = z.object({
        email: z.email()
    }).and(passwordMatchSchema);

    const newUserValidation = newUserSchema.safeParse( {
        email,password,passwordConfirm
    });
    console.log("new user validatoin ", newUserValidation);
    if(!newUserValidation.success){
        return {
            error:true,
            message: newUserValidation.error ?? "An error occured"
        }
    }
};

export default registerUser;
