import { toast } from 'react-toastify';

export const addCartToast = (name: string) =>
   toast.success(`${name} foi ADICIONADA!`, {
      position: 'top-right',
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      theme: 'dark',
   });

export const removeCartToast = (name: string) =>
   toast.success(`${name} foi REMOVIDA!`, {
      position: 'top-right',
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      theme: 'dark',
   });
