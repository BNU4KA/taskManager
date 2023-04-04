import {
	Button,
	Container,
	Text,
	Title,
	Group,
	Card,
	ActionIcon,
} from '@mantine/core';
import { useState, useEffect } from 'react';
import { MoonStars, Sun, Trash } from 'tabler-icons-react';

import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import TaskModal from './taskItemModal';
import CreateTask from './createTaskModal';
import { useRouter } from 'next/router';
import { fetchTasks } from '../slices/tasksSlice';
import { connect } from 'react-redux';
import { SpinnerDotted } from 'spinners-react';
import { noop } from 'lodash';

const initialState = { title: '', description: '' };

const MainPage = ({ fetchTasks = noop, tasksData = [], isTasksLoaded = false }) => {
	const [opened, setOpened] = useState(false);
	const [state, setState] = useState(initialState);
	const [isTaskModalOpend, setIsTaskModalOpend] = useState(false);
	const router = useRouter(null);

	const [tasks, setTasks] = useState(tasksData);

	useEffect(() => {
		fetchTasks({ onSuccess: setTasks });
	}, []);

	const [colorScheme, setColorScheme] = useLocalStorage({
		key: 'mantine-color-scheme',
		defaultValue: 'light',
		getInitialValueInEffect: true,
	});

	const toggleColorScheme = value =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
	useHotkeys([['mod+J', () => toggleColorScheme()]]);

	const handleChange = ({ target: { name, value } }) => {
		console.log(name, value);
		setState((prevState) => ({ ...prevState,  [name]: value }))
	};

	const onSubmit = () => {
		
	}

	const deleteTask = ({ taskId }) => {
		setTasks((prevState) => prevState.filter(({ id }) => taskId !== id));
	};

	const TaskItem = ({ task, index }) => {
		return (
			<Card key={index} withBorder style={{ cursor: 'pointer' }} mt={'sm'} onClick={() => {
				setIsTaskModalOpend(true);
				router.push(`${router.asPath}/?task=${task.title}`)
			}}>
				<Group position={'apart'}>
					<Text weight={'bold'}>{task.title}</Text>
					<ActionIcon
						onClick={(event) => {
							event.stopPropagation();
							deleteTask({ taskId: task.id });
						}}
						color={'red'}
						variant={'transparent'}>
						<Trash />
					</ActionIcon>
				</Group>
				<Text color={'dimmed'} size={'md'} mt={'sm'}>
					{task.description
						? task.description
						: 'No description was provided for this task'}
				</Text>
			</Card>
		)
	};

	console.log({ tasks });
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
					<CreateTask setOpened={setOpened} state={state} createTask={() => {}} opened={opened} handleChange={handleChange} />
					<TaskModal opened={isTaskModalOpend} state={state} setOpened={setIsTaskModalOpend} handleChange={handleChange} />
					<Container size={550} my={40}>
						<Group position={'apart'}>
							<Title
								sx={theme => ({
									fontFamily: `Greycliff CF, ${theme.fontFamily}`,
									fontWeight: 900,
								})}>
								Weekly tasks
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
						<Button
							onClick={() => {
								setOpened(true);
							}}
							fullWidth
							mt={'md'}>
							New Task
						</Button>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);