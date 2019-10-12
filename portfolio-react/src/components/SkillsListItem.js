import React from 'react';
import '../scss/SkillsListItem.scss';


const SkillsListItem = props => {
    return ( 
        <li>
            {props.skill.name}
        </li>
     );
}
 
export default SkillsListItem;
