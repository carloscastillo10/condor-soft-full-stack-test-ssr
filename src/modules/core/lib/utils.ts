import { QueryClient } from "@tanstack/react-query";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const queryClient = new QueryClient();

export default queryClient;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
