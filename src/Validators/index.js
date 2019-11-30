import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  password: Yup.string().required('Informe a senha'),
  email: Yup.string()
    .email('Email invalido')
    .required('Informe o Email'),
});
