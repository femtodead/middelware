export const asyncMiddleware = (store) => (next) => (actions) => {
    if(actions.type == "LOAD_TASKS"){

    }
    

    const result = next(actions);
    return result;
}