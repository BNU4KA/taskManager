import React from "react";
import {
	Button,
	Modal,
	TextInput,
	Group,
} from '@mantine/core';

const CreateTask = ({ setOpened, createTask, opened, taskTitle, taskSummary }) => {
    return (
        <Modal
			opened={opened}
			size={'md'}
			title={'New Task'}
			withCloseButton={false}
			onClose={() => {
				setOpened(false);
			}}
			centered
        >
			<TextInput
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
			</Group>
		</Modal>
    );
};

export default CreateTask;