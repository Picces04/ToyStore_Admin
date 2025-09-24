import Button from "@/components/ui/button/Button";
import { Table } from "@/components/ui/table";
import React from "react";

export default function BasicTables() {
  return (
    <div>
        <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
          <div className="px-6 py-5">
            <Button size="sm" variant="info">
                Phân quyền
            </Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table className="w-full">
            {/* Table Header */}
            {/* <TableHeaderOne > */}
                sdsadsa
            {/* Table Body */}
            {/* <AuthorizationBody /> */}
          </Table>
        </div>
      </div>
    </div>
    </div>
  );
}