
export default function frontDeskUrl(){

    /**
     *  电影信息
     * @type {string}
     */

    const videoList = '/api/video/getVideoInfoList'

    const getByIdVideoInfo = '/api/video/getByIdVideInfo?vid='

    /**
     *  动漫信息
     */

    const getAnimeList = '/api/anime/getAnimeList'

    const getAnimeNameList = '/api/anime_name/getAnimeNameList'

    const selectAnimeNameByIdInfo = '/api/anime_name/selectAnimeNameByIdInfo?aid='

    const getByIdAnimeList = '/api/anime/getByIdAnimeList?aid='

    /**
     *  电视剧信息
     */

    const getTvList = '/api/tv/getTvInfoList'

    const getTvNameList = '/api/tv_name/getTvNameList'

    const getTvNameByIdInfo = '/api/tv_name/getTvNameByIdList?tvid='

    const getByIdTvList = '/api/tv/getByIdTvList?tvid='

    /**
     * 验证码
     * @type {string}
     */
    const getCaptcha2 = '/api/captcha2'

    const getCaptcha3 = '/api/captcha3'

    const Login = '/api/user/UserLogin'

    const add_user = '/api/registered/add_user';

    /**
     * 用户模块
     * @type {string}
     */
    // const delete_user = `/api/registered/${uid}`;

    const edit_user = '/api/registered/edit_user';

    const edit_password = '/api/user/edit_password';

    const getByIdInfo = '/api/registered/getByIdInfo?uid=';

    const MsgPage = '/api/msg/MagPage'

    const getCode = '/api/email/send?email='

    const getEmail = '/api/user/getEmailUserInfo?email='

    /**
     * 信息
     */
    const MsgInfo = '/api/msg/MsgInfo'

    return {
        videoList, getCaptcha2, getCaptcha3,
        Login, add_user, getCode, getByIdInfo, edit_user,edit_password, getEmail,
        getByIdVideoInfo,MsgPage,
        getAnimeList, getAnimeNameList, getByIdAnimeList,selectAnimeNameByIdInfo,
        getTvNameList, getByIdTvList, getTvNameByIdInfo,
        MsgInfo
    }

}