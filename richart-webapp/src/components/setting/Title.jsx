import React, { useState } from 'react';
import QuestionMark from './QuestionMark';

const Title = ({ title }) => {

    const [openRemind, setOpenRemind] = useState(false)

    const remind = () => {
        setOpenRemind(!openRemind)
    }

    return (<h4 className="flex items-center text-sm">
        { title }
        <QuestionMark remind={remind} />
    </h4>
    );
}
 
export default Title;