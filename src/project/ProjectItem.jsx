import React from 'react';
import { Title, Skeleton } from "@mantine/core";
import Image from 'next/image';

    const ProjectItem = ({ item }) => {
        return (
                    <Skeleton className='project-item' visible={false}>
                    <div className='project-item project-item__wrapper'>
                        <Image className='project-item' layout='fill' objectFit='cover' src={item?.photo || '/images/The_Great_Wave_off_Kanagawa.jpg'} />
                        <div className='project-item__wrapper-content'>
                            <div className='project-item__content'>
                                <h1>
                                    <Title sx={theme => ({
			    		                fontFamily: `Greycliff CF, ${theme.fontFamily}`,
			    		                fontWeight: 900,
			    	                })}>
                                        Title
                                    </Title>
                                </h1>
                                <h2>
                                    <Title sx={theme => ({
			    		                fontFamily: `Greycliff CF, ${theme.fontFamily}`,
			    		                fontWeight: 900,
                                        fontSize: '20px'
			    	                })}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </Title>
                                </h2>
                            </div>
                        </div>
                    </div>
                </Skeleton>
                );
                
    }

export default ProjectItem;