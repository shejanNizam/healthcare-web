/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useGetValueQuery } from "@/redux/features/value/valueApi";
import { Button, Col, Form, Input, Row, Select } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { useApplyInfoMutation } from "../../redux/features/jobApply/jobApplyAPI";
import { ErrorSwal, SuccessSwal } from "../../utils/allSwal";

const { Option } = Select;

export default function ApplyJobs() {
  const [applyInfo] = useApplyInfoMutation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const jobId = searchParams?.get("jobId") || "";

  const { data: professionV } = useGetValueQuery("Profession");
  const { data: disciplineV } = useGetValueQuery("Discipline");
  const { data: specialtyV } = useGetValueQuery("Specialty");
  const { data: licenseV } = useGetValueQuery("License");

  const professionValue = professionV?.data;
  const disciplineValue = disciplineV?.data;
  const specialtyValue = specialtyV?.data;
  const licenseValue = licenseV?.data;

  interface ICat {
    _id: string;
    value: string;
    type: string;
  }

  interface IJobInfo {
    fullName: string;
    email: string;
    gender: string;
    phone: string;
    country: string;
    state: string;
    city: string;
    profession?: string;
    discipline?: string;
    specialty?: string;
    secondarySpecialty?: string;
    jobPost?: string;
  }

  const onFinish = async (_values: {
    fullName: string;
    email: string;
    gender: string;
    phone: string;
    country: string;
    state: string;
    city: string;
    profession?: string;
    discipline?: string;
    specialty?: string;
    secondarySpecialty?: string;
  }) => {
    const data: IJobInfo = {
      ..._values,
    };
    if (jobId) {
      // data.jobId = jobId;
      data.jobPost = jobId;
    }

    const res: any = await applyInfo(data);
    if (res?.data?.success) {
      SuccessSwal({
        title: "Success",
        text: "Your personal information has been saved successfully.",
      });
      router.push(`/apply-jobs/edu-info?jobId=${res?.data?.data?._id}`);
    } else {
      ErrorSwal({
        title: "Something went wrong",
        text: res?.error?.data?.message || "Please try again later.",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6">
      <Form layout="vertical" onFinish={onFinish} autoComplete="off">
        <div className="mb-8 border rounded-lg p-4">
          <h3 className="text-xl text-primary font-bold font-raleway-bold my-2">
            Personal Information
          </h3>
          {/* Full Name */}
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              { required: true, message: "Please enter your full name." },
            ]}
          >
            <Input placeholder="Enter your full name." />
          </Form.Item>

          {/* Email */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email." },
              { type: "email", message: "Please enter a valid email." },
            ]}
          >
            <Input placeholder="Enter your email address here." />
          </Form.Item>

          {/* Gender */}
          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ required: true, message: "Please select your gender." }]}
          >
            <Select placeholder="Select...">
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>

          {/* Phone No. and Country */}
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12}>
              <Form.Item
                label="Phone No."
                name="phone"
                rules={[
                  { required: true, message: "Please enter your phone no!" },
                  {
                    pattern: /^\+?[1-9]\d{7,14}$/,
                    message: "Enter a valid number!",
                  },
                ]}
              >
                <Input placeholder="Enter your phone no." />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={12}>
              <Form.Item
                label="Country"
                name="country"
                rules={[
                  { required: true, message: "Please enter your country." },
                ]}
              >
                <Input placeholder="Enter your country." />
              </Form.Item>
            </Col>
          </Row>

          {/* State and City */}
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12}>
              <Form.Item
                label="State"
                name="state"
                rules={[
                  { required: true, message: "Please enter your state." },
                ]}
              >
                <Input placeholder="Enter your state." />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={12}>
              <Form.Item
                label="City"
                name="city"
                rules={[{ required: true, message: "Please enter your city." }]}
              >
                <Input placeholder="Enter your city." />
              </Form.Item>
            </Col>
          </Row>

          {/* Expertise Section */}

          <h3 className="text-xl text-primary font-bold font-raleway-bold my-2">
            Expertise (Optional)
          </h3>

          {/* Profession and Discipline */}
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12}>
              <Form.Item label="Profession" name="profession">
                {/* <Select placeholder="Select...">
                  <Option value="profession1">Profession 1</Option>
                  <Option value="profession2">Profession 2</Option>
                </Select> */}
                <Select placeholder="Select Profession">
                  {professionValue?.map((cat: ICat) => (
                    <Option key={cat._id} value={cat.type}>
                      {cat.type}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={12}>
              <Form.Item label="Discipline" name="discipline">
                {/* <Select placeholder="Select...">
                  <Option value="discipline1">Discipline 1</Option>
                  <Option value="discipline2">Discipline 2</Option>
                </Select> */}
                <Select placeholder="Select Discipline">
                  {disciplineValue?.map((cat: ICat) => (
                    <Option key={cat._id} value={cat.type}>
                      {cat.type}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          {/* Specialty/Setting and Secondary Specialty/Setting */}
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12}>
              <Form.Item label="Specialty" name="specialty">
                {/* <Select placeholder="Select...">
                  <Option value="specialty1">Specialty 1</Option>
                  <Option value="specialty2">Specialty 2</Option>
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

            <Col xs={24} sm={24} md={12}>
              <Form.Item label="License Type" name="secondarySpecialty">
                {/* <Select placeholder="Select...">
                  <Option value="secondary1">Secondary 1</Option>
                  <Option value="secondary2">Secondary 2</Option>
                </Select> */}
                <Select placeholder="Select License">
                  {licenseValue?.map((cat: ICat) => (
                    <Option key={cat._id} value={cat.type}>
                      {cat.type}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between mt-6 gap-4 sm:gap-0">
          <Button
            onClick={() => router.back()}
            type="default"
            className="w-full sm:w-24"
          >
            Back
          </Button>

          <Button type="primary" htmlType="submit" className="w-full sm:w-48">
            Save and Continue
          </Button>
        </div>
      </Form>
    </div>
  );
}
