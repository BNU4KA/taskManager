import React, { useEffect, useState } from "react";
import { Modal, Title, TextInput, Progress } from '@mantine/core';
import { useRouter } from 'next/router';
import { removeQueryParams } from '../constants/index';
import { fetchTask } from "../slices/tasksSlice";
import { connect } from 'react-redux';
import { isEmpty } from "lodash";
import "react-datepicker/dist/react-datepicker.css";

const TaskModal = ({ setOpened, opened, task, fetchTask }) => {
	const router = useRouter();
	const { query: { task: taskId } } = router || {};
	const [taskData, setTaskData] = useState(task);

	useEffect(() => {
		if (opened) fetchTask({ taskId, onSuccess: setTaskData });
	}, [opened]);

	const { title, description, status, startDate, endDate, progreess, spentTime, jobId, estimetedTime } = taskData || {};

	console.log(task);

	// const DateElement = (date) => <DatePicker selected={isUndefined(date) ? new Date() : new Date(date)} onChange={noop} />
	const getStatus = (status) => {
		if (status === 0) return 'discussion'
		if (status === 1) return 'ready for work'
		if (status === 2) return 'in progress'
		if (status === 3) return 'complete'
	}

	const HeaderItem = () => {
		return (
			<div style={{ display: 'block' }}>
				<div>
					<TaskTitle text={title} />
				</div>
				<div>
					<TaskTitle weight={600} size={25} text={`Status: ${getStatus(status)}`} />
				</div>
			</div>
		)
	}
	if (isEmpty(task)) return null;
    return (
        <Modal
			opened={opened}
			size="90%"
			title={<HeaderItem />}
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
					<TaskTitle text={description} weight={500} size={20} isEditble/>
				</div>
				<div className="task-modal-inner__left__progress">
					<div>progress</div>
					{/* <input type='range' value={progreess} min="0" max="100"/> */}
					<Progress style={{ width: '85%', margin: '3px 0 0 10px' }} value={progreess}/>
				</div>
				{/* <div className="task-modal-inner__left__progress">
					<div>Start Date: {new Date(startDate).toISOString}</div>
					<DateElement date={startDate} />
					{new Date(startDate)}
				</div> */}
			</div>
			<div className="task-modal-inner task-modal-inner__right">
				тут будет чат, пидоры из talkjs залочили ключ, пока без него
			</div>
		</Modal>
    );
};

const TaskTitle = ({ text = '', weight = 900, size = 34, isEditble = false }) => {
	return (
		<>
			<Title sx={theme => ({
				fontFamily: `Greycliff CF, ${theme.fontFamily}`,
				fontWeight: weight,
				fontSize: size,
			})}
			>
				{isEditble ? <TextInput value={text} /> : text}
			</Title>
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