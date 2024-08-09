import { type Dispatch, type LegacyRef } from "react";

export type AddReminderModalProps = OmitNonHTMLAttributes<
  JSX.IntrinsicElements["div"]
> & {
  modalRef: LegacyRef<HTMLDivElement>;
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
};
