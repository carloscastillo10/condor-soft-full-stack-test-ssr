import { GoAlertFill } from "react-icons/go";
import { Alert, AlertTitle } from "../ui/alert";
import { type AlertErrorProps } from "./types";

const AlertError = ({ errorMessage, ...props }: AlertErrorProps) => (
  <Alert className="bg-red-500 text-white" {...props}>
    <GoAlertFill className="h-5 w-5 fill-white" />
    <AlertTitle className="mb-0 font-medium leading-normal">
      {errorMessage}
    </AlertTitle>
  </Alert>
);

export { AlertError };
