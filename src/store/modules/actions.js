export const actions = {
    namespaced: true,
    state: {
        hasWatchedVideo: false,
    },
    getters: {
        getHasWatchedVideo(state){
            return state.hasWatchedVideo;
        },
    },
    mutations: {
        setHasWatchedVideo(state, value){
            state.hasWatchedVideo = value;
        },
    },
}