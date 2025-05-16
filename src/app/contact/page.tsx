"use client";

import { Button, Form, Input } from "antd";
import Image from "next/image";
import contact_image from "../../assets/contact/contact_image.png";

const { TextArea } = Input;

export default function Contact() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold">Contact Us</h1>
        <p className="mt-2 sm:mt-4 text-base sm:text-lg">
          We would love to hear from you!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
        {/* Image Section */}
        <div className="order-2 lg:order-1 w-full h-auto lg:h-[500px] bg-secondary rounded-r-full flex justify-center lg:justify-end items-center p-4 md:p-8">
          <div className="relative w-full max-w-md h-64 md:h-80">
            <Image
              src={contact_image}
              alt="contact_image"
              fill
              className="object-contain"
              priority={false}
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="order-1 lg:order-2">
          <Form
            layout="vertical"
            className="w-full max-w-md mx-auto lg:mx-0"
            initialValues={{ remember: true }}
          >
            <Form.Item
              label={
                <span className="text-primary font-semibold">Full Name</span>
              }
              name="fullname"
              rules={[
                { required: true, message: "Please enter your full name" },
              ]}
            >
              <Input
                placeholder="Enter your full name"
                className="rounded-md h-10 sm:h-12"
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-primary font-semibold">Email</span>}
              name="email"
              rules={[
                { required: true, message: "Please enter your email address" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input
                placeholder="Enter your email address"
                className="rounded-md h-10 sm:h-12"
              />
            </Form.Item>

            <Form.Item
              label={
                <span className="text-primary font-semibold">
                  Write your message
                </span>
              }
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <TextArea
                placeholder="Enter your message"
                rows={5}
                className="rounded-md"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-primary hover:bg-primary/80 h-10 sm:h-12 text-base sm:text-lg font-medium"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
