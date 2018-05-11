
exports.client = (req, res) => {
  res.status(404).render('error', {
    statusCode: 404,
    errorMessage: 'Page Not Found',
  });
};

exports.server = (err, req, res, next) => {
  res.status(500).render('error', {
    statusCode: 500,
    errorMessage: 'Internal Server Error',
  });
};
