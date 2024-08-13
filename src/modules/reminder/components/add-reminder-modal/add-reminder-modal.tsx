import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/modules/core/components/ui/dialog";
import { useCreateReminderModalStore } from "../../store/useCreateReminderModalStore";
import { AddReminderForm } from "../add-reminder-form";
import { type AddReminderModalProps } from "./types";

const AddReminderModal = ({ ...props }: AddReminderModalProps) => {
  const { selectedDay, isOpen, onChangeDirection, closeModal } =
    useCreateReminderModalStore();

  return (
    <Dialog open={isOpen} onOpenChange={closeModal} {...props}>
      <DialogContent className="max-w-sm gap-3 rounded-md border border-primary-light bg-white p-4 shadow-modal">
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
          closeModal={closeModal}
        />
      </DialogContent>
    </Dialog>
  );
};

export { AddReminderModal };
