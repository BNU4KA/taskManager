import React from 'react';
import { Container, Title } from "@mantine/core";
import ProjectItem from './ProjectItem';
import { isEmpty } from 'lodash';

const mockItems = [
    {
        id: '12dqw3',
        title: 'asd',
        description: 'qweqweqweqwdeqbdewiudbwedbwei wfiuweo heufhwefh whoehf owehf'
    },
    {
        id: 'dawqd21',
        title: 'qwe',
        description: 'qweqweqweqw wfiuweo heufhwefh whoehf owehf'
    }
];
// const mockItems = [];

const ProjectsPage = ({ ProjectItems = mockItems }) => {

    return (
        <Container size='90%' my={40}>
            <Container my={40}>
                <Title
			    	sx={theme => ({
			    		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
			    		fontWeight: 900,
			    	})}>
			    	    Welcom to kolhoz
			    </ Title>
            </ Container>
            <Container className='content-wrapper'>
                {!isEmpty(ProjectItems) && ProjectItems.map((item) => <ProjectItem item={item} />)}
                <div className='project-item project-item__add-new-project-wrapper'>
                    <div className='project-item project-item__add-new-project'>

                    </div>
                </div>
            </Container>
        </Container>
    )
}

export default ProjectsPage;