export function StatsSection() {
  const stats = [
    { value: "500+", label: "Active Businesses", suffix: "" },
    { value: "2.5", label: "GWh Traded Monthly", suffix: "GWh" },
    { value: "40%", label: "Average Cost Savings", suffix: "" },
    { value: "10K", label: "Tons CO₂ Reduced", suffix: "Tons" },
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
