const notifications = (state = [], action) => {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return [...state, action.notification];
    case "REMOVE_NOTIFICATION":
    default:
      return state;
  }
};

export default notifications;

export const getNotifications = (state) => state;
