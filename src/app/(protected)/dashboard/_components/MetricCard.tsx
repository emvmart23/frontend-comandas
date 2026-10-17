import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtext: string;
  trendColor: string;
  icon: ReactNode;
}

export default function MetricCard({
  title,
  value,
  subtext,
  trendColor,
  icon,
}: MetricCardProps) {
  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold tracking-tight">{value}</div>
        <p className={`mt-1 text-xs font-medium ${trendColor}`}>{subtext}</p>
      </CardContent>
    </Card>
  );
}
