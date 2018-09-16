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
const sun = new SpaceObject(11000, '#F97005', sunTexture, 0);
const mercury = new SpaceObject(30, '#F97005', mercuryTexture, 10000);
const venus = new SpaceObject(100, '#F97005', venusTexture, 20000);
const earth = new SpaceObject(100, '#5cdff9', earthTexture, 30000);
const moon = new SpaceObject(27, '#cfcfd1', moonTexture, 30300);
const mars = new SpaceObject(500, '#cfcfd1', marsTexture, 50000);

earth.rotation.y = -23.5;

solarSystem.add(sun);
solarSystem.add(mercury);
solarSystem.add(venus);
solarSystem.add(earth);
solarSystem.add(moon);
solarSystem.add(mars);

let moonOrbit = moon.createOrbit(earth);

solarSystem.add(mercury.createOrbit());
solarSystem.add(venus.createOrbit());
solarSystem.add(earth.createOrbit());
solarSystem.add(moonOrbit);
solarSystem.add(mars.createOrbit());

solarSystem.start(() => {
    sun.rotation.y += 0.00021;

    mercury.rotation.y += 0.00007;
    mercury.position.x = 10000 * Math.cos(mercury.angle);
    mercury.position.z = 10000 * Math.sin(mercury.angle);
    mercury.angle += 0.0001;

    venus.rotation.y += 0.00007;
    venus.position.x = 20000 * Math.cos(venus.angle);
    venus.position.z = 20000 * Math.sin(venus.angle);
    venus.angle += 0.00007;

    earth.rotation.y += 0.07;
    earth.position.x = 30000 * Math.cos(earth.angle);
    earth.position.z = 30000 * Math.sin(earth.angle);
    earth.angle += 0.0002;

    moon.position.x = earth.position.x + (300 + earth.raduis) * Math.cos(moon.angle);
    moon.position.z = earth.position.z + (300 + earth.raduis) * Math.sin(moon.angle);
    moonOrbit.position.x = earth.position.x;
    moonOrbit.position.z = earth.position.z;
    moon.angle += 0.005;

    mars.rotation.y += 0.00003;
    mars.position.x = 50000 * Math.cos(mars.angle);
    mars.position.z = 50000 * Math.sin(mars.angle);
    mars.angle += 0.00003;
});

// const x = this._x + 200 * Math.cos(this.angle);
// const y = this._y + 200 * Math.sin(this.angle);