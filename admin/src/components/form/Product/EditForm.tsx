"use client";
import { useFormContext } from "@/context/FormContext";
import Form from "../Form";
import Button from "@/components/ui/button/Button";
import InputForm from "../form-elements/InputForm";
import TextAreaForm from "../form-elements/TextAreaForm";
import { useNotification } from "@/context/NotificationContext";
import { FaRegSmileBeam } from "react-icons/fa";
import DropzoneImageInput from "../form-elements/DropZone";
import SelectForm from "../form-elements/SelectForm";
import SwitchForm from "../form-elements/SwitchForm";
import { usePrefill } from "@/hooks/usePrefill";

export default function AddForm() {
    const { values, setErrors } = useFormContext();
    const { openNotification } = useNotification();

    usePrefill({
        name: "Tên Sản Phẩm",
        images: ["https://tse1.mm.bing.net/th/id/OIP.CFG1RgZ9gTRtNgk_wWxG8QHaEO?rs=1&pid=ImgDetMain&o=7&rm=3"],
        category: ["1"],
        brand: ["1"],
        price: 100000,
        description: "Mô tả sản phẩm",
    });

    const handleSubmit = (data: Record<string, any> | FormData) => {
        const newErrors: { name: string; message: string }[] = [];

        // validate text fields
        // if (!values.title) newErrors.push({ name: "title", message: "Tiêu đề không được để trống" });
        // if (!values.content) newErrors.push({ name: "content", message: "Nội dung không được để trống" });
        // if (!values.image) newErrors.push({ name: "image", message: "Vui lòng chọn ảnh" });
        // if (!values.publishDate) newErrors.push({ name: "publishDate", message: "Vui lòng chọn ngày đăng" });

        setErrors(newErrors);

        if (newErrors.length === 0) {
            if (data instanceof FormData) {
                // multipart submit
                console.log("🚀 Multipart FormData submit:");
                for (const [key, value] of data.entries()) {
                    console.log(key, value);
                }
                console.log("Categories:", data); // nếu là multi select
            } else {
                // json submit
                console.log("🚀 JSON submit:", data);
            }
            openNotification({
                message: "Custom Notification",
                description: "Nội dung chi tiết thông báo",
                placement: "top",
                duration: 3,
                icon: <FaRegSmileBeam style={{ color: "green" }} />,
                style: { borderLeft: "5px solid green" },
            })
        } else {
            console.log("❌ Errors:", newErrors);
        }
    };

    return (
        <Form onSubmit={handleSubmit} mode="multipart">
            <InputForm label="Tên sản phẩm" name="name" placeholder="Nhập tên sản phẩm" />
            <DropzoneImageInput name="images" multiple className="mt-4" />
            <SelectForm label="Danh mục" name="category" placeholder="Chọn danh mục" options={[{ value: '1', label: 'Category 1' }, { value: '2', label: 'Category 2' }]} />
            <SelectForm label="Thương hiệu" name="brand" placeholder="Chọn thương hiệu" options={[{ value: '1', label: 'Brand 1' }, { value: '2', label: 'Brand 2' }]} />
            <InputForm label="Giá" name="price" placeholder="Nhập giá" type="number" />
            <SwitchForm
                name="switch1"
                defaultChecked={true}
                onLabel="Hot"
                offLabel="Normal"
            />
            <TextAreaForm label="Mô tả" name="description" placeholder="Nhập mô tả" />
            <div className="flex justify-center">
                <Button type="submit" variant="primary" className="mt-4" size="md">
                    Sửa Sản Phẩm
                </Button>
            </div>
        </Form>
    );
}
