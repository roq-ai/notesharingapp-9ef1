import * as yup from 'yup';

export const shareValidationSchema = yup.object().shape({
  note_id: yup.string().nullable().required(),
  receiver_id: yup.string().nullable().required(),
  sender_id: yup.string().nullable().required(),
});
