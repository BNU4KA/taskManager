import React from 'react';
import { Container, Title, Skeleton } from "@mantine/core";

const ProjectPage = () => {
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
                {[1, 2, 3, 4, 5].map((item) => (
                    <Skeleton className='project-item' visible>
                    <div className='project-item project-item__wrapper'>
                        
                    </div>
                </Skeleton>
                ))}
            </Container>
        </Container>
    )
}

export default ProjectPage;