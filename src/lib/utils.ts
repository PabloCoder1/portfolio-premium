import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utilitário para mesclar classes do Tailwind CSS condicionalmente
 * sem gerar conflitos de estilo. Padrão ouro em UI moderna.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}