import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import SocialItem from './SocialItem';
import github from '../assets/icons/github-icon.svg';
import cakeresume from '../assets/icons/cakeresume.png';
import medium from '../assets/icons/medium.svg';
import linkined from '../assets/icons/linkedin.svg';

const SocialGroup = () => {

    const items = [
        {
            url: 'https://github.com/liaooliver',
            img: github,
            size: '100%'
        },
        {
            url: 'https://github.com/liaooliver',
            img: cakeresume,
            size: '100%'
        },
        {
            url: 'https://github.com/liaooliver',
            img: medium,
            size: '80%'
        },
        {
            url: 'https://github.com/liaooliver',
            img: linkined,
            size: '100%'
        }
    ]

    return (
        <ul className="flex items-center">
            <h5 className="pr-3 font-semibold">Find me:</h5>
            
            {
                items.map(item => <SocialItem key={uuidv4()} img={item.img} url={item.url} size={item.size} /> )
            }
        </ul>
    );
}

export default SocialGroup;