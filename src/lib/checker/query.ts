import { QueryNotExistError } from "../../errors/ValidError";

function queryChecker(querys: string[], query: any) {
  if (!query) throw QueryNotExistError;
  if (typeof query !== "object") throw QueryNotExistError;

  for (let i = 0; i < querys.length; i++) {
    if (!query[querys[i]]) throw QueryNotExistError;
  }
  return query;
}

export default queryChecker;
