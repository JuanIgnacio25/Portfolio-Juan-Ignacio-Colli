import type { Language , NotFoundContent} from "@/types";

export const notFoundContent: Record<Language, NotFoundContent> = {
  es: {
    title: '404',
    message: '¡Ups! Página no encontrada',
    button: 'Volver al inicio',
  },
  en: {
    title: '404',
    message: 'Oops! Page not found',
    button: 'Return to Home',
  },
}