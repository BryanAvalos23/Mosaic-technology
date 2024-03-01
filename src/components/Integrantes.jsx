import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import CardIntegrantes from '../components/CardIntegrantes';

import pkg from '@material-tailwind/react';
const { Card, CardHeader, CardBody, CardFooter, Typography, Tooltip } = pkg;

import TEAM from '../../public/js/team';
const data = TEAM;

export default function EquipoSlider () {
  return (
    <div className='flex gap-8'>
      {
        data.map(({ id, nombre, image, rol, linkedin, website }) => (
          <Card className="w-2/4" key={id}>
            <CardHeader floated={false} className="h-80">
              <img src={image} alt={`Foto de perfil de ${nombre}`} className='h-full w-full' />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {nombre}
              </Typography>
              <Typography color="blue-gray" className="font-medium" textGradient>
                {rol}
              </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2">
              <Tooltip content="Like">
                <Typography
                  as="a"
                  href={linkedin}
                  variant="lead"
                  color="blue"
                  textGradient
                >
                  <i className="fab fa-facebook" />
                </Typography>
              </Tooltip>
              <Tooltip content="Follow">
                <Typography
                  as="a"
                  href={website}
                  variant="lead"
                  color="light-blue"
                  textGradient
                >
                  <i className="fab fa-twitter" />
                </Typography>
              </Tooltip>
              <Tooltip content="Follow">
                <Typography
                  as="a"
                  href="#instagram"
                  variant="lead"
                  color="purple"
                  textGradient
                >
                  <i className="fab fa-instagram" />
                </Typography>
              </Tooltip>
            </CardFooter>
          </Card>
        ))
      }
    </div>
  );
}