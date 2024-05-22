async function doSomethingCool(){
    console.log(1);
    const datasPromise = getSomeData(); // a Promise is returned here
    console.log(3);
    let someLogic = 1;
    someLogic += 2;
    someLogic += 3;
    console.log(4);
    const datas = await datasPromise // now datas is the actual result
    console.log(7);
    console.log(datas);
}


async function getSomeData() {
    console.log(2);
    let data1 = await fetch('/something/user.json');
    console.log(5);
    let data2 = await  fetch('/something/item.json');
    console.log(6);

    return [data1, data2]
}


// This function imitates fetching data from external server
async function fetch(url){
    // This represents the time we wait for the server to return an answer
    await sleep(2000)
    return {
        "status": 200,
        "data": "data"
    }
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

doSomethingCool()