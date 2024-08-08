import { ReminderContainer } from "../reminder-container/reminder-container";
import { type ReminderSectionProps } from "./types";

const ReminderSection = ({ ...props }: ReminderSectionProps) => (
  <section className="min-h-screen px-6 py-6" {...props}>
    <ReminderContainer />
  </section>
);

export { ReminderSection };
