import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";

export const registration = z.object({
  name: z
    .string()
    .regex(/^[a-zA-Z\s]*$/, { message: "Name can not enter number or symbal" }),
  index: z.string().length(7, {
    message: "Must be exactly 7 characters long in index number",
  }),
  telephone: z.string().regex(/^\d+$/, { message: "Invalid phone number" }),
  gmail: z.string().email({ message: "Invalid gmail address" }),
  uomMail: z.string().email({ message: "Invalid uom mail address" }),
});

export function warningMessage(message: string) {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
}

export function successMessage(message: string) {
  toast.success(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
}
