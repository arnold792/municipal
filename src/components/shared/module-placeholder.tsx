import { DashboardShell } from "@/components/layout/dashboard-shell";
import { EmptyModule } from "@/components/shared/empty-module";
import { PageHeader } from "@/components/shared/page-header";

interface ModulePlaceholderProps {
  title: string;
  breadcrumbs: string[];
  description: string;
}

export function ModulePlaceholder({
  title,
  breadcrumbs,
  description,
}: ModulePlaceholderProps) {
  return (
    <DashboardShell title={title} breadcrumbs={breadcrumbs}>
      <PageHeader title={title} description={description} />
      <EmptyModule
        title={`${title} is scaffolded`}
        description="Navigation and layout are in place. Domain workflows for this module will be implemented in the corresponding development phase."
      />
    </DashboardShell>
  );
}
