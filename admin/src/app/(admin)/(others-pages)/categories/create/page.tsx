import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import AddForm from "@/components/form/Category/AddForm";
import { FormProvider } from "@/context/FormContext";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Thêm danh mục"
};

export default function CreateCategoryPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Thêm danh mục" pageParent="Quản lý danh mục" urlPageParent="/categories" />
      <FormProvider >
        <AddForm />
      </FormProvider>
    </div>
  );
}
