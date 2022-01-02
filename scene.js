// GLOBAL VARIABLES
// Set the scene size
var mediaCondition = window.matchMedia("(max-width: 1440px)")
var WIDTH = mediaCondition.matches ? 960 : 1280;
var HEIGHT = 620;

var container;

// Plano del area de juego
const FIELD_WIDTH = 600,
      FIELD_HEIGHT = 400;

const PLANE_WIDTH = FIELD_WIDTH,
      PLANE_HEIGHT = FIELD_HEIGHT,
      PLANE_QUALITY = 10;

// Paddles
const PADDLE_WIDTH = 10,
      PADDLE_HEIGTH = 30,
      PADDLE_DEPTH = 10,
      PADDLE_QUALITY = 1;

var microphone,
    source;

// Set some camera attributes
const VIEW_ANGLE = 60;
const ASPECT = WIDTH / HEIGHT;
const NEAR = 1;
const FAR = 100000;

// Scene object variables
var renderer, scene, camera, pointLight;

var microphone_geometry, microphone_material, source_geometry, source_material;

var floor, frontWall, leftWall, rightWall;

var cylinder_11, cylinder_12, cylinder_21, cylinder_22;

function setup() {
    createScene();
    addMesh();
    addLight();
    requestAnimationFrame(draw);
}

function createScene() {
    // Set up all the 3D objects in the scene

    // Get the DOM element to attach to
    container = document.getElementById('dynamicData');

    // Create a WebGL renderer, camera and a scene
    renderer = new THREE.WebGLRenderer();
    camera =
        new THREE.PerspectiveCamera(
            VIEW_ANGLE,
            ASPECT,
            NEAR,
            FAR
        );

    camera.position.y = mediaCondition.matches ? -440 : -400 /*-500 : -350*/;
    camera.position.z = 90;

    scene = new THREE.Scene();

    // Add the camera to the scene
    scene.add(camera);
    // Start the renderer
    renderer.setSize(WIDTH, HEIGHT);

    // Attach the renderer-supplied DOM element.
    dynamicData.appendChild(renderer.domElement);
}

function addMesh() {
    //PLANOS
    var plane_geometry = new THREE.PlaneGeometry(
      PLANE_WIDTH,
      PLANE_HEIGHT,
      PLANE_QUALITY);
    var floor_texture = new THREE.TextureLoader().load('/textures/textura-madera.png');
    var floor_material = new THREE.MeshLambertMaterial(
      {
        map: floor_texture
      });
    var wall_texture = new THREE.TextureLoader().load('/textures/brick-texture.jpeg');
    var wall_material = new THREE.MeshLambertMaterial(
      {
        map: wall_texture
      });

    microphone_geometry = new THREE.CubeGeometry(
      PADDLE_WIDTH,
      PADDLE_HEIGTH,
      PADDLE_DEPTH,
      PADDLE_QUALITY);
    microphone_material = new THREE.MeshLambertMaterial(
      {
        color: 0xFF0000
      });
    source_geometry = new THREE.CubeGeometry(
      PADDLE_WIDTH,
      PADDLE_HEIGTH,
      PADDLE_DEPTH,
      PADDLE_QUALITY);
    source_material = new THREE.MeshBasicMaterial(
      {
        color: 0x0000FF
      });

    //COLUMNAS
    var column_texture = new THREE.TextureLoader().load('/textures/textura-madera.png');
    var cylinder_geometry = new THREE.CylinderGeometry( 8, 8, 40, 32 );
    var cylinder_material = new THREE.MeshLambertMaterial(
      {
        map: column_texture
      });

    // Create a new mesh

    floor = new THREE.Mesh(plane_geometry, floor_material);
    floor.position.x = 0;
    floor.position.y = 0;
    floor.position.z = -100;

    frontWall = new THREE.Mesh(plane_geometry, wall_material);
    frontWall.position.x = 0;
    frontWall.position.y = 200;
    frontWall.position.z = 0;
    frontWall.rotation.x = Math.PI/2;

    leftWall = new THREE.Mesh(plane_geometry, wall_material);
    leftWall.position.x = -300;
    leftWall.position.y = 0;
    leftWall.position.z = 0;
    leftWall.rotation.x = Math.PI/2;
    leftWall.rotation.y = Math.PI/2;

    rightWall = new THREE.Mesh(plane_geometry, wall_material);
    rightWall.position.x = 300;
    rightWall.position.y = 0;
    rightWall.position.z = 0;
    rightWall.rotation.x = Math.PI/2;
    rightWall.rotation.y = -Math.PI/2;

    microphone = new THREE.Mesh(microphone_geometry, microphone_material);
    microphone.position.x = 0;
    microphone.position.y = -100;
    microphone.position.z = -95;

    source = new THREE.Mesh(source_geometry, source_material);
    source.position.x = 0;
    source.position.y = 100;
    source.position.z = -95;

    //COLUMNAS
    cylinder_11 = new THREE.Mesh(cylinder_geometry, cylinder_material);
    cylinder_12 = new THREE.Mesh(cylinder_geometry, cylinder_material);
    cylinder_21 = new THREE.Mesh(cylinder_geometry, cylinder_material);
    cylinder_22 = new THREE.Mesh(cylinder_geometry, cylinder_material);

    cylinder_11.position.x = 200;
    cylinder_11.position.y = 108;
    cylinder_11.position.z = -81;
    cylinder_11.rotation.x = Math.PI/2;

    cylinder_12.position.x = 200;
    cylinder_12.position.y = -108;
    cylinder_12.position.z = -81;
    cylinder_12.rotation.x = Math.PI/2;

    cylinder_21.position.x = -200;
    cylinder_21.position.y = 108;
    cylinder_21.position.z = -81;
    cylinder_21.rotation.x = Math.PI/2;

    cylinder_22.position.x = -200;
    cylinder_22.position.y = -108;
    cylinder_22.position.z = -81;
    cylinder_22.rotation.x = Math.PI/2;

    // Finally, add to the scene
    scene.add(floor);
    scene.add(frontWall);
    scene.add(leftWall);
    scene.add(rightWall);
    scene.add(microphone);
    scene.add(source);
    scene.add(cylinder_11);
    scene.add(cylinder_12);
    scene.add(cylinder_21);
    scene.add(cylinder_22);
}

function getElementPosition(name, type) {
  var position = [],
      inputsData;
  if (name) {
    inputsData = document.getElementsByName(name);
    for (var i = 0; i < inputsData.length; i++) {
      position.push(parseInt(inputsData[i].value))
    }
  }
  addNewMesh(type, name, position);
}

function addNewMesh(type, name, position) {
  console.log("position", position);
  var newElement;
  switch (type) {
    case 'SOURCE':
      newElement = new THREE.Mesh(source_geometry, source_material);
      newElement.position.x = position[0]
      newElement.position.y = position[1]
      newElement.position.z = position[2]
      break;
    default:
      newElement = new THREE.Mesh(microphone_geometry, microphone_material);
      newElement.position.x = position[0]
      newElement.position.y = position[1]
      newElement.position.z = position[2]
  }
  scene.add(newElement);
}

function addLight() {
    // Create a point light
    spotLight = new THREE.SpotLight(0xFFFFFF);

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    spotLight.castShadow = true;

    floor.castShadow = true;
    floor.receiveShadow = true;

    microphone.castShadow = true;
    microphone.receiveShadow = true;

    source.castShadow = true;

    cylinder_11.receiveShadow = true;
    cylinder_12.receiveShadow = true;
    cylinder_21.receiveShadow = true;
    cylinder_22.receiveShadow = true;

    cylinder_11.castShadow = true;
    cylinder_12.castShadow = true;
    cylinder_21.castShadow = true;
    cylinder_22.castShadow = true;

    frontWall.receiveShadow = true;
    leftWall.receiveShadow = true;
    rightWall.receiveShadow = true;

    // Set its position
    spotLight.position.set(0, 0, 150)
    //spotLight.position.x = 0;
    //spotLight.position.y = 0;
    //spotLight.position.z = 150;

    // Add to the scene
    scene.add(spotLight);
}

mediaCondition.onchange = (e) => {
  if (e.matches) {
    WIDTH = 960;
    camera.position.y = -440;
    camera.position.z = 30;
  } else {
    WIDTH = 1280;
    camera.position.y = -400;
    camera.position.z = 90;
  }
  renderer.setSize(WIDTH, HEIGHT);
  requestAnimationFrame(draw);
}

function draw() {
  camera.lookAt( scene.position );
  renderer.render(scene, camera);
  requestAnimationFrame(draw);
}

function removeSceneObject(object) {
  scene.remove(object.name);
}
