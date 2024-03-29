import {
	Button,
	Container,
	Text,
	Title,
	Group,
	Card,
	ActionIcon,
} from '@mantine/core';
import { useState, useEffect, useCallback } from 'react';
import { MoonStars, Sun, Trash } from 'tabler-icons-react';

import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import TaskModal from './taskItemModal';
import CreateTask from './createTaskModal';
import { useRouter } from 'next/router';
import { createTask, deleteTask, fetchTasks } from '../slices/tasksSlice';
import { SpinnerDotted } from 'spinners-react';
import { noop } from 'lodash';
import { connect, useSelector } from 'react-redux';

const initialState = { title: '', description: '', endDate: new Date() };

const TaskPage = ({ fetchTasks = noop, deleteTaskDispatch = noop, createTaskDispatch = noop, tasksData = [], isTasksLoaded = false }) => {
	const [opened, setOpened] = useState(false);
	const [state, setState] = useState(initialState);
	const [tasks, setTasks] = useState(tasksData);
	const [isTaskModalOpend, setIsTaskModalOpend] = useState(false);
	const router = useRouter(null);
	const { query } = router || {};

	const { user: { role } } = useSelector((store) => store.userData);

	useEffect(() => {
		if (query?.task) setIsTaskModalOpend(true);
	}, [query]);

	const handleFetchTasks = useCallback(() => fetchTasks({ onSuccess: setTasks, projectId: query?.project }), []);

	useEffect(() => {
		console.log({ q1: query?.project });
		fetchTasks({ onSuccess: setTasks, projectId: query?.project });
	}, [query]);

	const [colorScheme, setColorScheme] = useLocalStorage({
		key: 'mantine-color-scheme',
		defaultValue: 'light',
		getInitialValueInEffect: true,
	});


	const toggleColorScheme = value => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
	useHotkeys([['mod+J', () => toggleColorScheme()]]);

	const handleChange = ({ target: { name, value } }) => {
		setState((prevState) => ({ ...prevState,  [name]: value }))
	};

	const onSubmit = () => {}

	const handleDeleteTask = useCallback(({ task }) => {
		const { title, description, projectRefId, jobId, ...item } = task || {};
		deleteTaskDispatch({ taskId: jobId, title, description, projectId: projectRefId, tasks, onSuccess: setTasks });
	}, [tasks]);

	const handleCreateTask = useCallback(({ state }) => {
		const { project } = query;
		const { title, description, endDate } = state || {};
		createTaskDispatch({ title, description, projectId: project, onSuccess: handleFetchTasks, endDate });
		setState(initialState);
	}, [tasks]);

	const TaskItem = ({ task, index }) => {
		return (
			<Card key={index} withBorder style={{ cursor: 'pointer' }} mt={'sm'} onClick={() => {
				setIsTaskModalOpend(true);
				router.push(
            	  {
            	    pathname: '/[project]/',
            	    query: {
            	      project: router.query.project,
            	      task: task?.jobId,
            	    },
            	  },
            	  undefined,
            	  { shallow: true }
            	)
			}}>
				<Group position={'apart'}>
					<Text weight={'bold'}>{task.title}</Text>
					{role !== 'User' && (<ActionIcon
						onClick={(event) => {
							event.stopPropagation();
							handleDeleteTask({ task, taskId: task?.jobId });
						}}
						color={'red'}
						variant={'transparent'}
					>
						<Trash />
					</ActionIcon>)}
				</Group>
				<Text color={'dimmed'} size={'md'} mt={'sm'}>
					{task.description
						? task.description
						: 'No description was provided for this task'}
				</Text>
			</Card>
		)
	};

	return (
		<div>
			{!isTasksLoaded && (
				<div style={{ width: '100vw', height: '95vh', position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', pointerEvents: 'none' }}>
					<SpinnerDotted
					  height="300"
					  width="300"
					  radius="100"
					  color="green"
					  ariaLabel="loading"
					  wrapperStyle
					  wrapperClass
					  style={{ width: 100, color: '#fff' }}
					/>
				</div>
			)}
				<div className='App'>
					<CreateTask setOpened={setOpened} state={state} createTask={handleCreateTask} opened={opened} handleChange={handleChange} />
					<TaskModal opened={isTaskModalOpend} setOpened={setIsTaskModalOpend} handleChange={handleChange} isUser={role === 'User'} />
					<Container size={550} my={40}>
						<Group position={'apart'}>
							<Title
								sx={theme => ({
									fontFamily: `Greycliff CF, ${theme.fontFamily}`,
									fontWeight: 900,
								})}>
								{/* Weekly tasks */}
								Текущие задачи
							</Title>
							<ActionIcon
								color={'blue'}
								onClick={() => toggleColorScheme()}
								size='lg'>
								{colorScheme === 'dark' ? (
									<Sun size={16} />
								) : (
									<MoonStars size={16} />
								)}
							</ActionIcon>
						</Group>
						{tasks.length > 0 ? (
							tasks.map((task, index) => <TaskItem task={task} index={index} />)
						) : (
							<Text size={'lg'} mt={'md'} color={'dimmed'}>
								You have no tasks
							</Text>
						)}
						{role !== 'User' && (<Button
							onClick={() => {
								setOpened(true);
							}}
							fullWidth
							mt={'md'}>
							Новая Задача
						</Button>)}
					</Container>
				</div>
		</div>
	);
}

const mapStateToProps = ({
  tasksSliceData: {
    tasks: tasksData,
    isTasksLoaded,
  },
}) => ({ tasksData, isTasksLoaded });

const mapDispatchToProps = (dispatch) => ({
  fetchTasks: (data) => dispatch(fetchTasks(data)),
  deleteTaskDispatch: (data) => dispatch(deleteTask(data)),
  createTaskDispatch: (data) => dispatch(createTask(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);