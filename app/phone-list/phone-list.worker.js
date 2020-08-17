addEventListener('message', function({data}) {
    // console.log('I am woker');
    // console.log(data);

    const newArr = data.payload.sort((a,b)=>-+(a.name > b.name));
    postMessage(newArr)
})
