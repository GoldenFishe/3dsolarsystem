import * as THREE from 'three';
import css from '../css/style.css';

import SpaceObject from './spaceObject';
import SolarSystem from './solarSystem';

import sunTexture from '../assets/sun.jpg';
import mercuryTexture from '../assets/mercury.jpg';
import venusTexture from '../assets/venus.jpg';
import earthTexture from '../assets/earth.jpg';
import moonTexture from '../assets/moon.jpg';
import marsTexture from '../assets/mars.jpg';

const solarSystem = new SolarSystem();
const sun = new SpaceObject(500, '#F97005', sunTexture, 0);
const mercury = new SpaceObject(100, '#F97005', mercuryTexture, 1000);
const venus = new SpaceObject(100, '#F97005', venusTexture, 2000);
const earth = new SpaceObject(100, '#5cdff9', earthTexture, 3000);
const moon = new SpaceObject(10, '#cfcfd1', moonTexture, 3200);
const mars = new SpaceObject(100, '#cfcfd1', marsTexture, 4000);

let light1 = new THREE.PointLight('#ffffff');
solarSystem.add(light1);

let light = new THREE.HemisphereLight();
solarSystem.add(light);

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