/* eslint-disable no-unused-vars */


//getting data from local storage function
function getDataFromLocalStorage(){
    const storedData = localStorage.getItem('item');
    if(storedData){
        return JSON.parse(storedData);
    }
    return [];
}


// adding old and new data toh local storage

function addingTolocalStorage(id){
    const storedData = getDataFromLocalStorage();
    storedData.push(id);
    const newData = JSON.stringify(storedData);
    localStorage.setItem('item',newData);
}

//remove data from local storage
function removeData(id){
    const storedData = getDataFromLocalStorage();
    const remaingData = storedData.filter(data=>data !== id);
    localStorage.setItem('item',JSON.stringify(remaingData));
}

export {getDataFromLocalStorage, addingTolocalStorage, removeData};
