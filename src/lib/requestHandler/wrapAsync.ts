import { RequestHandler } from "express";

function wrapAsync(handler: RequestHandler) {
  const returnHandler: RequestHandler = (req, res, next) => {
    Promise.resolve(handler(req, res, next)).catch(e => next(e));
  };

  return returnHandler;
}

export default wrapAsync;
