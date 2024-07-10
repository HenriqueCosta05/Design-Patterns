import { EmailValidatorClassAdapter, EmailValidatorFnAdapter, EmailValidatorFnProtocol, EmailValidatorProtocol } from './validation';

function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('Email é válido');
  } else {
    console.log('Email inválido');
  }
}

function validaEmailFn(emailValidator: EmailValidatorFnProtocol, email: string): void {
    if (emailValidator(email)) {
        console.log('Email válido');
    } else {
        console.log('Email inválido')
    }
}

validaEmailClass(new EmailValidatorClassAdapter(), 'henrique@example.com');
validaEmailFn(EmailValidatorFnAdapter, 'Henrique@example.com');