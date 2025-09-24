import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import NewsTable from "@/components/tables/main/News/NewsTable";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Quản lý nhân viên"
};

export default function EmployeesPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Quản lý nhân viên"/>
      <div className="space-y-6">
        <ComponentCard title="Danh sách nhân viên" isDelete={true} linkBtn="employees" titleBtn="Nhân Viên" isAdd={true}>
          <NewsTable />
        </ComponentCard>
      </div>
    </div>
  );
}