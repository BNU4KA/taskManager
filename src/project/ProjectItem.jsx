import React from 'react';
import {
	Button,
	Container,
	Text,
	Title,
	Group,
	Card,
	ActionIcon,
    Skeleton, 
} from '@mantine/core';
import { MoonStars, Sun, Trash } from 'tabler-icons-react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { noop } from 'lodash';

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
            
        const ProjectItemTemplate = ({ title, description }) => {
		return (
	    		<Card withBorder style={{ cursor: 'pointer', width: '400px', margin: '10px' }} mt={'sm'} onClick={() => switchSectionByQuery()}>
	    			<Group position={'apart'}>
	    				<Text weight={'bold'}>{title}</Text>
	    				<ActionIcon
	    					onClick={(event) => {
	    						event.stopPropagation();
                                noop();
	    					}}
	    					color={'red'}
	    					variant={'transparent'}
	    				>
	    					<Trash />
	    				</ActionIcon>
	    			</Group>
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