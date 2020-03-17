export const getRes = (res, fnSuccess, fnFail)=>{
    const response = res;
    const {data,code, status  } = response;
    if (code==200 || code==0 || status=='success' ) {
        console.log('ssss',data)
        fnSuccess&&fnSuccess(data)
    } else {
        fnFail&&fnFail(status);
    }
};
