"use client";

import { ScrollArea } from "@/components/ui/scroll-area";

const metrics = [
  {
    title: "Fill Rate",
    formula: "(Quantity Shipped / Demand) × 100%",
    definition:
      "The percentage of customer demand that was met through immediate stock availability.",
  },
  {
    title: "Forecasted Demand",
    definition:
      "The predicted quantity of inventory that will be ordered or placed on a work order in a future time period. This metric is used to optimize inventory levels and to calculate the recommended order quantity (ROQ).",
  },
  {
    title: "Inventory Grade",
    definition:
      "A classification of inventory based on its demand relative to other SKUs. A Grade items are high-demand items that are frequently ordered, B Grade items are less so, and so on until D Grade items. E Grade items are slow movers that are essential to keep in stock. F Grade items are slow movers that are not stocked. S Grade items are special order or new items. O Grade items are obsolete.",
  },
  {
    title: "Inventory Position",
    definition:
      "Also known as pipeline inventory, this is the total quantity of inventory available plus the quantity on order. This metric is used for inventory optimization.",
    formula: "Inventory Position = Available Quantity + Quantity on Order",
  },
  // Add more metrics as needed
];

export default function Documentation() {
  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-5rem)]">
      {/* Left Sidebar */}
      <div className="w-full md:w-64 border-b md:border-r bg-gray-50 p-4">
        <nav className="space-y-2">
          <a href="#" className="block px-2 py-1 text-sm">
            Introduction
          </a>
          <a
            href="#"
            className="block px-2 py-1 text-sm font-medium bg-gray-200 rounded"
          >
            Metric Glossary
          </a>
          <a href="#" className="block px-2 py-1 text-sm">
            Optimization Process
          </a>
          <a href="#" className="block px-2 py-1 text-sm">
            Tools
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 overflow-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-medium text-gray-700 mb-6">
            Metric Glossary
          </h1>

          <div className="space-y-8">
            {metrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                <h2 className="text-lg font-medium text-gray-900">
                  {metric.title}
                </h2>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong className="font-medium">Definition:</strong>{" "}
                    {metric.definition}
                  </p>
                  {metric.formula && (
                    <p>
                      <strong className="font-medium">Formula:</strong>
                      <code className="ml-2 px-2 py-1 bg-gray-100 rounded text-sm">
                        {metric.formula}
                      </code>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar - Quick Links */}
      <ScrollArea className="hidden lg:block w-64 border-l bg-gray-50">
        <div className="p-4 space-y-2">
          <h3 className="font-medium mb-4">Quick Links</h3>
          {metrics.map((metric, index) => (
            <a
              key={index}
              href={`#${metric.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="block text-sm text-gray-600 hover:text-gray-900"
            >
              {metric.title}
            </a>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
