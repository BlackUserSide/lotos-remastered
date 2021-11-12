export const validEmail = (email: string) => {
  let regEmail = /\S+@\S+\.\S+/;
  return regEmail.test(email);
};
