import { ErrorRequestHandler } from "express";

const ErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let status = 500;
  let message = "서버에서 오류가 발생했습니다. 다시 시도해주세요.";
  let code = "UNKNOWN";

  if (err.code && (err.expose || err.expose === undefined)) {
    message = err.message || message;
    status = err.status || status;
    code = err.code;
  } else {
    console.error(err.stack);
  }

  res.status(status);
  res.json({
    success: false,
    status,
    message,
    code
  });
};

export default ErrorHandler;
