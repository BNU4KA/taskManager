import React from "react";
import {
	Button,
	Modal,
	TextInput,
	Group,
} from '@mantine/core';
import { useState } from "react";
import { connect } from 'react-redux';
import { createProject } from "../slices/tasksSlice";

const CreateProject = ({ setOpened, opened, createProjectFunc }) => {
	const [state, setState] = useState({ title: '', description: '' });
	const handleChange = ({ target: { name, value } }) => setState((prevState) => ({ ...prevState, [name]: value }));
	const createTaskHandler = () => {
		createProjectFunc(state);
		setOpened(false);
	};
    return (
        <Modal
			opened={opened}
			size={'md'}
			title={'Create New Project'}
			withCloseButton={false}
			onClose={() => {
				setOpened(false);
			}}
			centered
        >
			<TextInput
				mt={'md'}
				value={state?.title}
				name='title'
				onChange={(event) => handleChange(event)}
				placeholder={'Project Title'}
				required
				label={'Title'}
				type='text'
			/>
			<TextInput
				value={state?.description}
				name='description'
				onChange={(event) => handleChange(event)}
				mt={'md'}
				placeholder={'Project Description'}
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
					onClick={() => createTaskHandler()}
				>
					Create Project
				</Button>
			</Group>
		</Modal>
    );
};

const mapDispatchToProps = (dispatch) => ({
  createProjectFunc: (data = {}) => dispatch(createProject(data)),
});

export default connect(null, mapDispatchToProps)(CreateProject);