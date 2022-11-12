import {reactive} from "vue";

export default function () {
    const EditUserMode = reactive({
        netName: '',
        email: '',
        uportrait: '',
        verCode: '',
        password: '',
        uuid: '',
        uid: '',
        reenteredPassword: '',
        Vcode: ''
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
            {
                required: true,
                validator(rules, value) {
                    if (value !== EditUserMode.Vcode) {
                        return new Error("验证码错误")
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
        reenteredPassword: [
            {
                required: true,
                validator(rules, value) {
                    if (value === '') {
                        return new Error("请输入确定重置密码")
                    }
                    return true;
                },
                trigger: ['input', 'blur']
            },
            {
                required: true,
                validator(rules, value) {
                    if (value !== EditUserMode.password) {
                        return new Error("两次密码不一样")
                    }
                    return true;
                },
                trigger: ['input', 'blur']
            }
        ],
    }

    return {
        EditUserMode,
        rules
    }
}
