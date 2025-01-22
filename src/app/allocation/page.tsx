"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const allocationData = [
  {
    project: "2449 Willow Avenue",
    products: {
      "TIMBER FIBER": { required: 900, onHand: 500, onOrder: 400 },
      THERMAFBER: { required: 800, onHand: 600, onOrder: 200 },
      'R21 16" KRAFT': { required: 500, onHand: 250, onOrder: 0 },
      ROCKWOOL: { required: 400, onHand: 0, onOrder: 400 },
    },
  },
  {
    project: "1152 August Court",
    products: {
      "TIMBER FIBER": { required: 200, onHand: 200, onOrder: 0 },
      THERMAFBER: { required: 150, onHand: 150, onOrder: 0 },
      'R21 16" KRAFT': { required: 150, onHand: 100, onOrder: 0 },
      ROCKWOOL: { required: 90, onHand: 90, onOrder: 0 },
    },
  },
  // Add more projects as needed
];

export default function InventoryAllocation() {
  return (
    <div className="space-y-6 p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
        <div>
          <h1 className="text-2xl font-medium text-gray-700 mb-2">
            Inventory Allocation Report
          </h1>
          <p className="text-gray-500">
            This report shows inventory allocated to each job
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Select>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Select Jobs" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Jobs</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Select Products" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Products</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="secondary" className="w-full sm:w-auto">
            Download CSV
          </Button>
        </div>
      </div>

      <div className="border rounded-lg overflow-x-auto">
        <div className="min-w-[1000px]">
          {" "}
          {/* Ensure minimum width for small screens */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="sticky left-0 bg-white z-20">
                  Project
                </TableHead>
                {Object.keys(allocationData[0].products).map((product) => (
                  <TableHead
                    key={product}
                    colSpan={3}
                    className="text-center border-l"
                  >
                    {product}
                  </TableHead>
                ))}
              </TableRow>
              <TableRow>
                <TableHead className="sticky left-0 bg-white z-20"></TableHead>
                {Object.keys(allocationData[0].products).map(
                  (product, index) => (
                    <>
                      <TableHead key={index} className="border-l">
                        Quantity Required
                      </TableHead>
                      <TableHead key={`${index}-1`}>Quantity On Hand</TableHead>
                      <TableHead key={`${index}-2`}>
                        Quantity On Order
                      </TableHead>
                    </>
                  )
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {allocationData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="sticky left-0 bg-white z-10">
                    {row.project}
                  </TableCell>
                  {Object.values(row.products).map((product) => (
                    <>
                      <TableCell className="border-l">
                        {product.required}
                      </TableCell>
                      <TableCell>{product.onHand}</TableCell>
                      <TableCell>{product.onOrder}</TableCell>
                    </>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
