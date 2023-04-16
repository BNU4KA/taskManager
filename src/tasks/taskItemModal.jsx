import React, { useCallback, useEffect, useState } from "react";
import { Modal, Progress, Textarea, TextInput } from '@mantine/core';
import { useRouter } from 'next/router';
import { removeQueryParams } from '../constants/index';
import { fetchTask } from "../slices/tasksSlice";
import { connect } from 'react-redux';
import { isEmpty, noop } from "lodash";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Dropdown from '../services/Dropdown';

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

const TaskModal = ({ setOpened, opened, task, fetchTask }) => {
	const router = useRouter();
	const { query: { task: taskId } } = router || {};
	const [taskDataState, setTaskData] = useState(task);

	useEffect(() => {
		if (opened) fetchTask({ taskId, onSuccess: setTaskData });
	}, [opened]);

	// const { title, description, status, startDate, endDate, progreess, spentTime, jobId, estimetedTime } = taskDataState || {};

	const getStatus = (status) => {
		if (status === 0) return { title: 'discussion', BColor: 'brown', FColor: 'white' }
		if (status === 1) return { title: 'ready for work', BColor: 'brown', FColor: 'brown' }
		if (status === 2) return { title: 'in progress', BColor: 'brown', FColor: 'brown' }
		if (status === 3) return { title: 'complete', BColor: 'green', FColor: 'white' }
	};

	const options = [
		{ value: 0, label: 'discussion' },
		{ value: 1, label: 'ready for work' },
		{ value: 2, label: 'in progress' },
		{ value: 3, label: 'complete' }
	];

	const assignUsers = [{ name: 'mikita', surname: 'malashevich', id: 1 }, { name: 'kirill', surname: 'dubanevich', id: 2 }, { name: 'SSSr4nk', surname: 'ZXC', id: 3 }];
	// const assignUsers = [{ name: 'mikita', surname: 'malashevich', id: 1 }];
	// const assignUsers = [];

	const AssignedUsers = ({ name, surname, id }) => {
		if (id > 3) return null;
		const userNameFirstLatters = `${name.split('')[0].toUpperCase()}${surname.split('')[0].toUpperCase()}`
		return (
			<div id={id} className={`assign-user assign-user__existed assign-user__existed__item-${id}`} style={{ backgroundColor: `${colorsArray[Math.floor(Math.random() * 5)]}` }}>
				<div className="assign-user__existed__inner-text">
					{userNameFirstLatters}
				</div>
			</div>
		)
	};

	const HeaderItem = useCallback((status) => {
		// const { BColor, FColor } = getStatus(status) || {};
		return (
			<div className="header-wrapper">
				<div className="wrapper">
					{/* <div className="status-bar" style={{ backgroundColor: getStatus(status)?.BColor, color: getStatus(status)?.FColor }}> */}
					<div className="status-bar">
						<Dropdown
      						placeHolder="Select..."
      						options={options}
      						onChange={(value) => console.log(value)}
							value={options.find(({ value }) => value === status)}
      					/>
					</div>
					<div className="check-box">
						<svg className="check-box__svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
					</div>
					<div className="assign-users">
						{assignUsers.map((item) => AssignedUsers(item))}
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

	// if (isEmpty(task)) return null;
	// return <Progress color="green" size="xl" value={70} animate />
	console.log(taskDataState.progreess);
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
  			  modal: 'task-modal-wrapper',
  			  body: 'task-modal'
  			}}
        >
			<div className="task-modal-inner task-modal-inner__left">
				<div className="task-modal-inner__left__description">
					<TaskTitle onChange={noop} text={taskDataState?.title} weight={500} size={30} />
					<div style={{ height: '20px' }} />
					<TaskTitle onChange={noop} text={taskDataState?.description} weight={500} size={20} isEditble/>
				</div>
				<div className="task-modal-inner__left__progress">
					{/* <input type='range' value={taskDataState?.progreess} min="0" max="100"/> */}
					<TextInput
						size="sm"
						value={taskDataState.progreess}
						name='Progress'
						onChange={noop}
						type='text'
					/>
					<Progress classNames={{
						root: 'full-width',
					}} color="green" size="xl" value={taskDataState.progreess} /> 
					{/* оставить ли animate ? */}
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
			</div>
		</Modal>
    );
};

const TaskTitle = ({ text = '', weight = 900, size = 34, isEditble = false, onChange = noop }) => {
	return (
		<>
			{/* <Title sx={theme => ({
				fontFamily: `Greycliff CF, ${theme.fontFamily}`,
				fontWeight: weight,
				fontSize: size,
			})}
			>
				{!isEditble && text}
			</Title> */}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskModal);