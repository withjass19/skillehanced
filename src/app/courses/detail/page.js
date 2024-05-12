import Footer from "@/components/try/Footer";
import { NavbarDemo } from "@/components/try/NavBar";
import React from "react";
import { FaStar } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
} from "@nextui-org/react";
// import {Accordion, AccordionItem} from "@nextui-org/react";
import AccordionCustom from "@/components/component/AccordionCustom";

export default function Detail() {
  return (
    <div>
      <NavbarDemo />

      <main className="mt-12">
        <section className="bg-red-50 grid grid-cols-12 px-28 py-16">
          <div className="col-span-7 flex flex-col gap-3">
            <p className="text-4xl font-bold pe-10">
              Oracle/MySQL for Database Administrators Ed 5.1 Certification and
              Training
            </p>
            <p className="text-gray-600">
              Get registered for the 120-day MySQL for Database Administrators
              Ed 5.1 course from skillEnhanced certified by Oracle. This course
              shows you arrange the MySQL Server, set up replication and
              security, perform data set reinforcements and recuperations,
              improve question execution, and design for high accessibility.
            </p>
            <p className="text-sm">Taught in English</p>
            <div className="text-yellow-500 flex gap-1 text-md">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="pt-5">
              <Button
                radius="full"
                className="bg-gradient-to-tr from-black to-slate-500 text-white shadow-lg px-10"
              >
                Enroll
              </Button>
            </div>
          </div>
          <div className="col-span-5 bg-red-10">
            {/* <div className="bg-white w-[280px] p-10 flex flex-col gap-3">
              <div>
                <div className="flex flex-col">
                  <p className="text-md">Course</p>
                  <p className="text-small text-default-500">
                    Oracle Certification
                  </p>
                </div>
              </div>
              <div>
                <p>
                  <span>Instructor: </span>
                  <span>John Doe</span>
                </p>
                <p>
                  <span>Difficulty Level: </span>
                  <span>Beginner</span>
                </p>
                <p>
                  <span>Duration: </span>
                  <span>1 Month</span>
                </p>
                <p>
                  <span>Lectures: </span>
                  <span>15</span>
                </p>
                <p>
                  <span>Enrolled on: </span>
                  <span>30 April 2024</span>
                </p>
              </div>
              <div>
                <p className="pe-2">Get Course :</p>
                <p>INR 200</p>
              </div>
            </div> */}
            {/* <Card className="max-w-[350px] px-3">
                        <CardHeader className="flex gap-3">
                            <div className="flex flex-col">
                                <p className="text-md">Course</p>
                                <p className="text-small text-default-500">Oracle Certification</p>
                            </div>
                        </CardHeader>
                        <Divider/>
                        <CardBody className="flex flex-col gap-1">
                            <p>
                                <span>Instructor: </span>
                                <span>John Doe</span>
                            </p>
                            <p>
                                <span>Difficulty Level: </span>
                                <span>Beginner</span>
                            </p>
                            <p>
                                <span>Duration: </span>
                                <span>1 Month</span>
                            </p>
                            <p>
                                <span>Lectures: </span>
                                <span>15</span>
                            </p>
                            <p>
                                <span>Enrolled on: </span>
                                <span>30 April 2024</span>
                            </p>
                        </CardBody>
                        <Divider/>
                        <CardFooter>
                            <p className='pe-2'>Get Course :</p>
                            <p>INR 200</p>
                        </CardFooter>
                    </Card> */}
          </div>
        </section>

        <section className="px-28 py-20">
          <div>
            <p className="text-3xl font-bold mb-10">Whats included</p>
            <div className="flex w-[100%] justify-around">
              <Card className="py-4 w-[200px]">
                <CardHeader className="overflow-visible py-2 flex items-center justify-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="/assets/images/folder.png"
                    width={50}
                  />
                </CardHeader>
                <CardBody className="pb-0 pt-2 px-4 flex-col items-center">
                  <h4 className="font-bold text-large">One project file</h4>
                </CardBody>
              </Card>

              <Card className="py-4 w-[200px]">
                <CardHeader className="overflow-visible py-2 flex items-center justify-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="/assets/images/quiz.png"
                    width={50}
                  />
                </CardHeader>
                <CardBody className="pb-0 pt-2 px-4 flex-col items-center">
                  <h4 className="font-bold text-large">Quizzes</h4>
                </CardBody>
              </Card>

              <Card className="py-4 w-[200px]">
                <CardHeader className="overflow-visible py-2 flex items-center justify-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="/assets/images/device.png"
                    width={50}
                  />
                </CardHeader>
                <CardBody className="pb-0 pt-2 px-4 flex-col items-center">
                  <h4 className="font-bold text-large text-center">Access on tablet and phone</h4>
                </CardBody>
              </Card>

              <Card className="py-4 w-[200px]">
                <CardHeader className="overflow-visible py-2 flex items-center justify-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="/assets/images/diploma.png"
                    width={50}
                  />
                </CardHeader>
                <CardBody className="pb-0 pt-2 px-4 flex-col items-center">
                  <h4 className="font-bold text-large text-center">Certificate of completion</h4>
                </CardBody>
              </Card>
            </div>
          </div>

          <div className="pt-20">
            <p className="text-3xl font-bold mb-5">Course description</p>
            <p className="text-md text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, voluptates. Quos, nostrum? Nobis, ducimus, eos eveniet odio repellendus voluptatum suscipit, consequatur incidunt quas amet recusandae aperiam similique tempora. Ducimus facilis aliquid labore adipisci suscipit, aspernatur incidunt consequatur quo nisi maiores eaque quidem sed error. Earum hic voluptatibus labore quisquam, ipsum esse quasi vel explicabo eum iusto nihil voluptatum perferendis eos eligendi nemo aspernatur neque voluptate fuga, sequi asperiores, dignissimos rem debitis ex cumque? Ut cum aperiam beatae placeat facere totam accusantium omnis voluptates aut hic, minus nemo harum ea ratione eligendi perspiciatis dolorum doloremque quod ad cumque culpa consequuntur vero facilis nostrum? Error delectus fuga aperiam? Eius, eligendi doloribus minus deleniti, hic atque suscipit optio accusantium omnis nemo eos, est aut illo! Eius dolor id explicabo. Corporis, expedita? Velit eligendi vel accusantium quae et similique nobis. Perferendis excepturi dolorum sed necessitatibus voluptates, ut itaque, quam neque aut officiis labore deleniti nam praesentium expedita laudantium. Dolor assumenda ad quis neque molestias rerum quam magnam amet reiciendis nam harum autem officiis laboriosam minima iure vitae, at impedit, reprehenderit voluptatibus tenetur nulla illum modi nesciunt. Impedit laboriosam perferendis ad veniam. Odit libero enim obcaecati debitis adipisci, perspiciatis incidunt ipsum minima ducimus animi iste?</p>
          </div>

          <div className="pt-20">
            <p className="text-3xl font-bold mb-5">Courses In This Program</p>
            <p>15 Chapters | 200 lectures | 109h 10m total length</p>
            <div>
              <AccordionCustom/>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
