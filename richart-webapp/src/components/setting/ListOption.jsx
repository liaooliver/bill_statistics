import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListNode from './ListNode';

const ListOption = ({ keynames }) => {
    return ( 
        <ul className="px-3">
            {
                keynames && keynames.map(item => <ListNode key={uuidv4()} item={item} />)
            }
        </ul>
     );
}
 
export default ListOption;