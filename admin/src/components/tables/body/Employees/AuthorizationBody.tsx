"use client"
import React from "react";
import {
  TableBody,
  TableCell,
  TableRow,
} from "../../../ui/table";
import Switch from "@/components/form/switch/Switch";

interface User {
  image: string;
  name: string;
}

interface NewsTableRow {
  id: string | number;
  user: User;
  projectName: string;
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
        <TableRow className="bg-gray-50 dark:bg-white/[0.03]">
          <TableCell colSpan={5} className="px-4 py-3 text-gray-500 text-center text-base font-semibold dark:text-gray-400 ">
            Quản lý sản phẩm
          </TableCell>
        </TableRow>
        {tableData.map((order) => (
          <>
            <TableRow key={order.id}>
              <TableCell  className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                Thêm sản phẩm
              </TableCell>
              <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                <Switch
                  name="switch1"
                  checked={true}
                  onChange={() => {}}
                  onLabel="Có quyền"
                  offLabel="Không có"
                  size="lg"
                />
              </TableCell>
              <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                <Switch
                  name="switch1"
                  checked={true}
                  onChange={() => {}}
                  onLabel="Có quyền"
                  offLabel="Không có"
                  size="lg"
                />
              </TableCell>
              <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                <Switch
                  name="switch1"
                  checked={true}
                  onChange={() => {}}
                  onLabel="Có quyền"
                  offLabel="Không có"
                  size="lg"
                />
              </TableCell>
              <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                <Switch
                  name="switch1"
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
      </TableBody>
    </>
  );
}

export default AuthorizationBody;