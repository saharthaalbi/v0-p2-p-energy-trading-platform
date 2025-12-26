"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

const data = [
  { month: "Jan", revenue: 63750 },
  { month: "Feb", revenue: 69000 },
  { month: "Mar", revenue: 78750 },
  { month: "Apr", revenue: 88500 },
  { month: "May", revenue: 99000 },
  { month: "Jun", revenue: 108750 },
  { month: "Jul", revenue: 103500 },
  { month: "Aug", revenue: 96750 },
  { month: "Sep", revenue: 86250 },
  { month: "Oct", revenue: 76500 },
  { month: "Nov", revenue: 70500 },
  { month: "Dec", revenue: 82500 },
]

export function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
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
          formatter={(value: number) => `$${value.toLocaleString()}`}
        />
        <Bar dataKey="revenue" fill="hsl(var(--secondary))" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
