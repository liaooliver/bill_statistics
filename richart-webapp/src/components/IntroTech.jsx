import React from 'react';
import CircleDisplay from '../components/CircleDisplay';
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

const IntroTech = () => {
    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center py-3">
                    <h2 className="text-base text-blue-500 font-semibold tracking-wide uppercase">應用程式技術線介紹</h2>
                </div>

                <div className="text-center mt-3 mb-6">
                    <h3 className="relative inline-block z-10 text-xl leading-8 font-bold tracking-tight text-gray-900 sm:text-2xl">
                        <p className="relative z-10 px-2 bg-white text-xl">前端技術</p>
                        <span className="-deco-text-box"></span>
                    </h3>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-2">
                    <CircleDisplay icon={reactIcon} alt="reactIcon" size='80%' title="React & hook" position={'items-end'} />
                    <CircleDisplay icon={tailwindcssIcon} alt="tailwindcssIcon" size='80%' title="tailwindcss" position={'items-center'} />
                    <CircleDisplay icon={jestIcon} alt="jestIcon" size='65%' title="Jest" position={'items-start'} />
                </div>

                <div className="text-center mt-3 mb-6">
                    <h3 className="relative inline-block z-10 text-xl leading-8 font-bold tracking-tight text-gray-900 sm:text-2xl">
                        <p className="relative z-10 px-2 bg-white text-xl">後端技術</p>
                        <span className="-deco-text-box"></span>
                    </h3>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-2">
                    <CircleDisplay icon={nodeIcon} alt="nodeIcon" size='85%' title="Node.js" position={'items-end'} />
                    <CircleDisplay icon={googleIcon} alt="googleIcon" size='80%' title="google sheet" position={'items-center'} />
                    <CircleDisplay icon={jestIcon} alt="jestIcon" size='65%' title="Jest" position={'items-start'} />
                </div>

                
                <div className="text-center mt-3 mb-6">
                    <h3 className="relative inline-block z-10 text-xl leading-8 font-bold tracking-tight text-gray-900 sm:text-2xl">
                        <p className="relative z-10 px-2 bg-white text-xl">CI/CD 建置</p>
                        <span className="-deco-text-box"></span>
                    </h3>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-2">
                    <CircleDisplay icon={githubIcon} alt="githubIcon" size='75%' title="github" position={'items-end'} />
                    <CircleDisplay icon={travisIcon} alt="travisIcon" size='75%' title="travis ci" position={'items-center'} />
                    <CircleDisplay icon={dockerIcon} alt="dockerIcon" size='100%' title="Docker & Docker hub" position={'items-start'} />
                    <CircleDisplay icon={awsIcon} alt="awsIcon" size='75%' title="AWS S3" position={'items-end'} />
                </div>

            </div>
        </div>
    )
}

export default IntroTech;