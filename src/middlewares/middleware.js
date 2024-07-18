export const middleware = (store) => (next) => (actions) => {
    console.log('Действие', actions);
    

    const result = next(actions);

    
    return result;
}