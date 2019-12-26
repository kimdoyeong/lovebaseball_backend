function createError(status: number, message: string, code: string) {
  const error: any = new Error(message);
  error.status = status;
  error.code = code;
  error.expose = true;

  return error;
}

export default createError;
