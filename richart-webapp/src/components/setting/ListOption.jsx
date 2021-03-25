import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListNode from './ListNode';

const ListOption = ({ items }) => {
    return ( 
        <ul className="px-3">
            {
                items && items.map(item => <ListNode key={uuidv4()} item={item} />)
            }
        </ul>
     );
}
 
export default ListOption;