import {onMounted, reactive} from "vue";
import request from "../../http/request";
import frontDeskUrl from "../../api/Front-desk-url";

export default function() {

    const captcha = reactive({
        list: []
    })

    const VerKey = reactive({
        list: ''
    })

    const getCaptcha2 = ()=> {
        request.get(frontDeskUrl().getCaptcha2).then((res) => {
            captcha.list = res.data.base64;
        })
    }

    const getCaptcha3 = ()=> {
        request.get(frontDeskUrl().getCaptcha3).then((res) => {
            captcha.list = res.data.base64;
            console.log(res.data.key)
            VerKey.list = res.data.key;
        })
    }

    onMounted(()=> {
        getCaptcha3()
    })

    return {
        captcha,
        getCaptcha3,
        VerKey
    }
}