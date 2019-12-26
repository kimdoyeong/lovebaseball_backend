import createError from "../lib/error/createError";

export const QueryNotExistError = createError(
  400,
  "필수 쿼리가 없습니다.",
  "QUERY_NOT_EXIST"
);
