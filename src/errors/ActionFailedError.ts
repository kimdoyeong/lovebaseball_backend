import createError from "../lib/error/createError";

export const CrollFailedError = createError(
  500,
  "정보를 가져오는 데 실패했습니다.",
  "CROLL_FAILED"
);
