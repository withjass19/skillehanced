import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
// import { CardContainer } from "../ui/3d-card";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function CoursesSection() {
  return (
    <div className="grid grid-rows-1 w-[100%] h-[100%] bg-[#6387FC] px-48 py-28">
      <div className="row-sapn-1 flex flex-col">
        <div className="col-span-12 flex flex-col items-center pb-12">
          <p className="text-3xl font-bold text-white text-center mb-5">Our Popular Courses</p>
          <p className="text-sm text-center text-white px-72">Discover out mast sought-after courses, carefully curated to meet the demands to todays learners. Dive into engaging content crafted for success in every step of your educational journey.</p>
        </div>
        <div className="flex justify-between">
          <Card className="py-4 max-w-[310px]">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <Image
                alt="Card background"
                className="rounded-xl w-full"
                src="/assets/images/scrum.webp"
                width={270}
              />
            </CardHeader>
            <CardBody className="overflow-visible py-2 gap-1">
              <h4 className="font-bold text-large">
                Scrum Master Certification
              </h4>
              <p className="text-tiny uppercase font-bold">Start - 23 April</p>
              <small className="text-default-500 mb-3">Duration - 3 Days</small>
              <Button
              radius="lg"
              className="bg-gradient-to-tr from-black to-slate-500 text-white shadow-lg px-2"
            >
              Enroll
            </Button>
            </CardBody>
          </Card>

          <Card className="py-4 max-w-[310px]">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <Image
                alt="Card background"
                className="rounded-xl w-full"
                src="/assets/images/scrum.webp"
                width={270}
              />
            </CardHeader>
            <CardBody className="overflow-visible py-2 gap-1">
              <h4 className="font-bold text-large">
                Scrum Master Certification
              </h4>
              <p className="text-tiny uppercase font-bold">Start - 23 April</p>
              <small className="text-default-500 mb-3">Duration - 3 Days</small>
              <Button
              radius="lg"
              className="bg-gradient-to-tr from-black to-slate-500 text-white shadow-lg px-2"
            >
              Enroll
            </Button>
            </CardBody>
          </Card>

          <Card className="py-4 max-w-[310px]">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <Image
                alt="Card background"
                className="rounded-xl w-full"
                src="/assets/images/scrum.webp"
                width={270}
              />
            </CardHeader>
            <CardBody className="overflow-visible py-2 gap-1">
              <h4 className="font-bold text-large">
                Scrum Master Certification
              </h4>
              <p className="text-tiny uppercase font-bold">Start - 23 April</p>
              <small className="text-default-500 mb-3">Duration - 3 Days</small>
                <Button
                  radius="lg"
                  className="bg-gradient-to-tr from-black to-slate-500 text-white shadow-lg px-2"
                >
                <Link href='/courses/detail'>
                  Enroll
                </Link>
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
      {/* <div className='row-sapn-2'>
                <Card className="py-4 max-w-[310px]">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <Image
                            alt="Card background"
                            className="rounded-xl w-full"
                            src="/assets/images/scrum.webp"
                            width={270}
                        />
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 gap-1">
                        <h4 className="font-bold text-large">Scrum Master Certification</h4>
                        <p className="text-tiny uppercase font-bold">Start - 23 April</p>
                        <small className="text-default-500">Duration - 3 Days</small>
                    </CardBody>
                </Card>
            </div> */}
    </div>
  );
}
