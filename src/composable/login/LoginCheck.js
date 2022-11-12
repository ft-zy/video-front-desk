import {reactive} from "vue";

export default function () {

    const LoginModel = reactive({
        username: "",
        password: "",
        verCode: "",
        uuid: ""
    });

    const rules = {
        username: [
            {
                required: true,
                validator(rules, value) {
                    if (value === '') {
                        return new Error("请输入账号")
                    }
                    return true;
                },
                trigger: ['input', 'blur']
            }
        ],
        password: [
            {
                required: true,
                validator(rules, value) {
                    if (value === '') {
                        return new Error("请输入密码")
                    }
                    return true;
                },
                trigger: ['input', 'blur']
            }
        ],
        verCode: [
            {
                required: true,
                validator(rules, value) {
                    if (value === '') {
                        return new Error("请输入验证码")
                    }
                    return true;
                },
                trigger: ['input', 'blur']
            }
        ],
    }

    return {
        LoginModel,
        rules
    }
}