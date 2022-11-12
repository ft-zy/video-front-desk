import {reactive} from "vue";

export default function () {
    const options = reactive({
        width: '1190px', //播放器高度
        height: '518px', //播放器高度
        color: "#409eff", //主题色
        title: '', //视频名称
        poster: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.netbian.com%2Fuploads%2Fallimg%2F180215%2F120212-1518667332b02f.jpg&refer=http%3A%2F%2Fpic.netbian.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670556513&t=1a351ebd231cc5f2a8700840e8feffd6',
        muted: false, //静音
        webFullScreen: false,
        speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
        autoPlay: false, //自动播放
        loop: false, //循环播放
        mirror: false, //镜像画面
        ligthOff: false,  //关灯模式
        volume: 0.3, //默认音量大小
        control: true, //是否显示控制
        controlBtns:['audioTrack', 'quality', 'speedRate', 'volume', 'setting', 'pip', 'pageFullScreen', 'fullScreen'] //显示所有按钮,
    })
    return {
        options
    }
}