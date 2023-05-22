import React from 'react';
import {
	Text,
	Title,
	Group,
	Card,
	ActionIcon,
    Skeleton, 
    RingProgress
} from '@mantine/core';
import { Trash } from 'tabler-icons-react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { noop } from 'lodash';
import { getRandomInt } from '../constants';

const Progress = () => {
    return <RingProgress
      size={70}
      thickness={13}
      label={
        <Text size="xs" align="center">
          {/* Application data usage */}
        </Text>
      }
      sections={[
        { value: getRandomInt(100), color: 'cyan', tooltip: 'disscution' },
        { value: getRandomInt(100), color: 'orange', tooltip: 'in progress' },
        { value: getRandomInt(100), color: 'grape', tooltip: 'complete' },
      ]}
    />
}
    const ProjectItem = ({ item }) => {
        const router = useRouter();
        const switchSectionByQuery = () =>
            router.push(
              {
                pathname: '/[project]/',
                query: {
                  project: item?.projectId,
                },
              },
              undefined,
              { shallow: true }
            );
            
        const ProjectItemTemplate = ({ title, description, progress = 101 }) => {
		return (
	    		<Card withBorder style={{ cursor: 'pointer', width: '400px', margin: '10px' }} mt={'sm'} onClick={() => switchSectionByQuery()}>
	    			<Group position={'apart'}>
	    				<Text fz="xl" weight={'bold'}>{title}</Text>
	    				{/* <ActionIcon
	    					onClick={(event) => {
	    						event.stopPropagation();
                                noop();
	    					}}
	    					color={'red'}
	    					variant={'transparent'}
	    				>
	    					<Trash />
	    				</ActionIcon> */}
                        <Progress />
	    			</Group>
            <Text color={'dimmed'} size={'md'} mt={'sm'}>
	    				{/* Project progress: {<b style={{ color: 'white' }}>{getRandomInt(progress)}%</b>} */}
	    				Прогресс выполнения проекта: {<b style={{ color: 'black' }}>{getRandomInt(progress)}%</b>}
	    			</Text>
	    			<Text color={'dimmed'} size={'md'} mt={'sm'}>
	    				{description
	    					? description
	    					: 'No description was provided for this task'}
	    			</Text>
	    		</Card>
	    	)
	    };
        return ProjectItemTemplate(item);
        return (
                <Skeleton className='project-item' visible={false}>
                    {/* <div className='project-item__wrapper-content'>
                        <div className='project-item__content'>
                            <Title 
                                sx={theme => ({
			        	            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
			        	            fontWeight: 900,
			                    })}
                                >
                                    {item?.title}
                            </Title>
                            <Title sx={theme => ({
			        	        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
			        	        fontWeight: 900,
                                fontSize: '20px'
			                })}>
                                {item?.description}
                            </Title>
                        </div>
                    </div> */}

                    <div className='project-item project-item__wrapper' onClick={() => switchSectionByQuery()}>
                        <Image className='project-item' layout='fill' objectFit='cover' src={item?.photo || '/images/The_Great_Wave_off_Kanagawa.jpg'} />
                        <div className='project-item__wrapper-content'>
                            <div className='project-item__content'>
                                <Title sx={theme => ({
			        	            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
			        	            fontWeight: 900,
			                    })}>
                                    {item?.title}
                                </Title>
                                <Title sx={theme => ({
			        	            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
			        	            fontWeight: 900,
                                    fontSize: '20px'
			                    })}>
                                    {item?.description}
                                </Title>
                            </div>
                        </div>
                    </div>
                </Skeleton>
                );
                
    }

export default ProjectItem;