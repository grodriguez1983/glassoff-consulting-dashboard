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

const purchaseOrders = [
  {
    product: 'TIMBER FIBER 24"X24" (BL)',
    description: "(RED) ITEM 42.7 SQ FT / 9 BAGS PER BUNDLE",
    vendorCode: "M74",
    quantity: 90,
    unitPrice: 42.7,
    subTotal: 4599.35,
  },
  {
    product: 'THERMAFBER 24"X16" (BL)',
    description: "(RED) ITEM 80 SQ FT / 4 BAGS PER BUNDLE",
    vendorCode: "M23",
    quantity: 75,
    unitPrice: 86.95,
    subTotal: 6520.95,
  },
  {
    product: "ROCKWOOL 1.5X16 (BL)",
    description: "(RED) ITEM 95 SQ FT / 4 BAGS PER BUNDLE",
    vendorCode: "M63",
    quantity: 7,
    unitPrice: 96.95,
    subTotal: 3672.95,
  },
  {
    product: 'R21 15" KRAFT F (KNAUF)',
    description: "67.81 SQ FT / 5 BAGS PER BUNDLE",
    vendorCode: "M82",
    quantity: 20,
    unitPrice: 86.7,
    subTotal: 1734.0,
  },
];

export default function InventoryOptimization() {
  return (
    <div className="space-y-6 p-4 md:p-6">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-start">
        <div>
          <h1 className="text-2xl font-medium text-gray-700 mb-2">
            Purchase Order Generation
          </h1>
          <p className="text-gray-500">
            Select a job to generate the required purchase orders. This will
            create an individual purchase order for each supplier, containing
            the recommended products and quantities.
          </p>
        </div>
        <div className="flex flex-col w-full gap-2 md:flex-row md:items-center md:gap-4 md:w-auto">
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="123 Easy St" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="123-easy">123 Easy St</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-slate-700 hover:bg-slate-800">
            Generate Purchase Orders
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-medium text-gray-700">
          Purchase Orders for 123. Easy St.
        </h2>

        <div className="flex flex-col w-full gap-2 sm:flex-row sm:items-center sm:gap-4">
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="ISI Distributors" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="isi">ISI Distributors</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="secondary">Download CSV</Button>
          <Button variant="secondary">Download All</Button>
        </div>

        <div className="border rounded-lg overflow-x-auto -mx-4 md:mx-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Vendor Product Code</TableHead>
                <TableHead>Recommended Order Quantity</TableHead>
                <TableHead>Unit Price</TableHead>
                <TableHead>Sub Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {purchaseOrders.map((order, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{order.product}</TableCell>
                  <TableCell>{order.description}</TableCell>
                  <TableCell>{order.vendorCode}</TableCell>
                  <TableCell>{order.quantity}</TableCell>
                  <TableCell>${order.unitPrice.toFixed(2)}</TableCell>
                  <TableCell>${order.subTotal.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
