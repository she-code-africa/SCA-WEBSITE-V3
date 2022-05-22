var __extends = (this && this.__extends) || function (d, b) {
  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  function __ () { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CustomHttpError = (function (_super) {
  __extends(CustomHttpError, _super);
  function CustomHttpError (message, extras) {
    _super.call(this, message);
    this.message = message;
    this.name = 'CustomHttpError';
    this.payload = extras.payload;
    this.responseCode = extras.responseCode;
    this.statusCode = extras.statusCode;
    this.responseText = extras.responseText;
  }
  return CustomHttpError;
})(Error);
exports.CustomHttpError = CustomHttpError;
