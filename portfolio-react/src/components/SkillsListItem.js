import React from 'react';

const SkillsListItem = props => {
    return ( 
        <li>
            {props.skill.name}
        </li>
     );
}
 
export default SkillsListItem;
