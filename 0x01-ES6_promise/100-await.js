import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const a = await uploadPhoto().then((res) => res);
    const b = await createUser().then((res) => res);
    return ({
      photo: a,
      user: b,
    });
  } catch (error) {
    return ({
      photo: null,
      user: null,
    });
  }
}
