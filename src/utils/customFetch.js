import data from "../components/DataProduct.js";


let itsFine = true;


export const customFetch = () => {
    return new Promise((resolve, reject) =>{
        if (itsFine) {
            resolve(data);
        } else {
            reject();
        }
    })
}