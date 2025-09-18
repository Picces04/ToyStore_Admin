import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicTableOne from "@/components/tables/BasicTableOne";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Quản lý tin tức"
};

export default function BasicTables() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Quản lý tin tức"/>
      <div className="space-y-6">
        <ComponentCard title="Danh sách tin tức">
          <BasicTableOne />
        </ComponentCard>
      </div>
    </div>
  );
}
