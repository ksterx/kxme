import Image from 'next/image';
import SectionWrapper from './SectionWrapper';

export default function About() {
    return (
        <SectionWrapper id="about" title="About Me">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                    <Image
                        src="/me.jpg"
                        alt="Kosuke Ishikawa"
                        width={200}
                        height={200}
                        className="rounded-full border-4 border-cyan-700"
                    />
                </div>
                <div className="md:w-2/3 md:pl-8">
                    <p className="text-lg leading-relaxed">
                        I am always looking for new ways to apply AI to real-world problems. In my spare time, I enjoy working on my own AI projects, such as developing a large language model. I am eager to learn from others and to collaborate on new and innovative AI projects.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}