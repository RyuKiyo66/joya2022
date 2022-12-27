// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = ["newwhite"];

    /* Alternatively, you can specify a card spec for an avatar,
       instead of a string for the partical file name, to create your own avatar.
       You can add behaviorModules here. Also, if the system detects a behavior module
       named AvatarEventHandler, that is automatically installed to the avatar.
        {
            type: "3d",
            modelType: "glb",
            name: "rabbit",
            dataLocation: "./assets/avatars/newwhite.zip",
            dataRotation: [0, Math.PI, 0],
            dataScale: [0.3, 0.3, 0.3],
        }
    */

    // rotates an object around a center point.
    function rotateTo(center, length, angle) {
        let pos = [];
        pos.push(length * Math.sin(angle));
        pos.push(0);
        pos.push(length * Math.cos(angle));
        pos[0] += center[0];
        pos[1] = center[1];
        pos[2] += center[2];
        return pos;
    }

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "lights.js", "cascade.js", "earth.js", "gridBlock.js", "gridSphere.js", "pool.js", "spin.js",
        "urlLink.js", "replaceWorld.js", "menus.js", "soundPlayer.js"
    ];

    Constants.DefaultCards = [
        {
            card: {
                name: "entrance",
                type: "object",
                translation: [0, 5, 0],
                spawn: "default",
            }
        },
        {
            "card": {
                "behaviorModules": ["Menus"],
                "layers": ["walk"],
                "name": "world model",
                "placeholder": true,
                "placeholderColor": 8421504,
                "placeholderOffset": [0, 0, 0],
                "placeholderSize": [400, 0.1, 400],
                "shadow": true,
                "singleSided": true,
                "translation": [0, -1.7, 0],
                "type": "3d"
            },
            "id": "0001"
        },
        {
            "card": {
                "behaviorModules": ["Light"],
                "dataLocation": "3NdDEG6FKx-5pS2qzkbhkeN4pF_-H3YmiONK9fxWKd44Jjo6Pj10YWEoJyIrPWA7PWAtPCE_Oys6YCchYTthGAIGKhR3fX8sCC0UCjt_DycaeToAJww6diQEfGEnIWAtPCE_Oys6YD4mNz0nLT1hHhQgG315CAARf30_LAp5GAQ_AQYCFioMBid2PzgkOgEadnwYACcPexYRIWEqLzovYSI4PDkdBnoeDSYmFBQRDTl4PX4kITYtOCM5eSI4dn00BGMhIAAUfz96Pxc",
                "dataType": "exr",
                "fileName": "/aboveClouds.jpg",
                "layers": ["light"],
                "name": "light",
                "type": "lighting"
            },
            "id": "0002"
        },
        {
            "card": {
                "behaviorModules": ["Spray"],
                "color": 13421772,
                "layers": ["pointer"],
                "name": "spray",
                "physicsShape": "cuboid",
                "physicsSize": [0.8, 0.8, 0.8],
                "physicsType": "positionBased",
                "shadow": true,
                "translation": [-58.5639219354989, 39.19159400217578, -70.31687194993302],
                "type": "object"
            },
            "id": "0003"
        },
        {
            "card": {
                "behaviorModules": ["Pool"],
                "layers": ["pointer"],
                "name": "pool",
                "poolSize": [10, 10],
                "scale": [46.75842059539937, 46.75842059539937, 46.75842059539937],
                "translation": [0, -1.470552549814657, -15],
                "type": "object"
            },
            "id": "0004"
        },
        {
            "card": {
                "behaviorModules": ["URLLink"],
                "cardURL": "https://croquet.io",
                "color": 16777215,
                "cornerRadius": 0.05,
                "depth": 0.05,
                "frameColor": 13421772,
                "fullBright": true,
                "layers": ["pointer"],
                "name": "Croquet Card",
                "rotation": [-0.005343761008951379, 0.4543502622963543, 0.00010453482591165578, .8908070904758131],
                "scale": [32.41152885418468, 32.41152885418468, 32.41152885418468],
                "shadow": true,
                "textureLocation": "./assets/images/CroquetLogo_RGB.jpg",
                "textureType": "image",
                "translation": [-38.49317875783751, 23.02614082921036, -46.9501944296827],
                "type": "2d"
            },
            "id": "0005"
        },
        {
            "card": {
                "dataLocation": "3f5VvF859_VSLd-d5C0ays1T4QmtBPFi436bplig5B2MDhISFhVcSUkADwoDFUgTFUgFFAkXEwMSSA8JSRNJMCouAjxfVVcEIAU8IhNXJw8yURIoDyQSXgwsVEkPCUgFFAkXEwMSSBYOHxUPBRVJNjwIM1VRICg5V1UXBCJRMCwXKS4qPgIkLg9eFxAMEikyXlQwKA8nUz45CUkCBxIHSTQVDiw5MSEuXy4lUTAgERMPIFYgCwIhHFU0M1E-Pi4PKgsiKxYuLwUPVw0",
                "dataScale": [7, 7, 7],
                "fileName": "/snow1223.glb",
                "layers": ["pointer", "walk"],
                "modelType": "glb",
                "name": "/snow1223.glb",
                "rotation": [0, 0.022778338283902834, 0, 0.9997405399927644],
                "shadow": true,
                "singleSided": true,
                "translation": [0.12095081699025068, -4.452891010100306, -9.947566859238773],
                "type": "3d"
            },
            "id": "0006"
        },
        {
            "card": {
                "dataLocation": "34_7dW1DIkhy3KqjsZl2xMPmGjsZGvPSEJcYvP-YhGCUXEBAREcOGxtSXVhRRxpBRxpXRltFQVFAGl1bG0EbYnh8UG4NBwVWclducEEFdV1gA0B6XXZADF5-BhtdWxpXRltFQVFAGkRcTUddV0cbZG5aYQcDcnprBQdFVnADYn5Fe3x4bFB2fF0MRUJeQHtgDAZiel11AWxrWxtQVUBVG0BrRHZZen1Dd3dMfmVbDARRRAJAQlJxd3NdWkdDQ0FzWQQNeEZeBQAHW0c",
                "dataScale": [7, 7, 7],
                "fileName": "/kane.glb",
                "layers": ["pointer"],
                "modelType": "glb",
                "name": "/kane.glb",
                "rotation": [0, 0.9983881095764063, 0, 0.056755463670466376],
                "shadow": true,
                "singleSided": true,
                "translation": [-104.23321726343876, -4.76816444675649, -116.77462341470175],
                "type": "3d"
            },
            "id": "0007"
        },
        {
            "card": {
                "dataLocation": "3G067FXQLJ1hyqqsJcSk-UNyj9BovwUN1lNriPmzDzEsLzMzNzR9aGghLisiNGkyNGkkNSg2MiIzaS4oaDJoEQsPIx1-dHYlASQdAzJ2Bi4TcDMJLgUzfy0NdWguKGkkNSg2MiIzaTcvPjQuJDRoFx0pEnRwAQkYdnQ2JQNwEQ02CA8LHyMFDy5_NjEtMwgTf3URCS4Gch8YKGgjJjMmaDILADcCDCRzDQhqKBMOPR8WagEBJHI0JQ8VFgIhBioXH3MfEiUDARN_ago",
                "dataScale": [7, 7, 7],
                "fileName": "/kane_tukibou.glb",
                "layers": ["pointer"],
                "modelType": "glb",
                "name": "/kane_tukibou.glb",
                "rotation": [0, 0.9999877921790455, 0, 0.004941203585972831],
                "shadow": true,
                "singleSided": true,
                "translation": [-86.91219245871194, -2.8656849962716233, -137.03639000277508],
                "type": "3d"
            },
            "id": "0008"
        },
        {
            "card": {
                "behaviorModules": ["SoundPlayer", "AudioMenu"],
                "color": 16777215,
                "dataLocation": "3p2VFWfrXZjVMaPJ751D4dssBBY4Ls2R-cFWz83MEOkUGAQEAANKX18WGRwVA14FA14TAh8BBRUEXhkfXwVfNxQmEgkcOQMxGyETMigUQzcIEQYJByU7JykpQl8ZH14TAh8BBRUEXh0ZEwIfBhUCAxVfQkQkP0AKLxEoJRYDMR4IIjk0QCgSGQElQUgvIkghNQgoM0M6FxclHCEqH18UEQQRXxoKRD0fQV0oBEk4R107JjNJNic-FSkSHjYDHEcvGhsGBCIBFkMYCQEHIRs",
                "fullBright": true,
                "height": 1,
                "layers": ["pointer"],
                "modelType": "svg",
                "name": "sound",
                "playStartTime": 5887906,
                "rotation": [0, 0.7401244873589452, 0, 0.672469882754357],
                "soundLocation": "30aFrpry7VW32rxiLrJLt1EeV6S6aOl1Wpr7JQYXMo0UWEREQEMKHx9WWVxVQx5FQx5TQl9BRVVEHllfH0UfSmVER2B_SnZFf2MBe1lXfWpZBQMJSHZ0dwgAAh9ZXx5TQl9BRVVEHl1ZU0JfRlVCQ1UeXF9TUVxUVUZUVVZRRVxEH2doZX8DSHxxYkMHBGFyBlRzBX0AfklVQ0J6Bkd0RX0JW3pBc0Z3X1xxYHEfVFFEUR9SfHEJSURmSFR9ZUVXAWoEXllfRlVDBl8BW11haEVfHXhvcl93VVZYHXVx",
                "translation": [-29.565853945050268, 16.394782794559383, -79.70499721486583],
                "type": "2d",
                "width": 1
            },
            "id": "0009"
        }
    ]
}
