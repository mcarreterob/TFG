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

const RADIUS = 6,
      SEGMENTS = 32,
      RINGS = 16;

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

    camera.position.y = mediaCondition.matches ? -340 : -290 /*-500 : -350*/;
    camera.position.z = 230;

    scene = new THREE.Scene();

    // Add the camera to the scene
    scene.add(camera);
    // Start the renderer
    renderer.setSize(WIDTH, HEIGHT);

    // Attach the renderer-supplied DOM element.
    dynamicData.appendChild(renderer.domElement);
}

function addMesh() {
  console.log('addMesh');
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

    microphone_geometry = new THREE.SphereGeometry(
      RADIUS,
      SEGMENTS,
      RINGS);
    microphone_material = new THREE.MeshLambertMaterial(
      {
        color: 0x0000FF
      });
    source_geometry = new THREE.CubeGeometry(
      PADDLE_WIDTH,
      PADDLE_HEIGTH,
      PADDLE_DEPTH,
      PADDLE_QUALITY);
    source_material = new THREE.MeshBasicMaterial(
      {
        color: 0xFF0000
      });

    // Create a new mesh

    floor = new THREE.Mesh(plane_geometry, floor_material);
    floor.position.x = 0;
    floor.position.y = 0;
    floor.position.z = 0;

    frontWall = new THREE.Mesh(plane_geometry, wall_material);
    frontWall.position.x = 0;
    frontWall.position.y = 200;
    frontWall.position.z = 100;
    frontWall.rotation.x = Math.PI/2;

    leftWall = new THREE.Mesh(plane_geometry, wall_material);
    leftWall.position.x = -300;
    leftWall.position.y = 0;
    leftWall.position.z = 100;
    leftWall.rotation.x = Math.PI/2;
    leftWall.rotation.y = Math.PI/2;

    rightWall = new THREE.Mesh(plane_geometry, wall_material);
    rightWall.position.x = 300;
    rightWall.position.y = 0;
    rightWall.position.z = 100;
    rightWall.rotation.x = Math.PI/2;
    rightWall.rotation.y = -Math.PI/2;

    // Finally, add to the scene
    scene.add(floor);
    scene.add(frontWall);
    scene.add(leftWall);
    scene.add(rightWall);
}

function checkIfElementIsAdded(name) {
  var ret = false
  for (var i = 0; i < scene.children.length; i++) {
    if (scene.children[i].name === name) {
      ret = i
      break;
    }
  }
  return ret
}

function addNewMesh(type, name, position) {
  console.log("type", type);
  console.log("name", name);
  console.log("position", position);
  var newElement;
  var isAdded = checkIfElementIsAdded(name)
  if (isAdded) {
    scene.children[isAdded].position.x = position[0]
    scene.children[isAdded].position.y = position[1]
    scene.children[isAdded].position.z = position[2]
    scene.children[isAdded].name = name
    console.log('MESH IS ALREADY ADDED');
  } else {
    switch (type) {
      case 'SOURCE':
        newElement = new THREE.Mesh(source_geometry, source_material);
        newElement.position.x = position[0]
        newElement.position.y = position[1]
        newElement.position.z = position[2]
        newElement.name = name
        break;
      default:
        newElement = new THREE.Mesh(microphone_geometry, microphone_material);
        newElement.position.x = position[0]
        newElement.position.y = position[1]
        newElement.position.z = position[2]
        newElement.name = name
    }
    newElement.castShadow = true;
    newElement.receiveShadow = true;
    scene.add(newElement);
    console.log('addNewMesh SCENE', scene);
  }
  requestAnimationFrame(draw);
}

function deleteMesh(name) {
  for (var i = 0; i < scene.children.length; i++) {
    if (scene.children[i].name === name) {
      scene.remove(scene.children[i]);
      break;
    }
  }
  console.log('deleteMesh SCENE', scene);
}

function addLight() {
    // Create a point light
    spotLight = new THREE.SpotLight(0xFFFFFF);

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    spotLight.castShadow = true;

    floor.castShadow = true;
    floor.receiveShadow = true;

    frontWall.receiveShadow = true;
    leftWall.receiveShadow = true;
    rightWall.receiveShadow = true;

    // Set its position
    spotLight.position.set(0, 0, 300)

    // Add to the scene
    scene.add(spotLight);
}

mediaCondition.onchange = (e) => {
  if (e.matches) {
    WIDTH = 960;
    camera.position.y = -340;
    camera.position.z = 130;
  } else {
    WIDTH = 1280;
    camera.position.y = -300;
    camera.position.z = 190;
  }
  renderer.setSize(WIDTH, HEIGHT);
  requestAnimationFrame(draw);
}

function draw() {
  camera.lookAt( scene.position );
  renderer.render(scene, camera);
  requestAnimationFrame(draw);
}
