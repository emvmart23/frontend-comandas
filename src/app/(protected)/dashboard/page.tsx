import { ClipboardList, DollarSign, Users } from "lucide-react";
import MetricCard from "./_components/MetricCard";

export const metadata = {
  title: "Dashboard",
};

export default function Dashboard() {
  const metrics = [
    {
      id: "sales",
      title: "Ventas del día",
      value: 200,
      subtext: "↑ 12% desde ayer",
      trendColor: "text-emerald-600",
      icon: <DollarSign className="h-4 w-4" />,
    },
    {
      id: "orders",
      title: "Órdenes activas",
      value: 200,
      subtext: "↑ 5% desde ayer",
      trendColor: "text-muted-foreground",
      icon: <ClipboardList className="h-4 w-4" />,
    },
    {
      id: "attendance",
      title: "Asistencia hoy",
      value: 200,
      subtext: "↑ 8% desde ayer",
      trendColor: "text-emerald-600",
      icon: <Users className="h-4 w-4" />,
    },
  ];
  
  return (
    <section aria-label="Resumen de métricas" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {metrics.map((metric) => (
        <MetricCard key={metric.id} {...metric} />
      ))}
    </section>
  )
}
