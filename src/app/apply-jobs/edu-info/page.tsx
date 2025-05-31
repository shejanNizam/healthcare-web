"use client";

import { SuccessSwal } from "@/utils/allSwal";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Space,
} from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { useEduInfoMutation } from "../../../redux/features/jobApply/jobApplyAPI";

const { Option } = Select;

export default function EducationInfo() {
  const [eduInfo] = useEduInfoMutation()
  const router = useRouter();
  const searchParams = useSearchParams();
  const jobId = searchParams?.get("jobId") || "";

  interface FormValues {
    disciplinaryAction: string;
    professionalLicenses: {
      licenseName: string;
      licenseState: string;
      licenseType: string;
      licenseCountry: string;
    }[];
    certifications: {
      certificationName: string;
    }[];
    schoolProgram: string;
    graduationDate: string;
    degree: string;
    major: string;
    country: string;
    city: string;
  }

  const onFinish = async (values: FormValues) => {
    const body = {
      id: jobId,
      data: values
    }
    const res = await eduInfo(body)
    if (res?.data?.success) {
      SuccessSwal({
        title: "Success",
        text: "Your personal information has been saved successfully.",
      });
      router.push(`/apply-jobs/edu-info?jobId=${res?.data?.data?._id}`);
    } else {
      SuccessSwal({
        title: "Error",
        text: "Some thing is wrong ",
      });
    }
    router.push(`/apply-jobs/emp-history?jobId=${jobId}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          professionalLicenses: [
            {
              licenseName: "",
              licenseState: "",
              licenseType: "",
              licenseCountry: "",
            },
          ],
          certifications: [{ certificationName: "" }],
        }}
        autoComplete="off"
      >
        <div className="mb-8 border rounded-lg p-4">
          <h3 className="text-xl text-primary font-bold my-2">
            Educations and credentials
          </h3>
          {/* Disciplinary Action */}
          <Form.Item
            label={
              <span className="font-semibold ">
                {" "}
                Have you ever had your professional license or certification, in
                any state, investigated, suspended or had disciplinary action
                taken against it?{" "}
              </span>
            }
            name="disciplinaryAction"
            rules={[{ required: true, message: "Please select Yes or No" }]}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>

          {/* Professional Licenses (Optional) */}
          <Form.List name="professionalLicenses">
            {(fields, { add, remove }) => (
              <>
                <h3 className="text-xl text-primary font-bold mt-8 mb-4">
                  Your professional licenses (Optional)
                </h3>
                {fields.map(({ key, name, ...restField }) => (
                  <Row gutter={16} key={key} className="mb-4 items-start ">
                    <Col xs={24} sm={12} md={6}>
                      <Form.Item
                        {...restField}
                        name={[name, "licenseName"]}
                      //   rules={[{ required: true, message: "Required" }]}
                      >
                        <Input placeholder="Medical Assistant" />
                      </Form.Item>
                    </Col>

                    <Col xs={24} sm={12} md={6}>
                      <Form.Item
                        {...restField}
                        name={[name, "licenseState"]}
                      //   rules={[{ required: true, message: "Required" }]}
                      >
                        <Input placeholder="New York" />
                      </Form.Item>
                    </Col>

                    <Col xs={24} sm={12} md={6}>
                      <Form.Item
                        {...restField}
                        name={[name, "licenseType"]}
                      //   rules={[{ required: true, message: "Required" }]}
                      >
                        <Select placeholder="License type">
                          <Option value="type1">Type 1</Option>
                          <Option value="type2">Type 2</Option>
                        </Select>
                      </Form.Item>
                    </Col>

                    <Col xs={24} sm={12} md={4}>
                      <Form.Item
                        {...restField}
                        name={[name, "licenseCountry"]}
                      //   rules={[{ required: true, message: "Required" }]}
                      >
                        <Select placeholder="State">
                          <Option value="state1">State 1</Option>
                          <Option value="state2">State 2</Option>
                        </Select>
                      </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={2} className="text-center mt-1.5">
                      <MinusCircleOutlined
                        onClick={() => remove(name)}
                        // className="text-red-600 cursor-pointer text-lg"
                        style={{
                          color: "#ef4444",
                          fontSize: "1.25rem",
                          cursor: "pointer",
                        }}
                      />
                    </Col>
                  </Row>
                ))}

                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add Professional License
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          {/* Certifications (Optional) */}
          <Form.List name="certifications">
            {(fields, { add, remove }) => (
              <>
                <h3 className="text-xl text-primary font-bold mt-8 mb-4">
                  Certifications (Optional)
                </h3>
                <p className="mb-4 font-semibold">
                  Check all of the current (not expired) certifications that you
                  have or add any that are missing.
                </p>

                {fields.map(({ key, name, ...restField }) => (
                  <Space key={key} className="mb-4" align="baseline">
                    <Form.Item
                      {...restField}
                      name={[name, "certificationName"]}
                    // rules={[
                    //   {
                    //     required: true,
                    //     message: "Please enter certification name",
                    //   },
                    // ]}
                    >
                      <Input placeholder="Certification name..." />
                    </Form.Item>

                    <MinusCircleOutlined
                      onClick={() => remove(name)}
                      className="mr-6"
                      style={{
                        color: "#ef4444",
                        fontSize: "1.25rem",
                        cursor: "pointer",
                      }}
                    />
                  </Space>
                ))}

                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add Certification
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          {/* Your Education (Required) */}
          <h3 className="text-xl text-primary font-bold mt-8 mb-4">
            Your Education (Required)
          </h3>

          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8} md={8} lg={8}>
              <Form.Item
                name="schoolProgram"
                label="School/Program"
                rules={[
                  { required: true, message: "Please select school/program" },
                ]}
              >
                <Select placeholder="Select...">
                  <Option value="program1">Program 1</Option>
                  <Option value="program2">Program 2</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} sm={8} md={8} lg={8}>
              <Form.Item
                name="graduationDate"
                label="Graduation Date"
                rules={[
                  { required: true, message: "Please select graduation date" },
                ]}
              >
                <DatePicker className="w-full" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={8} md={8} lg={8}>
              <Form.Item
                name="degree"
                label="Degree"
                rules={[{ required: true, message: "Please select degree" }]}
              >
                <Select placeholder="Select...">
                  <Option value="degree1">Degree 1</Option>
                  <Option value="degree2">Degree 2</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8} md={8} lg={8}>
              <Form.Item
                name="major"
                label="Major"
                rules={[{ required: true, message: "Please select major" }]}
              >
                <Select placeholder="Select...">
                  <Option value="major1">Major 1</Option>
                  <Option value="major2">Major 2</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} sm={8} md={8} lg={8}>
              <Form.Item
                name="country"
                label="Country"
                rules={[{ required: true, message: "Please enter country" }]}
              >
                <Input placeholder="Country name" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={8} md={8} lg={8}>
              <Form.Item
                name="city"
                label="City"
                rules={[{ required: true, message: "Please enter city" }]}
              >
                <Input placeholder="City name" />
              </Form.Item>
            </Col>
          </Row>
        </div>
        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <Button onClick={() => router.back()} type="default" className="w-24">
            Back
          </Button>
          <Button type="primary" htmlType="submit" className="w-48">
            Save and Continue
          </Button>
        </div>
      </Form>
    </div>
  );
}
