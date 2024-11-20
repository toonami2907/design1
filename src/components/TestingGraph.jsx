import { Ellipsis} from "lucide-react"
import { Label, Pie, PieChart, Sector } from "recharts"


import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,

} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { DailyCustomersCard } from "./DailyCustomerCard"
import { SmallGraph } from "./SmallGraph2"

const chartData = [
  { browser: "chrome", visitors: 275, fill: "url(#chromeGradient)" },
  { browser: "safari", visitors: 200, fill: "url(#safariGradient)" },
  { browser: "firefox", visitors: 187, fill: "url(#firefoxGradient)" },

]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
}

const TestingGraph = () => {
  return (
    <Card className="max-w-[559px] max-h-[371px] relative  hidden md:block  rounded-md">
      <CardHeader className="flex w-full h-[60px]  items-center justify-between border-b">
        <section className="flex w-full justify-between  h-full items-center">
          <div>
            <h1 className="text-xl font-bold">Customer</h1>
            <p className="text-sm text-[#8F95B2]">Customers that buy our products</p>
          </div>
          <div>
            <Ellipsis />
          </div>
        </section>
      </CardHeader>
      <CardContent className="w-full h-full grid grid-cols-2 gap-0 p-4 mt-5">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[180px] h-full"
        >
          <PieChart className="shadow-2xl rounded-full">
            <defs>
              <linearGradient id="chromeGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#4C73FF" />
                <stop offset="100%" stopColor="#FFB7F5" />
              </linearGradient>
              <linearGradient id="firefoxGradient"  x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#9EC600" />
                <stop offset="100%" stopColor="#CDF4FF" />
              </linearGradient>
              <linearGradient id="safariGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#E6E8F0" />
                <stop offset="100%" stopColor="#E6E8F0" />
              </linearGradient>
            </defs>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={50}
              strokeWidth={5}
              activeIndex={0}
              activeShape={({
                outerRadius = 0,
                ...props
              }) => (
                <Sector {...props} outerRadius={outerRadius + 8} />
              )}
            >
               <Label
                content={({ viewBox: { cx, cy } }) => (
                  <>
                    <circle
                      cx={cx}
                      cy={cy}
                      r={40}
                      fill="#FAFBFF"
                      filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
                    />
                    <text
                      x={cx}
                      y={cy - 8}
                      textAnchor="middle"
                      className="text-xl text-[#0049C6] text-center font-bold fill-current"
                    >
                      82.3%
                    </text>
                    <text
                      x={cx}
                      y={cy + 12}
                      textAnchor="middle"
                      className="text-xs text-[#0049C6] fill-current opacity-75"
                    >
                      Total
                    </text>
                  </>
                )}
              />
            </Pie>
          </PieChart>
        </ChartContainer>

        <div className="flex flex-col items-start justify-start h-[180px] gap-2">
          <div className="h-[85px] w-full flex items-center -ml-4">
          <SmallGraph/>
            <div className="flex flex-col mr-10">
              <span className="font-bold text-sm">+ 18% </span>
              <span className="text-gray-500 text-xs">Daily customers</span>
            </div>
          </div>
          <div className="h-[85px] w-full flex items-center ml-4">
            <DailyCustomersCard/>
            <div className="flex flex-col mr-7 ml-2">
              <span className="font-bold text-sm">+ 14% </span>
              <span className="text-gray-500 text-xs">Weekly new customers</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col flex absolute bottom-1 right-20 items-start gap-2 justify-center text-sm">
      <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div  id="color4Gradient" className="w-3 h-3 rounded-full"></div>
            <span className="text-sm text-muted-foreground">Current customers</span>
          </div>
          <div className="flex items-center gap-2">
            <div id="color3Gradient" className="w-3 h-3 rounded "></div>
            <span className="text-sm text-muted-foreground">New customers</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default TestingGraph;
