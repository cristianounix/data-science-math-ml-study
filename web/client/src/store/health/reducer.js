import {
    UPDATE_HEALTH_INFO
} from './actions';

const init = {
    environment: "production",
    isProduction: true
};

function profile(state = init, action) {
    const { payload, type } = action;

    switch (type) {
        case UPDATE_HEALTH_INFO:
            const env = payload.env;
            return {
                ...state,
                environment: env,
                isProduction: env === "production"
            };

        default:
            return state;
    }
}

export default profile;