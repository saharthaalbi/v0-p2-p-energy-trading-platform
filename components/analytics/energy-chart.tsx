"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

const data = [
  { month: "Jan", energy: 850 },
  { month: "Feb", energy: 920 },
  { month: "Mar", energy: 1050 },
  { month: "Apr", energy: 1180 },
  { month: "May", energy: 1320 },
  { month: "Jun", energy: 1450 },
  { month: "Jul", energy: 1380 },
  { month: "Aug", energy: 1290 },
  { month: "Sep", energy: 1150 },
  { month: "Oct", energy: 1020 },
  { month: "Nov", energy: 940 },
  { month: "Dec", energy: 1100 },
]

export function EnergyChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
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
        />
        <Line type="monotone" dataKey="energy" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
