import React, { forwardRef } from "react";
import {
	Button,
	Modal,
	TextInput,
	Group,
	Textarea,
} from '@mantine/core';
import { noop } from "lodash";
import DatePicker from "react-datepicker";

const CreateTask = ({ opened, state, handleChange = noop, createTask = noop, setOpened = noop }) => {
    console.log({ state });
	const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
		<>
			<div className="mantine-InputWrapper-root mantine-TextInput-root mantine-1l2unfb">
				<label className="mantine-InputWrapper-label mantine-TextInput-label mantine-1hwfu2">
					Due Date
				</label>
				<div className="mantine-Input-wrapper mantine-TextInput-wrapper mantine-12sbrde">
				<button className="mantine-Input-input mantine-TextInput-input mantine-1r06dai" onClick={onClick} ref={ref}>
      				{value}
    			</button>
			</div>
			</div>
		</>
  	));
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
			<Textarea
				value={state.description}
				name='description'
				onChange={(event) => handleChange(event)}
				placeholder={'Task Description'}
				label={'Description'}
				type='text'
				autosize
			/>
			<DatePicker 
				selected={state.endDate} 
				onChange={(date) => handleChange({ target: { name: 'endDate', value: date } })}
				customInput={<ExampleCustomInput />} 
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
						createTask({ state });
						setOpened(false);
					}}>
					Create Task
				</Button>
			</Group>
		</Modal>
    );
};

export default CreateTask;