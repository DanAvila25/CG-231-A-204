

const color = [0xFF0000, 0x0000FF, 0xFFFF00];

var ArCub = [];
var n = color.length;

var Ancho = 1;
var Alto = 1;
var largo = 1;

for (var i = 0; i < n; i++) {

    ArCub[i] = cubo(largo, Alto, Ancho, color[i]);
    
}

const group = new THREE.Group();
for (i = 0; i < n; i++) {
    group.add(ArCub[i]);
}

ArCub[1].scale.set(largo/2, Alto/2, Ancho/2);
ArCub[1].position.y = (1.75);

ArCub[2].scale.set(largo/4, Alto/4, Ancho/4);
ArCub[2].position.y = (2.125);

group.rotation.y = Math.PI / 4;


scene.add(group);

