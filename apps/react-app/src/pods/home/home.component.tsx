import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { switchRoutes } from '@/core';
import { Button, Footer, Header, Navbar } from '@/common-app/components';
import * as classes from './home.styles';

export const Home: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const navigateToExport = () => navigate(switchRoutes.templateExportScene);

  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.container}>
        <div className={classes.message}>
          Este es un proyecto Open Source realizado por los alumnos del
          <span>Máster Front End Lemoncode</span>
        </div>
        <Header />
        <div className={classes.grid}>
          <div className={classes.description}>
            <Link to={'https://www.getmanfred.com/'} target="_blank">
              GetManfred
            </Link>{' '}
            te ofrece un formato abierto y open source que puedes descargar a tu local, con está herramienta, con sólo
            pegar el JSON de tu perfil, podrás generar tu Curriculum en formato Word
          </div>
          <div className={classes.videoContainer}>
            <div className={classes.videoContent}>
              <video id="myVideo" controls loop>
                <source src="./assets/big_buck_bunny_webm.webm" type="video/webm" />
              </video>
              <span className={classes.videoDescription}>Cómo extraer tu perfil de manfred a formato JSON</span>
            </div>
          </div>
          <Button className={classes.buttonClass} onClick={navigateToExport}>
            EXPORTAR CV
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
