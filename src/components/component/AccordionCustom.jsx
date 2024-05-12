"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import {
    Card,
    CardHeader,
    CardBody,
    Image,
} from "@nextui-org/react";

export default function AccordionCustom() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="pt-7">
      <Accordion variant="splitted">
        <AccordionItem key="1" aria-label="Accordion 1" title="Introduction to MySQL">
            <Card className="py-4 w-[300px] mb-5">
                <CardHeader className="overflow-visible p-2 px-4 flex gap-3">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="/assets/images/folder.png"
                    width={30}
                  />
                  <h4 className="font-bold text-large">Lesson 1</h4>
                </CardHeader>
                <CardBody className="py-2 px-4 flex gap-2">
                  <p className="font-bold text-md">Introduction to MySQL</p>
                  <p className="text-xs text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, odio. Ab id, debitis reprehenderit dicta esse odit quae modi distinctio?</p>
                </CardBody>
              </Card>
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Installing and Upgrading MySQL">
            <Card className="py-4 w-[300px] mb-5">
                <CardHeader className="overflow-visible p-2 px-4 flex gap-3">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="/assets/images/folder.png"
                    width={30}
                  />
                  <h4 className="font-bold text-large">Lesson 1</h4>
                </CardHeader>
                <CardBody className="py-2 px-4 flex gap-2">
                  <p className="font-bold text-md">Introduction to MySQL</p>
                  <p className="text-xs text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, odio. Ab id, debitis reprehenderit dicta esse odit quae modi distinctio?</p>
                </CardBody>
              </Card>
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Understanding">
            <Card className="py-4 w-[300px] mb-5">
                <CardHeader className="overflow-visible p-2 px-4 flex gap-3">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="/assets/images/folder.png"
                    width={30}
                  />
                  <h4 className="font-bold text-large">Lesson 1</h4>
                </CardHeader>
                <CardBody className="py-2 px-4 flex gap-2">
                  <p className="font-bold text-md">Introduction to MySQL</p>
                  <p className="text-xs text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, odio. Ab id, debitis reprehenderit dicta esse odit quae modi distinctio?</p>
                </CardBody>
              </Card>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
