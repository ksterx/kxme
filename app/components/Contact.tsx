import React from 'react';
import SectionWrapper from './SectionWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact: React.FC = () => {
    return (
        <SectionWrapper id="contact" title="Contact">
            <div className="flex space-x-4 justify-center">
                <a href="https://twitter.com/kster_xyz" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-teal-800 transition-colors">
                    <FontAwesomeIcon icon={faXTwitter} className="text-3xl" />
                </a>
                <a href="https://github.com/ksterx" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-teal-800 transition-colors">
                    <FontAwesomeIcon icon={faGithub} className="text-3xl" />
                </a>
            </div>
        </SectionWrapper>
    );
};

export default Contact;