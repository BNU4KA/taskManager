import {
	Button,
	Container,
	Text,
	Title,
	Group,
	Card,
	ActionIcon,
} from '@mantine/core';
import { useState, useRef, useEffect } from 'react';
import { MoonStars, Sun, Trash } from 'tabler-icons-react';

import {
	MantineProvider,
	ColorSchemeProvider,
} from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import TaskModal from './taskItemModal';
import CreateTask from './createTaskModal';
import { useRouter } from 'next/router';

const MainPage = () => {
	const [tasks, setTasks] = useState([]);
	const [opened, setOpened] = useState(false);

	const [colorScheme, setColorScheme] = useLocalStorage({
		key: 'mantine-color-scheme',
		defaultValue: 'light',
		getInitialValueInEffect: true,
	});
	const toggleColorScheme = value =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

	useHotkeys([['mod+J', () => toggleColorScheme()]]);

	const taskTitle = useRef('');
	const taskSummary = useRef('');

	function createTask() {
		setTasks([
			...tasks,
			{
				title: taskTitle.current.value,
				summary: taskSummary.current.value,
			},
		]);

		saveTasks([
			...tasks,
			{
				title: taskTitle.current.value,
				summary: taskSummary.current.value,
			},
		]);
	}

	function deleteTask(index) {
		var clonedTasks = [...tasks];

		clonedTasks.splice(index, 1);

		setTasks(clonedTasks);

		saveTasks([...clonedTasks]);
	}

	function loadTasks() {
		let loadedTasks = localStorage.getItem('tasks');

		let tasks = JSON.parse(loadedTasks);

		if (tasks) {
			setTasks(tasks);
		}
	}

	function saveTasks(tasks) {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}

	useEffect(() => {
		loadTasks();
	}, []);

	const [isTaskModalOpend, setIsTaskModalOpend] = useState(false);

	const router = useRouter(null);

	const TaskItem = ({ task, index }) => {
		// console.log('task', task);
		return (
			<Card key={index} withBorder style={{ cursor: 'pointer' }} mt={'sm'} onClick={() => {
				// console.log(123);
				setIsTaskModalOpend(true);
				router.push(`${router.asPath}/?task=${task.title}`)
			}}>
				<Group position={'apart'}>
					<Text weight={'bold'}>{task.title}</Text>
					<ActionIcon
						onClick={() => {
							deleteTask(index);
						}}
						color={'red'}
						variant={'transparent'}>
						<Trash />
					</ActionIcon>
				</Group>
				<Text color={'dimmed'} size={'md'} mt={'sm'}>
					{task.summary
						? task.summary
						: 'No summary was provided for this task'}
				</Text>
			</Card>
		)
	};

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}>
			<MantineProvider
				theme={{ colorScheme, defaultRadius: 'md' }}
				withGlobalStyles
				withNormalizeCSS>
				<div className='App'>
					<CreateTask setOpened={setOpened} createTask={createTask} opened={opened} taskTitle={taskTitle} taskSummary={taskSummary} />
					{/* <CreateTask setOpened={setIsTaskModalOpend} createTask={createTask} opened={isTaskModalOpend} taskTitle={taskTitle} taskSummary={taskSummary} /> */}
					<TaskModal opened={isTaskModalOpend} setOpened={setIsTaskModalOpend} taskTitle={taskTitle} taskSummary={taskSummary} />
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
			</MantineProvider>
		</ColorSchemeProvider>
	);
}

export default MainPage;