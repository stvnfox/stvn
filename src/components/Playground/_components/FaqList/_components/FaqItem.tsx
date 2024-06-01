import type { FunctionComponent } from 'react';

type FaqItemProps = {
    question: string;
    answer: string;
}

export const FaqItem: FunctionComponent<FaqItemProps> = ({ question, answer }) => {
    return (
        <details className='mb-6 last:mb-0'>
            <summary>{question}</summary>
            {answer}
        </details>
    )
}