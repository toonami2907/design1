/* eslint-disable react/prop-types */
"use client";

import { Ellipsis } from "lucide-react";
import { Bar, BarChart, CartesianGrid,  XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,

} from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";

const chartData = [
  { month: "January", desktop: 45 },
  { month: "February", desktop: 90 },
  { month: "March", desktop: 65 },
  { month: "April", desktop: 50 },
  { month: "May", desktop: 60 },
  { month: "June", desktop: 100 },
  { month: "July", desktop: 55 },
  { month: "August", desktop: 90 },
  { month: "September", desktop: 30 },
  { month: "October", desktop: 70 },
  { month: "November", desktop: 47 },
  { month: "December", desktop: 169 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
};

// Function to generate gradients for specific months
const generateGradient = (month) => {
  const gradients = {
    March: ["#33C600", "#CDF4FF"], // Gradient for March
    June: ["#B8B7FF", "#6C5DD3"], // Gradient for June
    October: ["#FF4CE2", "#FFB7F5"], // Gradient for October (future use)
  };
  return gradients[month] || ["#E6E8F0", "#E6E8F0"]; // Default gradient for other months
};

// Custom Bar component with dynamic gradient
const CustomBar = ({ x, y, width, height, month }) => {
  const gradientId = `gradient-${month}`;
  const [startColor, endColor] = generateGradient(month);

  return (
    <g>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="100%" stopColor={startColor} />
          <stop offset="100%" stopColor={endColor} />
        </linearGradient>
      </defs>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={`url(#${gradientId})`}
        rx={8}
        ry={8}
      />
    </g>
  );
};

const DashGraph = () => {
  return (
    <div className="w-full overflow-x-auto md:overflow-visible">
      <div className="">
        <Card className="max-w-[559px] sm:w-[400px] md:w-full max-h-[371px] relative rounded-md">
          <CardHeader className="flex w-full h-[60px]  items-center justify-between border-b">
            <section className="flex w-full justify-between  h-full items-center">
              <div>
                <h1 className="text-xl font-bold">Revenue</h1>
              </div>
              <div>
                <Ellipsis />
              </div>
            </section>
          </CardHeader>
          <CardContent>
            <div className="my-2">
                <h1 className="text-3xl font-bold text-[#081735]">$112,340</h1>
            </div>
            <ChartContainer className='h-[200px] w-full' config={chartConfig}>
              <BarChart
                accessibilityLayer
                data={chartData}
                margin={{
                  top: 20,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar
                  dataKey="desktop"
                  radius={8}
                  barSize={30}
                  shape={(props) => (
                    <CustomBar {...props} month={props.payload.month} />
                  )}
                >
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 justify-center h-[30px] text-sm">
          <div className="flex gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-slate-200"></div>
                <span className="sm:text-sm text-xs text-muted-foreground">Pending (10%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-indigo-400"></div>
                <span className="sm:text-sm text-xs text-muted-foreground">Income</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-pink-500"></div>
                <span className="sm:text-sm text-xs text-muted-foreground">Expanse</span>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default DashGraph;
