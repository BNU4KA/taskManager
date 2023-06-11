import React from 'react';
import { Container, Title, Text } from "@mantine/core";
import ProjectItem from './ProjectItem';
import { isEmpty, isUndefined, noop } from 'lodash';
import CreateProject from './createProjectModal';
import { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { getProjects } from '../slices/tasksSlice';
import { useEffect } from 'react';
import { getRandomInt } from '../constants';
import { fetchUser } from '../slices/userSlice';

const mockItems = [
    {
        id: '12dqw3',
        title: 'asd',
        description: 'qweqweqwe qwdeqb dewiudbwedbwei wfiuweo heufhwefh whoehf owehf'
    },
    {
        id: 'dawqd21',
        title: 'qwe',
        description: 'qweqweqweqw wfiuweo heufhwefh whoehf owehf'
    }
];

const ProjectsPage = ({ ProjectItems = mockItems, getProjectsFunc, projectsData, tasksSliceData, getUserFunc }) => {
    const [opened, setOpened] = useState(false);
    const [projects, setProjects] = useState(projectsData);

    useEffect(() => {
        getProjectsFunc({ onSuccess: setProjects });
    }, []);

    const { user: { role } } = useSelector((store) => store.userData)

    return (
        <Container size='90%' my={40}>
            <Container my={40}>
                <Title
			    	sx={theme => ({
			    		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
			    		fontWeight: 900,
			    	})}
                    >
			    	    {/* Welcom to TaskManger */}
                        Добро пожаловать в Менеджер Задач.
			    </ Title>
                <Text color={'dimmed'} size={'md'} mt={'sm'}>Прогресс по всем задачам и проектам: {<b style={{ color: 'Black' }}>{getRandomInt(101)}%</b>}</Text>
            </ Container>
            <Container className='content-wrapper'>
                {!isEmpty(projects) && projects.map((item) => <ProjectItem item={item} />)}
                {role !== 'User' && !isUndefined(role) && (<div className='project-item project-item__add-new-project-wrapper' onClick={() => setOpened(true)}>
                    <div className='project-item project-item__add-new-project'>
                        Добавить новый проект +
                    </div>
                </div>)}
            </Container>
            <CreateProject setOpened={setOpened} opened={opened} />
        </Container>
    )
}

const mapStateToProps = ({
  tasksSliceData,
  tasksSliceData: {
    projects: projectsData,
  },
}) => ({ projectsData, tasksSliceData });

const mapDispatchToProps = (dispatch) => ({
  getProjectsFunc: (data) => dispatch(getProjects(data)),
  getUserFunc: (data) => dispatch(fetchUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);