import React from "react";
import {
	Button,
	Modal,
	TextInput,
	Group,
} from '@mantine/core';
import { useRouter } from 'next/router';

const TaskModal = ({ setOpened, createTask, opened, taskTitle, taskSummary, taskId }) => {
	const router = useRouter();
	const { query: { task }, pathname } = router || {};
    return (
        <Modal
			opened={opened}
			size="90%"
			title={task}
			withCloseButton={false}
			onClose={() => {
				setOpened(false);
				router.push(pathname);
			}}
			centered
        >
			{/* <TextInput
				mt={'md'}
				ref={taskTitle}
				placeholder={'Task Title'}
				required
				label={'Title'}
			/>
			<TextInput
				ref={taskSummary}
				mt={'md'}
				placeholder={'Task Summary'}
				label={'Summary'}
			/>
			<Group mt={'md'} position={'apart'}>
				<Button
					onClick={() => {
						setOpened(false);
					}}
					variant={'subtle'}>
					Cancel
				</Button>
				<Button
					onClick={() => {
						createTask();
						setOpened(false);
					}}>
					Create Task
				</Button>
			</Group> */}
		</Modal>
    );
};

export default TaskModal;