import { ReminderContainer } from "../reminder-container";
import { type ReminderSectionProps } from "./types";

const ReminderSection = ({ ...props }: ReminderSectionProps) => (
  <section className="h-screen min-h-screen px-6 py-6" {...props}>
    <ReminderContainer />
  </section>
);

export { ReminderSection };
