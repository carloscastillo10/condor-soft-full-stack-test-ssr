import { ReminderContainer } from "../reminder-container";
import { type ReminderSectionProps } from "./types";

const ReminderSection = ({ ...props }: ReminderSectionProps) => (
  <section
    className="section flex h-screen min-h-screen justify-center"
    {...props}
  >
    <ReminderContainer />
  </section>
);

export { ReminderSection };
