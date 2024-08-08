import { ReminderContainer } from "../reminder-container";
import { type ReminderSectionProps } from "./types";

const ReminderSection = ({ ...props }: ReminderSectionProps) => (
  <section className="flex h-screen min-h-screen justify-center" {...props}>
    <ReminderContainer />
  </section>
);

export { ReminderSection };
