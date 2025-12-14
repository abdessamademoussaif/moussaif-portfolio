import { PlusIcon } from 'lucide-react';
import { Accordion as AccordionPrimitive } from 'radix-ui';

import { Accordion, AccordionContent, AccordionItem } from '@/components/ui';
import { AnimatedWrapper } from '@/components/shared';

const services = [
  {
    id: '1',
    title: 'Backend Development',
    content:
      'I build secure, scalable, and high-performance backend systems using Node.js (Express.js) and Java (Spring Boot). I focus on clean architecture, maintainable code, and reliable server-side logic that supports real business needs. My work includes API design, authentication, database management, and third-party service integration.',
  },
  {
    id: '2',
    title: 'API Development (REST)',
    content:
      'I design and implement well-structured RESTful APIs with validation, versioning, and clear documentation. Whether using Express.js or Spring Boot controllers, I ensure efficient and secure data flow between frontend applications and backend services.',
  },
  {
    id: '3',
    title: 'Database Design & Management',
    content:
      'I manage both SQL and NoSQL databases, including MongoDB, MySQL, and PostgreSQL. I design schemas, optimize queries, create indexes, and handle data migrations to ensure efficient and scalable data storage solutions.',
  },
  {
    id: '4',
    title: 'Authentication & Security',
    content:
      'I implement secure authentication and authorization systems using JWT, OAuth2, Spring Security, and Passport.js. I apply best practices such as hashing, role-based access control, input validation, and security middleware to protect applications from vulnerabilities.',
  },
  {
    id: '5',
    title: 'Clean Architecture & Scalability',
    content:
      'I build backend systems with modular, scalable structures. I follow clean architecture principles using layers such as controllers, services, repositories, middlewares, and utilities. This approach ensures maintainability and makes it simple to extend features over time.',
  },
  {
    id: '6',
    title: 'Collaboration',
    content:
      'I collaborate effectively with frontend developers, designers, and stakeholders. I document APIs, participate in code reviews, and ensure smooth integration across teams. My workflow supports clear communication and efficient development processes.',
  },
];


export default function ServicesAccordion() {
  return (
    <div className="space-y-4">
      <Accordion type="single" collapsible className="w-full" defaultValue="1">
        {services.map((service, idx) => (
          <AccordionItem value={service.id} key={service.id} className="py-2">
            <AnimatedWrapper from="left" delay={idx * 0.15}>
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-2 text-left leading-6 transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-300 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
                  <span className="text-xl lg:text-3xl font-bold leading-[1.5] bg-gradient bg-clip-text text-transparent accordion-title relative pl-3 lg:pl-5">
                    {service.title}
                  </span>
                  <PlusIcon
                    className="lg:size-9 size-6 pointer-events-none shrink-0 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-muted-foreground text-sm lg:text-base pb-2 ml-5 lg:ml-10">
                {service.content}
              </AccordionContent>
            </AnimatedWrapper>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
