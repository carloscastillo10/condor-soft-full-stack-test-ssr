import { useEffect, useRef } from "react";
import { toast } from "sonner";

const useLoadingToast = (isLoading: boolean, message: string) => {
  const toastIdRef = useRef<string | number | null>(null);

  useEffect(() => {
    if (isLoading && !toastIdRef.current) {
      toastIdRef.current = toast.loading(message, {
        className: "bg-black text-white font-semibold",
        position: "bottom-center",
      });
    } else if (!isLoading && toastIdRef.current) {
      toast.dismiss(toastIdRef.current);
      toastIdRef.current = null;
    }
  }, [isLoading, message]);
};

export { useLoadingToast };
