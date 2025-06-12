/* eslint-disable @typescript-eslint/no-explicit-any */
// export default function EmploymentHistory() {
//   return (
//     <div>
//       <h3>EmploymentHistory</h3>
//     </div>
//   );
// }

"use client";

import { SuccessSwal } from "@/utils/allSwal";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { useFinalApplyMutation } from "../../../redux/features/jobApply/jobApplyAPI";

const { Option } = Select;

export default function EmploymentHistory() {
  const [finalApply] = useFinalApplyMutation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const jobId = searchParams?.get("jobId") || "";

  const onFinish = async (values: {
    emploment: {
      company?: string;
      specialty?: string;
      country?: string;
      state?: string;
      city?: string;
      start_Date?: string;
      end_Date?: string;
    }[];
  }) => {
    const body = {
      id: jobId,
      data: values,
    };

    const res: any = await finalApply(body);
    if (res?.data?.success) {
      SuccessSwal({
        title: "Success",
        text: "Apply Complete",
      });
      router.push(`/all-jobs`);
    } else {
      SuccessSwal({
        title: "Something went wrong",
        text: res?.error?.data?.message || "Please try again later.",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 border rounded">
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ employments: [{}] }}
      >
        <Form.List name="emploment">
          {(fields, { add, remove }) => (
            <>
              <h3 className="text-xl text-primary font-bold my-2">
                Employment History (optional)
              </h3>
              {fields.map(({ key, name, ...restField }) => (
                <div key={key} className="mb-8  ">
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex-1 border rounded-lg p-4">
                      {/* Company */}
                      <Form.Item
                        {...restField}
                        name={[name, "company"]}
                        label="Company/Office Name"
                        // rules={[
                        //   { required: true, message: "Please enter company name" },
                        // ]}
                      >
                        <Input placeholder="Enter your company/office name" />
                      </Form.Item>

                      {/* Specialty / Country */}
                      <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12}>
                          <Form.Item
                            {...restField}
                            name={[name, "specialty"]}
                            label="Specialty"
                          >
                            <Select placeholder="Select...">
                              <Option value="spec1">Specialty 1</Option>
                              <Option value="spec2">Specialty 2</Option>
                            </Select>
                          </Form.Item>
                        </Col>

                        <Col xs={24} sm={12}>
                          <Form.Item
                            {...restField}
                            name={[name, "country"]}
                            label="Country"
                          >
                            <Input placeholder="Enter country" />
                          </Form.Item>
                        </Col>
                      </Row>

                      {/* State / City */}
                      <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12}>
                          <Form.Item
                            {...restField}
                            name={[name, "state"]}
                            label="State"
                          >
                            <Input placeholder="Enter state" />
                          </Form.Item>
                        </Col>

                        <Col xs={24} sm={12}>
                          <Form.Item
                            {...restField}
                            name={[name, "city"]}
                            label="City"
                          >
                            <Input placeholder="Enter city" />
                          </Form.Item>
                        </Col>
                      </Row>

                      {/* Start / End Date */}
                      <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12}>
                          <Form.Item
                            {...restField}
                            name={[name, "startDate"]}
                            label="Start Date"
                          >
                            <DatePicker className="w-full" />
                          </Form.Item>
                        </Col>

                        <Col xs={24} sm={12}>
                          <Form.Item
                            {...restField}
                            name={[name, "endDate"]}
                            label="End Date"
                          >
                            <DatePicker className="w-full" />
                          </Form.Item>
                        </Col>
                      </Row>
                    </div>
                    {/* Add/Remove buttons */}
                    <div className=" ">
                      <MinusCircleOutlined
                        onClick={() => remove(name)}
                        // className="text-red-500 text-xl cursor-pointer"
                        style={{
                          color: "#ef4444",
                          fontSize: "1.25rem",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
              {/* Add Employment Button */}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Employment
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        {/* Back / Apply */}
        <div className="flex justify-between mt-6">
          <Button onClick={() => router.back()} type="default" className="w-24">
            Back
          </Button>

          <Button type="primary" htmlType="submit" className="w-48">
            Apply
          </Button>
        </div>
      </Form>
    </div>
  );
}
