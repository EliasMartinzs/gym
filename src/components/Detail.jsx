import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography variant="h4" sx={{ textTransform: 'capitalize' }}>
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong. {name} {``}
          is one of the best exercises to target your {target}. it will help you
          improve your mood and gain energy
        </Typography>
        <Stack>
          {extraDetail.map((item, index) => (
            <Stack
              key={index}
              direction="row"
              alignItems="center"
              sx={{ gap: '10px' }}
            >
              <img
                src={item.icon}
                alt={item.name}
                style={{ height: '60px', width: '60px', margin: '10px 0px' }}
              />
              <Typography
                sx={{
                  fontSize: '17px',
                  textTransform: 'capitalize',
                  ml: '2px',
                }}
              >
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Detail;
