import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = {
  title: "My Projects",
};

export default function Page() {
  return (
    <ModulePlaceholder
      title="My Projects"
      breadcrumbs={["Workspace", "My Projects"]}
      description="Projects assigned to the signed-in officer."
    />
  );
}
