"use client";

import { useState } from "react";
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

const inventoryData = [
  { date: "Jan 2023", value: 6500000 },
  { date: "Mar 2023", value: 7200000 },
  { date: "May 2023", value: 7300000 },
  { date: "Jul 2023", value: 7100000 },
  { date: "Sep 2023", value: 6800000 },
  { date: "Nov 2023", value: 7400000 },
  { date: "Jan 2024", value: 7000000 },
];

const metrics = [
  { label: "Forecasted Sales", value: "$457.40K" },
  { label: "On Hand Inventory", value: "$6.90M" },
  { label: "On Order Inventory", value: "$4.20M" },
  { label: "Days of Supply", value: "194.4" },
  { label: "Return Rate", value: "10.3%" },
  { label: "Order to Ship Days", value: "16.1" },
  { label: "Turnover Ratio", value: "2.3" },
  { label: "Backorder Rate", value: "27.9%" },
  { label: "Average Inventory Age", value: "98.6" },
  { label: "Average Order Cost", value: "$27.09K" },
];

export default function InventoryDashboard() {
  const [dateRange] = useState("Jan 1, 2023 - Sep 30, 2024");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium text-gray-700">
        Inventory Analysis Dashboard
      </h1>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Select defaultValue={dateRange}>
          <SelectTrigger>
            <SelectValue>{dateRange}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={dateRange}>{dateRange}</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a supplier" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="supplier1">Supplier 1</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="category1">Category 1</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a SKU" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sku1">SKU 1</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="text-sm text-gray-500">{metric.label}</div>
              <div className="text-2xl font-semibold mt-2">{metric.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">
              Inventory On Hand Over Time
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={inventoryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#2563eb"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">
              Inventory On Order Over Time
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={inventoryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#2563eb"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">
              Turnover Rate Over Time
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={inventoryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#2563eb"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">
              Backorder Rate Over Time
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={inventoryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#2563eb"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
