"use client"

import { TrendingUp } from "lucide-react"
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {ChartContainer } from "@/components/ui/chart"
const chartData = [
    { browser: "safari", visitors: 200, fill: "#6C5DD3" }, // Updated color
  ]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "#6C5DD3",
  },
} 

export function SidebarGraph() {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[100px]"
    >
      <RadialBarChart
        data={chartData}
        startAngle={95}
        endAngle={-210}
        innerRadius={25}
        outerRadius={35}
      >
        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          className="first:fill-[#F8F9FB] last:fill-[#F8F9FB]"
          polarRadius={[28, 22]}
        />
        <RadialBar dataKey="visitors" background cornerRadius={4} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-[#6C5DD3] text-xs font-bold"
                    >
                      86 %
                    </tspan>
                  </text>
                )
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  )
}
