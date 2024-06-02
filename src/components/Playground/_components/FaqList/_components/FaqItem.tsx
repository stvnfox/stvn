import type { FunctionComponent } from 'react';
import { motion } from "framer-motion";

type FaqItemProps = {
    question: string;
    answer: string;
}

export const FaqItem: FunctionComponent<FaqItemProps> = ({ question, answer }) => {
    return (
        <motion.details
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ margin: '300px 0px 0px 0px' }}
            className='mb-2 last:mb-0 group p-5 bg-red-50 rounded-lg hover:cursor-pointer hover:bg-red-100 transition-colors duration-150 ease-in-out'
        >
            <summary className='flex justify-between items-center list-none'>
                {question}
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 group-open:rotate-180 transition-transform duration-200 ease-in-out"
                >
                    <path 
                        strokeLinecap="round"
                        strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    />
                </svg>
            </summary>
            <div     
                className='font-light pt-4'
            >
                {answer}
            </div>
        </motion.details>
    )
}