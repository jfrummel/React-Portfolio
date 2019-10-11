import React, { Component } from 'react';
import axios from 'axios';
import SkillsListItem from './SkillsListItem';

class Skills extends Component {
    constructor(props) {
        super(props);

        this.skillsList = this.skillsList.bind(this);

        this.state = { 
            skills: [] 
        };
    }

    componentDidMount() {
        axios.get("http://localhost:5000/api/skills")
            .then(response => {
                this.setState({ skills: response.data })
              })
              .catch((error) => {
                console.log(error);
              });
    }

    skillsList() {
        return this.state.skills.map(skill => {
            return <SkillsListItem skill={skill} key={skill._id} />
        });
    }

    
    render() { 
        return ( 
            <div>
                <ul>
                    {this.skillsList()}
                </ul>
            </div>
         );
    }
}
 
export default Skills;
 
