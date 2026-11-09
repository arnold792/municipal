import Link from "next/link";
import { Construction } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface EmptyModuleProps {
  title: string;
  description: string;
}

export function EmptyModule({ title, description }: EmptyModuleProps) {
  return (
    <Card className="border-dashed">
      <CardContent className="flex flex-col items-center justify-center px-6 py-16 text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Construction className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 max-w-md text-sm text-muted-foreground">{description}</p>
        <p className="mt-3 text-xs font-medium text-primary">
          Module shell ready — business logic arrives in later phases
        </p>
        <Link href="/dashboard" className="mt-6 inline-flex">
          <Button variant="outline">Back to dashboard</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
