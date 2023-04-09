import React, { useEffect } from "react";
import { Modal, Title } from '@mantine/core';
import { useRouter } from 'next/router';
import { removeQueryParams } from '../constants/index';
import { fetchTask } from "../slices/tasksSlice";
import { connect } from 'react-redux';

const TaskModal = ({ setOpened, opened, task, fetchTask }) => {
	const router = useRouter();
	const { query: { task: taskId } } = router || {};
	useEffect(() => {
		const data = { taskId };
		fetchTask(data);
	});
	console.log({ task });
    return (
        <Modal
			opened={opened}
			size="90%"
			title={<TaskTitle title={'Title'} />}
			withCloseButton={false}
			onClose={() => {
				const url = removeQueryParams(router, 'task');
				router.push(url);
				setOpened(false);
			}}
			centered
			classNames={{
  			//   root: 'your-root-class',
  			//   inner: 'your-inner-class',
  			  modal: 'task-modal-wrapper',
  			//   header: 'your-header-class',
  			//   title: 'your-title-class',
  			  body: 'task-modal'
  			}}
        >
			<div className="task-modal-inner task-modal-inner__left">
				qwe
			</div>
			<div className="task-modal-inner task-modal-inner__right">
				asd
			</div>
		</Modal>
    );
};

const TaskTitle = ({ title = '' }) => {
	return (
		<Title sx={theme => ({
				fontFamily: `Greycliff CF, ${theme.fontFamily}`,
				fontWeight: 900,
			})}
		>
			{title}
		</Title>
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