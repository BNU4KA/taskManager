import React from 'react';
import { Title, Skeleton } from "@mantine/core";
import Image from 'next/image';
import { useRouter } from 'next/router';

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
        return (
                <Skeleton className='project-item' visible={false}>
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