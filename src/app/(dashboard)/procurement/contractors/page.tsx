import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = {
  title: "Contractors",
};

export default function Page() {
  return (
    <ModulePlaceholder
      title="Contractors"
      breadcrumbs={["Procurement", "Contractors"]}
      description="Registered contractors and supplier profiles."
    />
  );
}
