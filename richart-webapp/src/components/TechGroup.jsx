import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import CircleDisplay from './CircleDisplay';

import reactIcon from '../assets/icons/react.svg';
import tailwindcssIcon from '../assets/icons/tailwindcss.svg';
import jestIcon from '../assets/icons/jest.svg';
import nodeIcon from '../assets/icons/node.svg';
import dockerIcon from '../assets/icons/file-type-docker.svg';
import githubIcon from '../assets/icons/github-icon.svg';
import travisIcon from '../assets/icons/travis-ci.svg';
import awsIcon from '../assets/icons/aws.svg';
import googleIcon from '../assets/icons/google.svg';
import '../assets/custom.css';

const TechGroup = () => {

    const techConfig = [
        {
            title: '前端技術',
            techItem: [
                {
                    icon: reactIcon,
                    alt: 'reactIcon',
                    size: '80%',
                    title: 'React & hook'
                },
                {
                    icon: tailwindcssIcon,
                    alt: 'tailwindcss',
                    size: '80%',
                    title: 'tailwindcss'
                },
                {
                    icon: jestIcon,
                    alt: 'jestIcon',
                    size: '65%',
                    title: 'Jest'
                }
            ]
        },
        {
            title: '後端技術',
            techItem: [
                {
                    icon: nodeIcon,
                    alt: 'nodeIcon',
                    size: '85%',
                    title: 'NodeJS'
                },
                {
                    icon: googleIcon,
                    alt: 'googleIcon',
                    size: '80%',
                    title: 'google sheet'
                },
                {
                    icon: jestIcon,
                    alt: 'jestIcon',
                    size: '65%',
                    title: 'Jest'
                }
            ]
        },
        {
            title: 'CI/CD 建置',
            techItem: [
                {
                    icon: githubIcon,
                    alt: 'githubIcon',
                    size: '85%',
                    title: 'github'
                },
                {
                    icon: travisIcon,
                    alt: 'travisIcon',
                    size: '80%',
                    title: 'travis ci'
                },
                {
                    icon: dockerIcon,
                    alt: 'dockerIcon',
                    size: '100%',
                    title: 'Docker & Docker hub'
                },
                {
                    icon: awsIcon,
                    alt: 'awsIcon',
                    size: '70%',
                    title: 'AWS S3'
                }
            ]
        }
    ]

    return ( 
        <>
            {
                techConfig.map(item => (
                    <div key={uuidv4()}>
                        <div className="text-center mt-3 mb-6">
                            <h3 className="relative inline-block z-10 text-xl leading-8 font-bold tracking-tight text-gray-900 sm:text-2xl">
                                <p className="relative z-10 px-2 bg-white text-xl">{ item.title }</p>
                                <span className="-deco-text-box"></span>
                            </h3>
                        </div>
                        <div className="grid grid-cols-3 gap-3 mb-2">
                            {
                                item.techItem.map(tech => <CircleDisplay key={uuidv4()} icon={tech.icon} alt={tech.alt} size={tech.size} title={tech.title} position={'items-center'} />)
                            }
                        </div>
                    </div>)
                )
            }
        </>
    );
}
 
export default TechGroup;