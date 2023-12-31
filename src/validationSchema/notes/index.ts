import * as yup from 'yup';

export const noteValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
