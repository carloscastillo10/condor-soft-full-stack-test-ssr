import { DialogTitle } from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "~/modules/core/components/ui/dialog";
import { type AddReminderModalProps } from "./types";

const AddReminderModal = ({
  modalRef,
  isOpen,
  setIsOpen,
  ...props
}: AddReminderModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className="shadow-modal rounded-md border border-primary-light"
        ref={modalRef}
        {...props}
      >
        <DialogHeader className="text-start">
          <DialogTitle className="text-xl font-semibold text-primary">
            New Event
          </DialogTitle>
          <DialogDescription className="sr-only">
            Event description
          </DialogDescription>
        </DialogHeader>
        <div>Aqui va el formulario</div>
      </DialogContent>
    </Dialog>
  );
};

export { AddReminderModal };
