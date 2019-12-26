import createError from "../lib/error/createError";

export const ActionNotFoundError = createError(
  404,
  "액션을 찾을 수 없습니다.",
  "ACTION_NOT_FOUND"
);
export const PlayerNotFoundError = createError(
  404,
  "플레이어를 찾을 수 없습니다.",
  "PLAYER_NOT_FOUND"
);
