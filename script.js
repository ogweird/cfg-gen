const texture_quality = {
    ["Low"]: "mat_picmip 2;\n",
    ["Medium"]: "mat_picmip 1;\n",
    ["High"]: "mat_picmip 0;\n",
    ["Ultra"]: "mat_picmip -1;\n"
}

const model_quality = {
    ["Low"]: "r_rootlod 2;\n",
    ["Medium"]: "r_rootlod 1;\n",
    ["High"]: "r_rootlod 0;\n"
}

const shadow_quality = {
    ["Low"]: "r_shadowrendertotexture 0;\nr_flashlightdepthtexture 0;\n",
    ["Medium"]: "r_shadowrendertotexture 1;\nr_flashlightdepthtexture 0;\n",
    ["High"]: "r_shadowrendertotexture 1;\nr_flashlightdepthtexture 1;\n"
}

const shader_quality = {
    ["Low"]: "mat_reducefillrate 1;\n",
    ["High"]: "mat_reducefillrate 0;\n"
}

const vsync = {
    ["Off"]: "mat_vsync 0;\n",
    ["On"]: "mat_vsync 1;\n"
}

const hdr = {
    ["Off"]: "mat_hdr_level 0;\n",
    ["LDR + Bloom"]: "mat_hdr_level 1;\n",
    ["Full HDR"]: "mat_hdr_level 2;\n"
}

const anti_aliasing = {
    ["FSAA Off"]: "mat_antialias 0;\nmat_aaquality 0;\n",
    ["FSAA 2x"]: "mat_antialias 2;\nmat_aaquality 0;\n",
    ["FSAA 4x"]: "mat_antialias 4;\nmat_aaquality 0;\n",
    ["MSAA 8x"]: "mat_antialias 8;\nmat_aaquality 0;\n",
    ["CSAA 8x"]: "mat_antialias 4;\nmat_aaquality 2;\n",
    ["CSAA 16x"]: "mat_antialias 4;\nmat_aaquality 4;\n",
    ["CSAA 16xQ"]: "mat_antialias 8;\nmat_aaquality 2;\n"
}

const download = () => {
    let config = "";
    config = config + texture_quality[document.getElementById("cfg-texture-q").value];
    config = config + model_quality[document.getElementById("cfg-model-q").value];
    config = config + shadow_quality[document.getElementById("cfg-shadow-q").value];
    config = config + shader_quality[document.getElementById("cfg-shader-q").value];
    config = config + vsync[document.getElementById("cfg-vsync-q").value];
    config = config + hdr[document.getElementById("cfg-hdr-q").value];
    config = config + anti_aliasing[document.getElementById("cfg-antialiasing-q").value];

    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(config));
    element.setAttribute('download', "config.cfg");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}