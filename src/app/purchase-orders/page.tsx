"use client";

import { useState, useCallback } from "react";
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
import { Input } from "@/components/ui/input";

interface Order {
  id: string;
  product: string;
  description: string;
  vendorCode: string;
  quantity: {
    value: number;
    isEditing: boolean;
  };
  unitPrice: {
    value: number;
    isEditing: boolean;
  };
  subTotal: number;
}

const initialOrders: Order[] = [
  {
    id: "1",
    product: 'TIMBER FIBER 24"X24" (BL)',
    description: "(RED) ITEM 42.7 SQ FT / 9 BAGS PER BUNDLE",
    vendorCode: "M74",
    quantity: { value: 90, isEditing: false },
    unitPrice: { value: 42.7, isEditing: false },
    subTotal: 4599.35,
  },
  {
    id: "2",
    product: 'THERMAFBER 24"X16" (BL)',
    description: "(RED) ITEM 80 SQ FT / 4 BAGS PER BUNDLE",
    vendorCode: "M23",
    quantity: { value: 75, isEditing: false },
    unitPrice: { value: 86.95, isEditing: false },
    subTotal: 6520.95,
  },
];

export default function PurchaseOrders() {
  const [orders, setOrders] = useState<Order[]>(initialOrders);

  const handleQuantityChange = useCallback(
    (id: string, newQuantity: number) => {
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === id
            ? {
                ...order,
                quantity: { ...order.quantity, value: newQuantity },
                subTotal: newQuantity * order.unitPrice.value,
              }
            : order
        )
      );
    },
    []
  );

  const handleUnitPriceChange = useCallback(
    (id: string, newUnitPrice: number) => {
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === id
            ? {
                ...order,
                unitPrice: { ...order.unitPrice, value: newUnitPrice },
                subTotal: order.quantity.value * newUnitPrice,
              }
            : order
        )
      );
    },
    []
  );

  const toggleEditing = useCallback(
    (id: string, field: "quantity" | "unitPrice") => {
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === id
            ? {
                ...order,
                [field]: {
                  ...order[field],
                  isEditing: !order[field].isEditing,
                },
              }
            : order
        )
      );
    },
    []
  );

  const handleSaveChanges = useCallback(() => {
    // Mock API call to save changes
    console.log("Saving changes:", orders);
    alert("Changes saved successfully!");
  }, [orders]);

  return (
    <div className="space-y-6 p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
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
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Select>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="123 Easy St" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="123-easy">123 Easy St</SelectItem>
            </SelectContent>
          </Select>
          <Button className="w-full sm:w-auto">Generate Purchase Orders</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-medium text-gray-700">
          Purchase Orders for 123. Easy St.
        </h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Select>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="ISI Distributors" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="isi">ISI Distributors</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="secondary" className="w-full sm:w-auto">
            Download CSV
          </Button>
          <Button variant="secondary" className="w-full sm:w-auto">
            Download All
          </Button>
        </div>

        <div className="border rounded-lg overflow-x-auto">
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
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.product}</TableCell>
                  <TableCell>{order.description}</TableCell>
                  <TableCell>{order.vendorCode}</TableCell>
                  <TableCell>
                    {order.quantity.isEditing ? (
                      <Input
                        type="number"
                        value={order.quantity.value}
                        onChange={(e) =>
                          handleQuantityChange(
                            order.id,
                            Number.parseInt(e.target.value, 10)
                          )
                        }
                        onBlur={() => toggleEditing(order.id, "quantity")}
                        className="w-20"
                        autoFocus
                      />
                    ) : (
                      <span
                        onClick={() => toggleEditing(order.id, "quantity")}
                        className="cursor-pointer"
                      >
                        {order.quantity.value}
                      </span>
                    )}
                  </TableCell>
                  <TableCell>
                    {order.unitPrice.isEditing ? (
                      <Input
                        type="number"
                        value={order.unitPrice.value}
                        onChange={(e) =>
                          handleUnitPriceChange(
                            order.id,
                            Number.parseFloat(e.target.value)
                          )
                        }
                        onBlur={() => toggleEditing(order.id, "unitPrice")}
                        className="w-24"
                        step="0.01"
                        autoFocus
                      />
                    ) : (
                      <span
                        onClick={() => toggleEditing(order.id, "unitPrice")}
                        className="cursor-pointer"
                      >
                        ${order.unitPrice.value.toFixed(2)}
                      </span>
                    )}
                  </TableCell>
                  <TableCell>${order.subTotal.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex justify-end">
          <Button onClick={handleSaveChanges}>Save Changes</Button>
        </div>
      </div>
    </div>
  );
}
