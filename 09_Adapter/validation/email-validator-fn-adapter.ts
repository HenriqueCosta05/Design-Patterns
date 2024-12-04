import isEmail from "validator/lib/isEmail";
import { EmailValidatorFnProtocol } from ".";

export const EmailValidatorFnAdapter: EmailValidatorFnProtocol = (value: string): boolean => {
    return isEmail(value)
}