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
	const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
		<>
			<div className="mantine-InputWrapper-root mantine-TextInput-root mantine-1l2unfb">
				<label className="mantine-InputWrapper-label mantine-TextInput-label mantine-1hwfu2">
					До Даты
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
			title={'Новая Задача'}
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
				placeholder={'Название Задачи'}
				required
				label={'Название'}
				type='text'
			/>
			<Textarea
				value={state.description}
				name='description'
				onChange={(event) => handleChange(event)}
				placeholder={'Описание Задачи'}
				label={'Описание'}
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
					Отменить
				</Button>
				<Button
					onClick={() => {
						createTask({ state });
						setOpened(false);
					}}>
					Создать задачу
				</Button>
			</Group>
		</Modal>
    );
};

export default CreateTask;