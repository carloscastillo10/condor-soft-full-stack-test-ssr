import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/modules/core/components/ui/dialog";
import { AddReminderForm } from "../add-reminder-form";
import { type AddReminderModalProps } from "./types";

const AddReminderModal = ({
  modalRef,
  isOpen,
  selectedDay,
  setIsOpen,
  onChangeDirection,
  ...props
}: AddReminderModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className="max-w-sm gap-3 rounded-md border border-primary-light bg-white p-4 shadow-modal"
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
        <AddReminderForm
          selectedDay={selectedDay}
          onChangeDirection={onChangeDirection}
        />
      </DialogContent>
    </Dialog>
  );
};

export { AddReminderModal };
