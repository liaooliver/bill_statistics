import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListNode from './ListNode';

const ListOption = ({ items, styleType }) => {
    return ( 
        <ul className="px-3 grid grid-cols-2 md:grid-cols-3 gap-2">
            {
                items && items.map(item => <ListNode key={uuidv4()} item={item} styleType={styleType} />)
            }
        </ul>
     );
}
 
export default ListOption;