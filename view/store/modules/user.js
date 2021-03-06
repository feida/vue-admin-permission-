import {loginByUsername, logout, getUserInfo} from '@/api/login'
import {getToken, setToken, removeToken} from '@/utils/auth'

const user = {
    state: {
        user: '',
        status: '',
        code: '',
        token: getToken(),
        name: '',
        nick: '',
        avatar: '',
        introduction: '',
        visitor: false,
        roles: [],
        perms: [],
        setting: {
            articlePlatform: []
        }
    },

    mutations: {
        SET_CODE: (state, code) => {
            state.code = code
        },
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_INTRODUCTION: (state, introduction) => {
            state.introduction = introduction
        },
        SET_SETTING: (state, setting) => {
            state.setting = setting
        },
        SET_STATUS: (state, status) => {
            state.status = status
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_NICK: (state, nick) => {
            state.nick = nick
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        },
        SET_PERMS: (state, perms) => {
          state.perms = perms
        },
        SET_VISITOR: (state, visitor) => {
          state.visitor = visitor
        }
    },

    actions: {
        // 用户名登录
        LoginByUsername({commit}, userInfo) {
            const username = userInfo.username.trim();
            return new Promise((resolve, reject) => {
                loginByUsername(username, userInfo.password).then(response => {
                    if(!response.ok) return resolve(response);
                    commit('SET_TOKEN', response.token);
                    setToken(response.token);
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 获取用户信息
        GetUserInfo({commit, state}) {
            return new Promise((resolve, reject) => {
                getUserInfo(state.token).then(response => {
                    if(!response.ok){
                        reject(response.message)
                    }else if (response.roles && response.roles.length > 0) { // 验证返回的roles是否是一个非空数组
                        commit('SET_ROLES', response.roles)
                    } else {
                        reject('getInfo: roles must be a non-null array !')
                    }
                    if(!response.perms || response.perms.length==0){
                      commit('SET_VISITOR', true)
                    }else{
                      commit('SET_VISITOR', false)
                    }
                    commit('SET_PERMS', response.perms);
                    commit('SET_NICK', response.name);
                    commit('SET_NAME', response.admin_name);
                    commit('SET_AVATAR', response.avatar);
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 第三方验证登录
        // LoginByThirdparty({ commit, state }, code) {
        //   return new Promise((resolve, reject) => {
        //     commit('SET_CODE', code)
        //     loginByThirdparty(state.status, state.email, state.code).then(response => {
        //       commit('SET_TOKEN', response.data.token)
        //       setToken(response.data.token)
        //       resolve()
        //     }).catch(error => {
        //       reject(error)
        //     })
        //   })
        // },

        // 登出
        LogOut({commit, state}) {
            return new Promise((resolve, reject) => {
                logout(state.token).then(() => {
                    commit('SET_TOKEN', '');
                    commit('SET_ROLES', []);
                    removeToken();
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 前端 登出
        FedLogOut({commit}) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '');
                removeToken();
                resolve()
            })
        },

        // 动态修改权限
        ChangeRoles({commit}, role) {
            return new Promise(resolve => {
                commit('SET_TOKEN', role);
                setToken(role);
                getUserInfo(role).then(response => {
                    const data = response.data;
                    commit('SET_PERMS', data.perms);
                    commit('SET_ROLES', data.roles);
                    commit('SET_NAME', data.admin_name);
                    commit('SET_NICK', response.name);
                    commit('SET_AVATAR', data.avatar);
                    resolve()
                })
            })
        }
    }
}

export default user
