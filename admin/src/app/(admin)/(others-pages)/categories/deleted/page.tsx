import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import CategoryTableDelete from "@/components/tables/main/Categories/CategoryTableDeleted";

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Danh mục Đã Xóa"
};

export default function DeletedCategoryPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Danh mục đã xóa" pageParent="Quản lý danh mục" urlPageParent="/categories"/>
      <div className="space-y-6">
        <ComponentCard title="Danh sách danh mục" linkBtn="categories" titleBtn="Danh Mục" isDelete={false}>
          <CategoryTableDelete />
        </ComponentCard>
      </div>
    </div>
  );
}

