import { Layout } from "~/modules/core/components/layout";
import { ReminderSection } from "~/modules/reminder/components/reminder-section";

export default function Reminder() {
  return (
    <>
      <Layout title="Reminder - Condorsoft">
        <ReminderSection />
      </Layout>
    </>
  );
}
