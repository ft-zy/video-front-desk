import {h} from "vue";
import {RouterLink} from "vue-router/dist/vue-router";

export default function () {
    const menuOptions = [
        {
            label: () => h(
                RouterLink,
                {to: "/"},
                { default: () => "首页"},
            ),
            key: "main",
        },
        {
            label: () => h(
                RouterLink,
                {to: "/series"},
                { default: () => "电视剧"},
            ),
            key: "series",
        },
        {
            label: () => h(
                RouterLink,
                {to: "/movie"},
                { default: () => "电影"},
            ),
            key: 'movie',
        },
        {
            label: () => h(
                RouterLink,
                {to: "/anime"},
                { default: () => "动漫"},
            ),
            key: 'anime',
        },

    ];
    return {
        menuOptions
    }
}


