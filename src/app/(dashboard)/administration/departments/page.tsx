import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = {
  title: "Departments",
};

export default function Page() {
  return (
    <ModulePlaceholder
      title="Departments"
      breadcrumbs={["Administration", "Departments"]}
      description="Municipal departments and organizational units."
    />
  );
}
