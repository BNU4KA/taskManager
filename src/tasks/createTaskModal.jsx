import React from "react";
import {
	Button,
	Modal,
	TextInput,
	Group,
} from '@mantine/core';

const CreateTask = ({ setOpened, createTask, opened, state, handleChange }) => {
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
				value={state.title}
				name='title'
				onChange={(event) => handleChange(event)}
				placeholder={'Task Title'}
				required
				label={'Title'}
				type='text'
			/>
			<TextInput
				value={state.description}
				name='description'
				onChange={(event) => handleChange(event)}
				mt={'md'}
				placeholder={'Task Description'}
				label={'Description'}
				type='text'
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