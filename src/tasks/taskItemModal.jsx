import React, { useCallback, useEffect, useState } from "react";
import { Modal, Progress, Textarea, TextInput } from '@mantine/core';
import { useRouter } from 'next/router';
import { removeQueryParams } from '../constants/index';
import { fetchTask, updateTask } from "../slices/tasksSlice";
import { connect } from 'react-redux';
import { debounce, isEmpty, isNaN, isNull, isUndefined, noop } from "lodash";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Dropdown from '../services/Dropdown';
// import TextEditor from "../services/TextEditor";
import { SpinnerDotted } from 'spinners-react';

const colorsArray = [
	'black',
	'green',
	'red',
	'yellow',
	'orange',
	'white',
	'Grey',
	'Purple',
	'Pink',
	'Blue'
];

const TaskModal = ({ opened, task, setOpened = noop, fetchTask = noop, updateTaskDispatch = noop }) => {
	const router = useRouter();
	const { query: { task: taskId } } = router || {};
	const [taskDataState, setTaskData] = useState(task);

	console.log({ taskDataState });

	useEffect(() => {
		if (taskId) fetchTask({ taskId, onSuccess: setTaskData });
	}, [taskId]);

	const debouncedStateUpdate = debounce((data) => updateTaskDispatch(data), 1500);

	const handleChange = useCallback(({ target: { name, value } }) => {
		setTaskData((prevState) => {
			if (name === 'status') {
				debouncedStateUpdate({ ...prevState, [name]: value.value });
				return { ...prevState, [name]: value.value };
			}
			if (name === 'progress') {
				if (isNaN(Number(value))) return prevState;
				debouncedStateUpdate({ ...prevState, [name]: Number(value) > 100 ? 100 : Number(value) });
				return { ...prevState, [name]: Number(value) > 100 ? 100 : Number(value) };
			}
			debouncedStateUpdate({ ...prevState, [name]: value });
			return { ...prevState, [name]: value };
		});
	}, []);

	// const { title, description, status, startDate, endDate, progress, spentTime, jobId, estimetedTime } = taskDataState || {};

	const getStatus = (status) => {
		if (status === 0) return { title: 'discussion', BColor: 'brown', FColor: 'white', border: '2px solid white' }
		if (status === 1) return { title: 'ready for work', BColor: 'gray', FColor: 'white', border: '2px solid white' }
		if (status === 2) return { title: 'in progress', BColor: '#de4c4c', FColor: 'white', border: '2px solid white' }
		if (status === 3) return { title: 'complete', BColor: 'green', FColor: 'white', border: '2px solid white' }
	};

	const options = [
		{ value: 0, label: 'discussion' },
		{ value: 1, label: 'ready for work' },
		{ value: 2, label: 'in progress' },
		{ value: 3, label: 'complete' }
	];

	// const assignUsers = [{ name: 'mikita', surname: 'malashevich', id: 1 }, { name: 'kirill', surname: 'dubanevich', id: 2 }, { name: 'SSSr4nk', surname: 'ZXC', id: 3 }];
	const assignUsers = [{ name: 'mikita', surname: 'malashevich', id: 1 }];
	// const assignUsers = [];

	const AssignedUsers = useCallback((item) => {
		if (isUndefined(item)) return null;
		const { item: { name, surname, id } } = item;
		if (id > 3) return null;
		const userNameFirstLatters = `${name.split('')[0].toUpperCase()}${surname.split('')[0].toUpperCase()}`
		return (
			// <div id={id} className={`assign-user assign-user__existed assign-user__existed__item-${id}`} style={{ backgroundColor: `${colorsArray[Math.floor(Math.random() * 5)]}` }}>
			<div id={id} className={`assign-user assign-user__existed assign-user__existed__item-${id}`} style={{ backgroundColor: `${colorsArray[id]}` }}>
				<div className="assign-user__existed__inner-text">
					{userNameFirstLatters}
				</div>
			</div>
		)
	}, [taskDataState]);

	const HeaderItem = useCallback((status) => {
		const { BColor, FColor, border } = getStatus(status) || {};
		return (
			<div className="header-wrapper">
				<div className="wrapper">
					<div className="status-bar" style={{ backgroundColor: BColor, color: FColor, border: border }}>
						<Dropdown
      						placeHolder="Select..."
      						options={options}
      						onChange={(value) => handleChange({ target: { name: 'status', value } })}
							value={options.find(({ value }) => value === status)}
      					/>
					</div>
					<div className="check-box" onClick={() => handleChange({ target: { name: 'status', value: { value: 3 } } })}>
						<svg className="check-box__svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
					</div>
					<div className="assign-users">
						{assignUsers.map((item) => <AssignedUsers item={item} />)}
						<div className="assign-user assign-user__new" style={{ marginLeft: assignUsers.length < 4 ? `${assignUsers.length * 25}px` : '75px' }}>
							<div className="assign-user assign-user__new__inner">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  									<path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div className="left-header-section">
					<div>
						<p className="created">CREATED</p>
						<p className="created__date">{moment(taskDataState.startDate).format('MMMM Do YYYY, h:mm a')}</p>
					</div>
					<div style={{ marginLeft: '40px' }}>
						<p className="created">DUE DATE</p>
						<p className="created__date">{moment(taskDataState.endDate).format('MMMM Do YYYY, h:mm a')}</p>
					</div>
				</div>
			</div>
		)
	}, [taskDataState.status]);

	if (opened && (!taskId || isEmpty(task))) return (
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
	);
    return (
        <Modal
			opened={opened}
			size="90%"
			title={HeaderItem(taskDataState?.status)}
			withCloseButton={false}
			onClose={() => {
				const url = removeQueryParams(router, 'task');
				router.push(url);
				setOpened(false);
			}}
			centered
			classNames={{
  			  content: 'task-modal-wrapper',
  			  body: 'task-modal'
  			}}
        >
			<div className="task-modal-inner task-modal-inner__left">
				<div className="task-modal-inner__left__description">
					<TaskTitle onChange={(event) => handleChange(event)} text={taskDataState?.title} weight={500} size={30} />
					<div style={{ height: '20px' }} />
					<TaskTitle onChange={(event) => handleChange(event)} text={taskDataState?.description} weight={500} size={20} isEditble/>
				</div>
				<div className="task-modal-inner__left__progress">
					<TextInput
						size="sm"
						value={isNull(taskDataState.progress) ? 0 : taskDataState.progress > 100 ? 100 : taskDataState.progress}
						name='progress' //кирилл, пидарасище, переименуй наконец-то это ебучее поле без ошибки
						onChange={(event) => handleChange(event)}
						type='text'
					/>
					<Progress classNames={{
						root: 'full-width',
					}} color="green" size="xl" value={taskDataState.progress} /> 
					{/* оставить ли animate ? хз хз*/}
				</div>
			</div>
			<div className="task-modal-inner task-modal-inner__right">
				тут будет чат, пидоры из talkjs залочили ключ, пока без него
				<br />
				<br />
				мб прикруть вместо текст филда дескрипшона, Rich text editor https://mantine.dev/others/tiptap/
				короче, обдумать надо
				<br />
				<br />
				вроде дока норм, сегодня-завтра, мб послезавтра докину
				<br />
				<br />
				просто пиздец как новая версия либы верстку заруинила, ебнешься, нахуй надо, оставлю эдитор, но если кому не впадлу, можете обновить и ебаться сами
				<br />
				<br />
				вот эту хрень докинуть на проджект пейдж, к айтемам, типо как прогресс по кол-ву текущих задач, RingProgress https://mantine.dev/core/ring-progress/
				<br />
				заставить крилла возвращать кол-во проектов по их статусу
			</div>
		</Modal>
    );
};

const TaskTitle = ({ text = '', weight = 900, size = 34, isEditble = false, onChange = noop }) => {
	return (
		<>
			{isEditble ? (
				<Textarea
					value={text}
					name='description'
					onChange={(event) => onChange(event)}
					placeholder={'Task Description'}
					type='text'
					autosize
				/>
			) : (
				<TextInput
					size="xl"
					value={text}
					name='title'
					onChange={(event) => onChange(event)}
					placeholder={'Task Title'}
					required
					type='text'
				/>
				)
			}
		</>
	)
}

const mapStateToProps = ({
  tasksSliceData: {
    task,
  },
}) => ({ task });

const mapDispatchToProps = (dispatch) => ({
  fetchTask: (data) => dispatch(fetchTask(data)),
  updateTaskDispatch: (data) => dispatch(updateTask(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskModal);