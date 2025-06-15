"use client";

import { useGetValueQuery } from "@/redux/features/value/valueApi";
import { ErrorSwal, SuccessSwal } from "@/utils/allSwal";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import dayjs from "dayjs";
import { useRouter, useSearchParams } from "next/navigation";
import { useFinalApplyMutation } from "../../../redux/features/jobApply/jobApplyAPI";

const { Option } = Select;

interface ICat {
  _id: string;
  value: string;
  type: string;
}

interface Employment {
  company?: string;
  specialty?: string;
  country?: string;
  state?: string;
  city?: string;
  startDate?: dayjs.Dayjs;
  endDate?: dayjs.Dayjs;
}

interface FormValues {
  emploment: Employment[];
}

export default function EmploymentHistory() {
  const [finalApply] = useFinalApplyMutation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const jobId = searchParams?.get("jobId") || "";

  const { data: specialtyV } = useGetValueQuery("Specialty");

  const specialtyValue = specialtyV?.data;

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

    const res = await finalApply(body);
    if (res?.data?.success) {
      SuccessSwal({
        title: "Success",
        text: "Apply Complete",
      });
      router.push(`/all-jobs`);
    } else {
      ErrorSwal({
        title: "Something went wrong",
        text:
          (res?.error &&
            "data" in res.error &&
            (res.error as { data?: { message?: string } }).data?.message) ||
          "Please try again later.",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 border rounded">
      <Form<FormValues>
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ emploment: [{}] }}
      >
        <Form.List name="emploment">
          {(fields, { add, remove }) => (
            <>
              <h3 className="text-xl text-primary font-bold my-2">
                Employment History (Required)
              </h3>

              {fields.map(({ key, name, ...restField }) => (
                <div key={key} className="mb-8">
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex-1 border rounded-lg p-4">
                      {/* Company */}
                      <Form.Item
                        {...restField}
                        name={[name, "company"]}
                        label="Company/Office Name"
                        rules={[
                          {
                            required: true,
                            message: "Please enter company/office name",
                          },
                        ]}
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
                            rules={[
                              {
                                required: true,
                                message: "Please select specialty",
                              },
                            ]}
                          >
                            {/* <Select placeholder="Select...">
                              <Option value="spec1">Specialty 1</Option>
                              <Option value="spec2">Specialty 2</Option>
                              <Option value="spec3">Specialty 3</Option>
                            </Select> */}
                            <Select placeholder="Select Specialty">
                              {specialtyValue?.map((cat: ICat) => (
                                <Option key={cat._id} value={cat.type}>
                                  {cat.type}
                                </Option>
                              ))}
                            </Select>
                          </Form.Item>
                        </Col>

                        <Col xs={24} sm={12}>
                          <Form.Item
                            {...restField}
                            name={[name, "country"]}
                            label="Country"
                            rules={[
                              {
                                required: true,
                                message: "Please enter country",
                              },
                            ]}
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
                            rules={[
                              {
                                required: true,
                                message: "Please enter state",
                              },
                            ]}
                          >
                            <Input placeholder="Enter state" />
                          </Form.Item>
                        </Col>

                        <Col xs={24} sm={12}>
                          <Form.Item
                            {...restField}
                            name={[name, "city"]}
                            label="City"
                            rules={[
                              {
                                required: true,
                                message: "Please enter city",
                              },
                            ]}
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
                            rules={[
                              {
                                required: true,
                                message: "Please select start date",
                              },
                            ]}
                          >
                            <DatePicker className="w-full" />
                          </Form.Item>
                        </Col>

                        <Col xs={24} sm={12}>
                          <Form.Item
                            {...restField}
                            name={[name, "endDate"]}
                            label="End Date"
                            rules={[
                              {
                                required: true,
                                message: "Please select end date",
                              },
                            ]}
                          >
                            <DatePicker className="w-full" />
                          </Form.Item>
                        </Col>
                      </Row>
                    </div>

                    {/* Remove button - only show if there's more than one employment */}
                    {fields.length > 1 && (
                      <div className="">
                        <MinusCircleOutlined
                          onClick={() => remove(name)}
                          style={{
                            color: "#ef4444",
                            fontSize: "1.25rem",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                    )}
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

        {/* Back / Apply buttons */}
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
