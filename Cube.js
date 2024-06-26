class Cube {
    constructor() {
        this.type = 'cube';
        this.color = [1.0, 1.0, 1.0, 1.0];
        this.matrix = new Matrix4();
        this.textureNum = -2;
    }
    render() {
        var rgba = this.color;


        // console.log('Texture mode set to:', u_whichTexture);

        gl.uniform1i(u_whichTexture, this.textureNum);

        // Pass the color of a point to u_FragColor variable
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

        // Pass the matrix to u_ModelMatrix attribute
        gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);
        

        // Front of cube
        // drawTriangle3D([0,0,0, 1,1,0, 1,0,0]);
        // drawTriangle3D([0,0,0, 0,1,0, 1,1,0]);

        drawTriangle3DUV([0,0,0, 1,1,0, 1,0,0], [0,0, 1,1, 1,0]);
        drawTriangle3DUV([0,0,0, 0,1,0, 1,1,0], [0,0, 0,1, 1,1]);
        

        gl.uniform4f(u_FragColor, rgba[0]*.9, rgba[1]*.9, rgba[2]*.9, rgba[3]);

        // Back of cube
        // drawTriangle3D([0,0,1, 1,1,1, 1,0,1]);
        // drawTriangle3D([0,0,1, 0,1,1, 1,1,1]);

        drawTriangle3DUV([0,0,1, 1,1,1, 1,0,1], [0,0, 1,1, 1,0]);
        drawTriangle3DUV([0,0,1, 0,1,1, 1,1,1], [0,0, 0,1, 1,1]);

        // gl.uniform4f(u_FragColor, rgba[0]*.8, rgba[1]*.8, rgba[2]*.8, rgba[3]);


        // Top of cube
        // drawTriangle3D([0,1,0, 0,1,1, 1,1,1]);
        // drawTriangle3D([0,1,0, 1,1,1, 1,1,0]);

        drawTriangle3DUV([0,1,0, 0,1,1, 1,1,1], [0,1, 0,1, 1,1]);
        drawTriangle3DUV([0,1,0, 1,1,1, 1,1,0], [0,1, 1,1, 1,1]);

        // Bottom of cube
        // drawTriangle3D([0,0,0, 0,0,1, 1,0,1]);
        // drawTriangle3D([0,0,0, 1,0,1, 1,0,0]);

        drawTriangle3DUV([0,0,0, 0,0,1, 1,0,1], [0,0, 0,0, 1,0]);
        drawTriangle3DUV([0,0,0, 1,0,1, 1,0,0], [0,0, 1,0, 1,0]);

        // Left of Cube
        // drawTriangle3D([0,0,0, 0,1,1, 0,0,1]);
        // drawTriangle3D([0,0,0, 0,1,0, 0,1,1]);

        drawTriangle3DUV([0,0,0, 0,1,1, 0,0,1], [0,0, 0,1, 0,0]);
        drawTriangle3DUV([0,0,0, 0,1,0, 0,1,1], [0,0, 0,1, 0,1]);

        // // Right of Cube
        // drawTriangle3D([1,0,0, 1,1,1, 1,0,1]);
        // drawTriangle3D([1,0,0, 1,1,0, 1,1,1]);

        drawTriangle3DUV([1,0,0, 1,1,1, 1,0,1], [1,0, 1,1, 1,0]);
        drawTriangle3DUV([1,0,0, 1,1,0, 1,1,1], [1,0, 1,1, 1,1]);


    }
}