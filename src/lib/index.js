import imgBuilded from './imgBuilded.vue';
const html2canvas = require('./html2canvas.min').html2canvas;
let imgBuild = {};
imgBuild.install = (Vue, options) => {
    Vue.prototype.$imgBuild = '1.0';

    function dataURLtoFile(dataurl, filename) {
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
    Vue.prototype.$baseToFile = dataURLtoFile
    Vue.prototype.$setImage = (el, toEl, callback) => {
        console.log(this.a);
        el.querySelectorAll("img").forEach((img, index) => {
            img.setAttribute("crossOrigin", "anonymous");
        });
        html2canvas(el, { useCORS: true }).then((canvas) => {
            toEl.appendChild(canvas);
            let url = canvas.toDataURL("image/png");
            return callback({ dataURI: url, file: dataURLtoFile(url, 'names') });
        });
    };
    Vue.component(imgBuilded.name, imgBuilded)
};
export default imgBuild;