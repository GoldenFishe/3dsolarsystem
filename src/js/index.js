import SpaceObject from './spaceObject';
import SolarSystem from './solarSystem';

import sunTexture from '../assets/sun.jpg';
import mercuryTexture from '../assets/mercury.jpg';
import venusTexture from '../assets/venus.jpg';
import earthTexture from '../assets/earth.jpg';
import moonTexture from '../assets/moon.png';
import marsTexture from '../assets/mars.png';

import css from '../css/style.css';

const solarSystem = new SolarSystem();
const sun = new SpaceObject(500, '#F97005', sunTexture);
const mercury = new SpaceObject(100, '#F97005', mercuryTexture);
const venus = new SpaceObject(100, '#F97005', venusTexture);
const earth = new SpaceObject(100, '#5cdff9', earthTexture);
const moon = new SpaceObject(10, '#cfcfd1', moonTexture);
const mars = new SpaceObject(100, '#cfcfd1', marsTexture);

mercury.position.x = 1000;
venus.position.x = 2000;
earth.position.x = 3000;
moon.position.x = 3200;
mars.position.x = 4000;

solarSystem.add(sun);
solarSystem.add(mercury);
solarSystem.add(venus);
solarSystem.add(earth);
solarSystem.add(moon);
solarSystem.add(mars);

solarSystem.start(() => {
    sun.rotation.y += 0.001;

    mercury.rotation.y += 0.01;
    mercury.position.x = 1000 * Math.cos(mercury.angle);
    mercury.position.z = 1000 * Math.sin(mercury.angle);
    mercury.angle += 0.01;

    venus.rotation.y += 0.01;
    venus.position.x = 2000 * Math.cos(venus.angle);
    venus.position.z = 2000 * Math.sin(venus.angle);
    venus.angle += 0.008;

    earth.rotation.y += 0.01;
    earth.position.x = 3000 * Math.cos(earth.angle);
    earth.position.z = 3000 * Math.sin(earth.angle);
    earth.angle += 0.005;

    moon.position.x = earth.position.x + (100 + earth.raduis) * Math.cos(moon.angle);
    moon.position.z = earth.position.z + (100 + earth.raduis) * Math.sin(moon.angle);
    moon.angle += 0.05;

    mars.rotation.y += 0.05;
    mars.position.x = 4000 * Math.cos(mars.angle);
    mars.position.z = 4000 * Math.sin(mars.angle);
    mars.angle += 0.003;
});

// const x = this._x + 200 * Math.cos(this.angle);
// const y = this._y + 200 * Math.sin(this.angle);