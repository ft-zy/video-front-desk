import {reactive} from "vue";

export default function () {
    const RegisteredMode = reactive({
        netName:'',
        username: '',
        email: '',
        verCode: '',
        password: '',
        reenteredPassword: '',
        uuid: '',
        // Vcode: ''
    })

    const rules = {
        netName: [
            {
                required: true,
                validator(rules, value) {
                    if (value === '') {
                        return new Error("请输入用户名")
                    }
                    return true;
                },
                trigger: ['input', 'blur']
            }
        ],
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
        email: [
            {
                required: true,
                validator(rules, value) {
                    if (value === '') {
                        return new Error("请输入邮箱")
                    }
                    return true;
                },
                trigger: ['input', 'blur']
            },
            {
                pattern: /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
                message: "请输入正确格式的邮箱",
                trigger: ["input", "blur"],
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
            },
            // {
            //     required: true,
            //     validator(rules, value) {
            //         if (value !== RegisteredMode.Vcode) {
            //             return new Error("验证码错误")
            //         }
            //         return true;
            //     },
            //     trigger: ['input', 'blur']
            // }
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
        reenteredPassword: [
            {
                required: true,
                validator(rules, value) {
                    if (value === '') {
                        return new Error("请输入确定密码")
                    }
                },
                trigger: ['blur', 'input']
            },
            {
                required: true,
                validator(rules, value) {
                    if (value !== RegisteredMode.password) {
                        return new Error("两次密码不一致")
                    }
                },
                trigger: ['blur', 'input']
            }
        ],
    }

    return {
        RegisteredMode,
        rules
    }
}
