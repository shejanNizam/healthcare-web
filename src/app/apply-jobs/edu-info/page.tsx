"use client";

import { ErrorSwal, SuccessSwal } from "@/utils/allSwal";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Form, Input, Row, Space } from "antd";
import dayjs from "dayjs";
import { useRouter, useSearchParams } from "next/navigation";
import { useEduInfoMutation } from "../../../redux/features/jobApply/jobApplyAPI";

interface ProfessionalLicense {
  licenseName: string;
  licenseState: string;
  licenseType: string;
  licenseCountry: string;
}

interface Certification {
  certificationName: string;
}

interface Education {
  schoolProgram: string;
  graduationDate: dayjs.Dayjs;
  degree: string;
  major: string;
  country: string;
  city: string;
}

interface FormValues {
  disciplinaryAction: string;
  professionalLicenses: ProfessionalLicense[];
  certifications: Certification[];
  educations: Education[];
}

export default function EducationInfo() {
  const [eduInfo] = useEduInfoMutation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const jobId = searchParams?.get("jobId") || "";

  const onFinish = async (values: FormValues) => {
    const transformedData = {
      professional_licenses: (values.professionalLicenses || []).map(
        (item) => ({
          medical_assistant: item.licenseName,
          city: item.licenseState,
          state: item.licenseCountry,
          license_type: item.licenseType,
        })
      ),
      certifications: (values.certifications || []).map(
        (item) => item.certificationName
      ),
      education: (values.educations || []).map((edu) => ({
        degree: edu.degree,
        school: edu.schoolProgram,
        year: edu.graduationDate ? edu.graduationDate.format("YYYY") : "",
        major: edu.major,
        city: edu.city,
        country: edu.country,
      })),
    };

    const body = {
      id: jobId,
      data: transformedData,
    };

    const res = await eduInfo(body);
    if (res?.data?.success) {
      SuccessSwal({
        title: "Success",
        text: "Your personal information has been saved successfully.",
      });
      router.push(`/apply-jobs/emp-history?jobId=${res?.data?.data?._id}`);
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
    <div className="max-w-4xl mx-auto p-6">
      <Form<FormValues>
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
          educations: [
            {
              schoolProgram: "",
              graduationDate: "",
              degree: "",
              major: "",
              country: "",
              city: "",
            },
          ],
        }}
        autoComplete="off"
      >
        <div className="mb-8 border rounded-lg p-4">
          <h3 className="text-xl text-primary font-bold my-2">
            Educations and credentials
          </h3>

          {/* Professional Licenses (Optional) */}
          <Form.List name="professionalLicenses">
            {(fields, { add, remove }) => (
              <>
                <h3 className="text-xl text-primary font-bold mt-8 mb-4">
                  Your professional licenses (Optional)
                </h3>
                {fields.map(({ key, name, ...restField }) => (
                  <Row gutter={16} key={key} className="mb-4 items-start">
                    <Col xs={24} sm={12} md={6}>
                      <Form.Item {...restField} name={[name, "licenseName"]}>
                        <Input placeholder="License Name" />
                      </Form.Item>
                    </Col>

                    <Col xs={24} sm={12} md={6}>
                      <Form.Item {...restField} name={[name, "licenseState"]}>
                        <Input placeholder="State" />
                      </Form.Item>
                    </Col>

                    <Col xs={24} sm={12} md={6}>
                      <Form.Item {...restField} name={[name, "licenseType"]}>
                        <Input placeholder="License Number" />
                      </Form.Item>
                    </Col>

                    <Col xs={24} sm={12} md={4}>
                      <Form.Item {...restField} name={[name, "licenseCountry"]}>
                        <Input placeholder="Country" />
                      </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={2} className="text-center mt-1.5">
                      <MinusCircleOutlined
                        onClick={() => remove(name)}
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

          {/* Dynamic Education Section */}
          <Form.List name="educations">
            {(fields, { add, remove }) => (
              <>
                <h3 className="text-xl text-primary font-bold mt-8 mb-4">
                  Your Education (Required)
                </h3>

                {fields.map(({ key, name, ...restField }) => (
                  <div key={key} className="mb-8 border-b pb-4">
                    <Row gutter={[16, 16]}>
                      <Col xs={24} sm={8} md={8} lg={8}>
                        <Form.Item
                          {...restField}
                          name={[name, "schoolProgram"]}
                          label="School/Program"
                          rules={[
                            {
                              required: true,
                              message: "Please select school/program",
                            },
                          ]}
                        >
                          {/* <Select placeholder="Select...">
                            <Option value="program1">Program 1</Option>
                            <Option value="program2">Program 2</Option>
                          </Select> */}
                          <Input placeholder="Program" />
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={8} md={8} lg={8}>
                        <Form.Item
                          {...restField}
                          name={[name, "graduationDate"]}
                          label="Graduation Date"
                          rules={[
                            {
                              required: true,
                              message: "Please select graduation date",
                            },
                          ]}
                        >
                          <DatePicker className="w-full" />
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={8} md={8} lg={8}>
                        <Form.Item
                          {...restField}
                          name={[name, "degree"]}
                          label="Degree"
                          rules={[
                            { required: true, message: "Please select degree" },
                          ]}
                        >
                          {/* <Select placeholder="Select...">
                            <Option value="degree1">Degree 1</Option>
                            <Option value="degree2">Degree 2</Option>
                          </Select> */}
                          <Input placeholder="Degree" />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row gutter={[16, 16]}>
                      <Col xs={24} sm={8} md={8} lg={8}>
                        <Form.Item
                          {...restField}
                          name={[name, "major"]}
                          label="Major"
                          rules={[
                            { required: true, message: "Please select major" },
                          ]}
                        >
                          {/* <Select placeholder="Select...">
                            <Option value="major1">Major 1</Option>
                            <Option value="major2">Major 2</Option>
                          </Select> */}
                          <Input placeholder="Major" />
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={8} md={8} lg={8}>
                        <Form.Item
                          {...restField}
                          name={[name, "country"]}
                          label="Country"
                          rules={[
                            { required: true, message: "Please enter country" },
                          ]}
                        >
                          <Input placeholder="Country name" />
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={8} md={8} lg={8}>
                        <Form.Item
                          {...restField}
                          name={[name, "city"]}
                          label="City"
                          rules={[
                            { required: true, message: "Please enter city" },
                          ]}
                        >
                          <Input placeholder="City name" />
                        </Form.Item>
                      </Col>
                    </Row>

                    {fields.length > 1 && (
                      <div className="text-right mt-2">
                        <Button
                          type="text"
                          danger
                          icon={<MinusCircleOutlined />}
                          onClick={() => remove(name)}
                        >
                          Remove Education
                        </Button>
                      </div>
                    )}
                  </div>
                ))}

                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() =>
                      add({
                        schoolProgram: "",
                        graduationDate: dayjs(),
                        degree: "",
                        major: "",
                        country: "",
                        city: "",
                      })
                    }
                    block
                    icon={<PlusOutlined />}
                  >
                    Add Another Education
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
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
