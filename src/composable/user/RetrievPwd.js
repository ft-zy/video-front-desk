import {reactive} from "vue";

export default function () {
    const SendModel = reactive({
        email: '',
        verCode: '',
        uuid: '',
        Vcode: ''
    })

    const EditModel = reactive({
        uid: '',
        password: '',
        reenteredPassword: ''
    })

    const rules = {
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
                    if (value !== SendModel.Vcode) {
                        return new Error("验证码错误")
                    }
                    return true;
                },
                trigger: ['input', 'blur']
            }
        ],

    }

    const rules2 = {
        password: [
            {
                required: true,
                validator(rules, value) {
                    if (value === '') {
                        return new Error("请输入重置密码")
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
                    if (value !== EditModel.password) {
                        return new Error("两次密码不一样")
                    }
                    return true;
                },
                trigger: ['input', 'blur']
            }
        ],
    }

    return {
        SendModel,
        EditModel,
        rules,
        rules2
    }
}
