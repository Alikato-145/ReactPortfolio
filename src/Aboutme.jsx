import React from 'react';
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const Aboutme = () => {
  return (
    <div className="min-h-[calc(100vh-65px)] flex justify-center items-center bg-gray-950 p-4">
      <Card className='w-full max-w-lg lg:max-w-3xl shadow-[5px_5px_0px_0px_rgb(255,255,0)]'>
        <CardBody>
          <CardHeader className='flex flex-col lg:flex-row gap-10 lg:gap-10'>
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="/manus.jpg"
              width={300}
              height={300}
            />
            <div className='flex flex-col justify-center lg:w-1/2'>
              <p>Hello everyone, I am a high school student in the Science-Math-Technology program</p>
              <p>which is the second cohort of this program. What we learn is like a Gifted special classroom, but with additional subjects such as programming, network systems, and multimedia. It is quite challenging, but I find it enjoyable to study something I love. I am also thrilled to have participated in the 42 camp, which has allowed me to improve my skills in many ways.</p>
            </div>
          </CardHeader>
        </CardBody>
      </Card>
    </div>
  );
}

export default Aboutme;
