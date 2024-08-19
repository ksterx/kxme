import React from 'react';

type SectionWrapperProps = {
    id: string;
    title: string;
    children: React.ReactNode;
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children }) => {
    return (
        <section id={id} className="py-4">
            <div className="container mx-auto py-8 bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
                <div className="max-w-2xl mx-auto">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default SectionWrapper;