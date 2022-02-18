class PageError extends Error {
  constructor(message, code = 500) {
    super(message);

    type = "PageError";
  }
}

module.exports = {
  PageError,
};
