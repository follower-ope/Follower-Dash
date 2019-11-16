import { store } from 'react-notifications-component';

export const successMessage = message => {
  store.addNotification({
    message,
    type: 'success',
    insert: 'top',
    container: 'top-right',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: {
      duration: 2000,
      onScreen: true,
    },
  });
};

export const errorMessage = message => {
  store.addNotification({
    message,
    type: 'danger',
    insert: 'top',
    container: 'top-right',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: {
      duration: 2000,
      onScreen: true,
    },
  });
};
