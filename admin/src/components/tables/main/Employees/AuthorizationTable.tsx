import Button from "@/components/ui/button/Button";
import { Table } from "@/components/ui/table";
import React from "react";
import TableHeaderOne from "../../header/TableHeaderOne";
import AuthorizationBody from "../../body/Employees/AuthorizationBody";

interface Role {
  id: string;
  name: string;
}

interface Order {
  id: number;
  name: string;
  role: Role[];
}

const title = ["Chức năng",'Quản lý cửa hàng',"Nhân viên bán hàng","Nhân viên kho","Kế toán"]
const tableData:Order[] = [
  {
    id: 1,
    name: "Quản lý sản phẩm",
    role: [
      {
        id:"view_product",
        name: "Xem sản phẩm",
      },
      {
        id:"add_product",
        name: "Thêm sản phẩm",
      },
      {
        id:"edit_product",
        name: "Sửa sản phẩm",
      },
      {
        id:"delete_product",
        name: "Xóa sản phẩm",
      },
      {
        id:"reset_product",
        name: "Khôi phục sản phẩm"
      }
    ],
  },
  {
    id: 2,
    name: "Quản lý tin tức",
    role: [
      {
        id:"view_news",
        name: "Xem tin tức",
      },
      {
        id:"add_news",
        name: "Thêm tin tức",
      },
      {
        id:"edit_news",
        name: "Sửa tin tức",
      },
      {
        id:"delete_news",
        name: "Xóa tin tức",
      },
      {
        id:"reset_news",
        name: "Khôi phục tin tức"
      }
    ],
  },
  {
    id: 3,
    name: "Quản lý đơn hàng",
    role: [
      {
        id:"view_order",
        name: "Xem đơn hàng",
      },
      {
        id:"add_order",
        name: "Thêm đơn hàng",
      },
      {
        id:"update_order",
        name: "Sửa đơn hàng",
      }
    ]
  },
  {
    id: 4,
    name: "Quản lý khách hàng",
    role: [
      {
        id:"view_customer",
        name: "Xem khách hàng",
      },
      {
        id:"add_customer",
        name: "Thêm khách hàng",
      },
      {
        id:"edit_customer",
        name: "Sửa khách hàng",
      },
      {
        id:"delete_customer",
        name: "Xóa khách hàng",
      },
      {
        id:"reset_customer",
        name: "Khôi phục khách hàng"
      }
    ]
  }
];

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
            <TableHeaderOne title={title}/>
            {/* Table Body */}
            <AuthorizationBody tableData={tableData} />
          </Table>
        </div>
      </div>
    </div>
    </div>
  );
}