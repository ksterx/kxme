import React from 'react';
import SectionWrapper from './SectionWrapper';

const Resume: React.FC = () => {
    return (
        <SectionWrapper id="resume" title="Resume">
            <ul className="space-y-4">
                <li className="flex items-center">
                    <span className="font-bold mr-4">2024:</span>
                    <span>Full-Time Employee at Spiral.AI</span>
                </li>
                <li className="flex items-center">
                    <span className="font-bold mr-4">2023:</span>
                    <span>Internship at Spiral.AI</span>
                </li>
            </ul>
        </SectionWrapper>
    );
};

export default Resume;