import type { FunctionComponent } from 'react';
import { FaqItem } from './_components/FaqItem';

export const FaqList: FunctionComponent = () => {
    const items = [
        { question: 'What is React?', answer: 'React is a front-end JavaScript library developed by Facebook in 2011.' },
        { question: 'What is TypeScript?', answer: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.' },
        { question: 'What is Tailwind CSS?', answer: 'Tailwind CSS is a utility-first CSS framework for quickly building custom designs.' }
    ]

    return (
        <div className="w-full">
            <h1 className='text-2xl font-medium mb-4'>Frequently asked questions</h1>
            {items.map((item, index) => (
                <FaqItem 
                    key={index}
                    question={item.question}
                    answer={item.answer}
                />
            ))}
        </div>
    )
}