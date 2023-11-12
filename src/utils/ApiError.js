class ApiError extends Error {

    //   constructor(message, statusCode) {
//     super();
//     this.name = 'ApiError';
constructor(
   statusCode,
   message="Something went worng",
   errors = [],
   stack = ""

){
    super(message)
    this.statusCode = statusCode
    this.data = null
    this.message = message
    this.success = false;
    this.errors = errors

    if (stack) {
      this.stack = stack
    } else {
        Error.capturesStackTrace(this, this.constructor)
    }

}


}

export {ApiError}