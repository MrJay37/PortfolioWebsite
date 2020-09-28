const userData = (userData = { message: false }, action) => {
  switch (action.type) {
    case "STORE_DATA":
      return {
        ...userData,
        data: action.payload,
      };
    case "MESSAGE_SUCCESS":
      return {
        ...userData,
        messagePassed: true,
        messageFailed: false,
      };
    case "MESSAGE_FAILURE":
      return {
        ...userData,
        messagePassed: false,
        messageFailed: true,
      };

    default:
      return userData;
  }
};

export default userData;
