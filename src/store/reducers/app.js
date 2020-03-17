export default function reducer(state={
    sideBarCollapsed:false
    /*detail:{},
    list: [],
    attrList:[]*/
}, action) {
    switch (action.type) {
        case "setData": {
            const {key,value} = action.payload
            var obj = {};
            obj[key] = value;
            return {...state, ...obj }
        }
    }
    return state
}
