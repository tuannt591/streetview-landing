import React, { useState } from 'react';
import { Typography, Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';

const LIST_ACCORDION = [
  {
    title: 'Which cameras can I use for shooting ?',
    content: 'All cameras with GPS Function can be used. From smartphones to professional devices are suitable.',
  },
  {
    title: 'If I took only one photo, can I upload it ?',
    content:
      'You can upload but it will be useless for mapping because our system needs multiple photos with different angles.',
  },
  {
    title: 'How long does it take till my photos  are uploaded to the map ?',
    content:
      'Before uploading photos to maps, we should check all of them regarding privacy and security aspects. From a few hours to a few days you can find them on maps.',
  },
  {
    title: 'Which actions do you take to protect privacy ?',
    content:
      'Before uploading photos to maps, we should check all of them regarding privacy and security aspects. From a few hours to a few days you can find them on maps.',
  },
  {
    title: 'How can I earn from this platform ?',
    content:
      'We have confirmation function for people who are captured in uploaded photos. They can confirm or deny to be seen in these photos. Our artificial intelligence technology can also blur faces or license plates. Furthermore, military fields are always blurred by us.',
  },
];

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const Questions = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = value => {
    setOpen(open === value ? null : value);
  };

  return (
    <section className="section" style={{ backgroundColor: 'rgba(236, 236, 236, 0.5)' }}>
      <div className="container">
        <div className="mb-[50px] text-center">
          <Typography variant="h2" className="text-5xl">
            Frequently Asked Questions
          </Typography>
        </div>

        <div>
          {LIST_ACCORDION.map((item, index) => {
            return (
              <Accordion
                key={index}
                open={open === index}
                icon={<Icon id={index} open={open} />}
                className="border-blue-gray-100 mb-4 rounded-lg border bg-white px-4"
              >
                <AccordionHeader
                  onClick={() => handleOpen(index)}
                  className={`border-b-0 transition-colors ${open === index ? 'text-blue-500' : ''}`}
                >
                  {item.title}
                </AccordionHeader>
                <AccordionBody className="pt-0 text-base font-normal">{item.content}</AccordionBody>
              </Accordion>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Questions;
