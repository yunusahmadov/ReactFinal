import axios from "axios"

export const getText=()=>async dispatch=>{
    return await axios.get('./JsonFiles/open.json')
    .then(resp=>{
        console.log(resp.data)
        dispatch({type: 'MAIN_SLICE/changeStateValue',
        payload:{name:'logo',value:resp.data}})
})
}

export const getNav=()=>async dispatch=>{
    return await axios.get('./JsonFiles/nav.json')
    .then(resp=>{
        console.log(resp.data)
        dispatch({type: 'MAIN_SLICE/changeStateValue',
        payload:{name:'navigation',value:resp.data}})
})
}


export const getHeaderBodyImg=()=>async dispatch=>{
    return await axios.get('./JsonFiles/headerBody.json')
    .then(resp=>{
        console.log(resp.data)
        dispatch({type: 'MAIN_SLICE/changeStateValue',
        payload:{name:'headerbody',value:resp.data}})
})
}

export const getSectionOneImg=()=>async dispatch=>{
    return await axios.get('./JsonFiles/cardsone.json')
    .then(resp=>{
        console.log(resp.data)
        dispatch({type: 'MAIN_SLICE/changeStateValue',
        payload:{name:'sectionOneCards',value:resp.data}})
})
}
export const getBlogText=()=>async dispatch=>{
    return await axios.get('./JsonFiles/blogTop.json')
    .then(resp=>{
        console.log(resp.data)
        dispatch({type: 'MAIN_SLICE/changeStateValue',
        payload:{name:'blog',value:resp.data}})
})
}
export const getCardImg=()=>async dispatch=>{
    return await axios.get('./JsonFiles/cardssix.json')
    .then(resp=>{
        console.log(resp.data)
        dispatch({type: 'MAIN_SLICE/changeStateValue',
        payload:{name:'cardimg',value:resp.data}})
})
}

export const getUserImg=()=>async dispatch=>{
    return await axios.get('./JsonFiles/userPhoto.json')
    .then(resp=>{
        console.log(resp.data)
        dispatch({type: 'MAIN_SLICE/changeStateValue',
        payload:{name:'userImg',value:resp.data}})
})
}

export const getFiveImg=()=>async dispatch=>{
    return await axios.get('./JsonFiles/gridimages.json')
    .then(resp=>{
        console.log(resp.data)
        dispatch({type: 'MAIN_SLICE/changeStateValue',
        payload:{name:'fiveimgs',value:resp.data}})
})
}

export const getNumbers=()=>async dispatch=>{
    return await axios.get('./JsonFiles/numbers.json')
    .then(resp=>{
        console.log(resp.data)
        dispatch({type: 'MAIN_SLICE/changeStateValue',
        payload:{name:'countNums',value:resp.data}})
})
}

export const getThings=()=>async dispatch=>{
    return await axios.get('./JsonFiles/things.json')
    .then(resp=>{
        console.log(resp.data)
        dispatch({type: 'MAIN_SLICE/changeStateValue',
        payload:{name:'things',value:resp.data}})
})
}
