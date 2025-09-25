"use client"
import React from "react";
import {
  TableBody,
  TableCell,
  TableRow,
} from "../../../ui/table";
import Switch from "@/components/form/switch/Switch";

interface Role {
  id: string;
  name: string;
}

interface NewsTableRow {
  id: string | number;
  name: string;
  role: Role[];
  // Add other fields if needed
}

interface NewsTableBodyProps {
  tableData: NewsTableRow[];
}

const AuthorizationBody: React.FC<NewsTableBodyProps> = ({
  tableData,
}) => {
  return (
    <>
      <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
        {tableData.map((order) => (
          <>
            <TableRow key={order.id} className="bg-gray-50 dark:bg-white/[0.03]">
              <TableCell colSpan={5} className="px-4 py-3 text-gray-500 text-center text-base font-semibold dark:text-gray-400 ">
                {order.name}
              </TableCell>
            </TableRow>
            {order.role.map((role) => (
              <>
                <TableRow key={role.id} id={role.id}>
                  <TableCell  className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {role.name}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Switch
                      name="manager"
                      checked={true}
                      onChange={() => {}}
                      onLabel="Có quyền"
                      offLabel="Không có"
                      size="lg"
                    />
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Switch
                      name="salesperson"
                      checked={true}
                      onChange={() => {}}
                      onLabel="Có quyền"
                      offLabel="Không có"
                      size="lg"
                    />
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    <Switch
                      name="warehouse_staff"
                      checked={true}
                      onChange={() => {}}
                      onLabel="Có quyền"
                      offLabel="Không có"
                      size="lg"
                    />
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    <Switch
                      name="accounting"
                      checked={true}
                      onChange={() => {}}
                      onLabel="Có quyền"
                      offLabel="Không có"
                      size="lg"
                    />
                  </TableCell>
                </TableRow>
              </>
            ))}
          </>
        ))}
        
      </TableBody>
    </>
  );
}

export default AuthorizationBody;