import * as THREE from 'three';

export default class SpaceObject extends THREE.Mesh {
    constructor(radius, color, texture) {
        super();
        this.geometry = new THREE.SphereGeometry(radius, 50, 50);
        this.material = new THREE.MeshLambertMaterial({color: color});
        this.angle = 0;
        this.loadTexture(texture);
    }

    loadTexture(texturePath) {
        return new THREE.TextureLoader().load(texturePath, texture => {
            texture.generateMipmaps = false;
            texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
            texture.minFilter = THREE.LinearFilter;
            this.material = new THREE.MeshBasicMaterial({map: texture})
        });
    }
}