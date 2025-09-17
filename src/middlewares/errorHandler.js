export const errorHanlder = (err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    type: err.type || "about:blank", // bisa kamu isi semacam URI masalah
    title: err.title || "An error occurred",
    status: err.status || 500,
    detail: err.message,
    instance: req.originalUrl, // path yang error
  });
};
