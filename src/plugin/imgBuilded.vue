<template>
    <div>
        <div class="img-box" id="img-box">
            <div class="sm-top">
                <img
                    class="img-top"
                    src="@/assets/logo.png"
                    alt
                >
            </div>
        </div>
        <div id="box-wrap"></div>
        <div class="img-build" @click="setImage">生成图片</div>
    </div>
</template>

<script>
let html2canvas = require("./html2canvas.min").html2canvas;
export default {
    name: "img-build",
    props: {
        func: {
            type: Function,
            default: () => document.body
        }
    },
    data() {
        return {
            file: undefined,
            dataURL: undefined
        };
    },
    methods: {
        setImage() {
            let el = this.func();
            this.$setImage(document.getElementById("app"),document.getElementById("box-wrap"), ({dataURI,file}) => {
              console.log({dataURI, file })
            });
        },
        dataURLtoFile(dataurl, filename) {
            //将base64转换为文件
            let arr = dataurl.split(","),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]),
                n = bstr.length,
                u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], filename, { type: mime });
        }
    }
};
</script>

<style >
.img-build {
    color: red;
}
</style>

