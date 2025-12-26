"use client"

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

const data = [
  { month: "Jan", co2: 35 },
  { month: "Feb", co2: 38 },
  { month: "Mar", co2: 43 },
  { month: "Apr", co2: 48 },
  { month: "May", co2: 54 },
  { month: "Jun", co2: 59 },
  { month: "Jul", co2: 56 },
  { month: "Aug", co2: 53 },
  { month: "Sep", co2: 47 },
  { month: "Oct", co2: 42 },
  { month: "Nov", co2: 38 },
  { month: "Dec", co2: 45 },
]

export function CarbonImpactChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorCo2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "0.5rem",
          }}
          labelStyle={{ color: "hsl(var(--foreground))" }}
          formatter={(value: number) => `${value} tons`}
        />
        <Area
          type="monotone"
          dataKey="co2"
          stroke="hsl(var(--accent))"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorCo2)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
