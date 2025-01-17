"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Jan 2022", value: 250 },
  { date: "Jul 2022", value: 420 },
  { date: "Jan 2023", value: 320 },
  { date: "Jul 2023", value: 280 },
  { date: "Jan 2024", value: 350 },
  { date: "Jul 2024", value: 220 },
  { date: "Jan 2025", value: 280 },
];

const metrics = [
  { label: "Forecasted Sales", value: "$457.40K" },
  { label: "Target On Hand Inventory", value: "6.9M" },
  { label: "Target Days of Supply", value: "194.4" },
  { label: "Target Backorder Rate", value: "27.9%" },
  { label: "Return Rate", value: "10.3%" },
];

export default function ForecastDashboard() {
  return (
    <>
      <h1 className="text-2xl font-medium text-gray-700 mb-6">
        Forecast Analysis Dashboard
      </h1>

      {/* Filters */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a supplier" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="supplier1">Supplier 1</SelectItem>
            <SelectItem value="supplier2">Supplier 2</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="category1">Category 1</SelectItem>
            <SelectItem value="category2">Category 2</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a SKU" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sku1">SKU 1</SelectItem>
            <SelectItem value="sku2">SKU 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="text-sm text-gray-500">{metric.label}</div>
              <div className="text-2xl font-semibold mt-2">{metric.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-lg font-medium mb-4">Forecasted Demand</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#f472b6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
