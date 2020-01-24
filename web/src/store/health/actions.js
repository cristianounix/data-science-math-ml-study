import healthService from "../../services/health";

const UPDATE_HEALTH_INFO = 'UPDATE_HEALTH_INFO';

function fetchHealth() {
    return async (dispatch) => {
        const health = await healthService.getHealthStatus();
        dispatch({ type: UPDATE_HEALTH_INFO, payload: health });
    };
}

export {
    UPDATE_HEALTH_INFO,
    fetchHealth
}