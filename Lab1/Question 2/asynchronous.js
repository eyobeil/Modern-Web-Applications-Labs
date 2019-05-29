document.getElementById('AsynchronousPromise').addEventListener('click', AsynchronousPromise);
function AsynchronousPromise() {
    const promises= fetch("https://randomuser.me/api/");
    promises.then(data=>data.json()).then(data=>{
        console.log(`
 firstName:${data.results[0].name.first}
 LastName:${data.results[0].name.last}
 Location:
 city: ${data.results[0].location.street}
 state:${data.results[0].location.state}
 postcode:${data.results[0].location.postcode}
 coordinates:
 latitude: ${data.results[0].location.coordinates.latitude}
 longitude:${data.results[0].location.coordinates.longitude}
 timeZone:
 offSet:${data.results[0].location.timezone.offset}
 description:${data.results[0].location.timezone.description}

`)
    }).catch(err=>{console.log(err)})
}
document.getElementById('AsynchronousAwait').addEventListener('click', AsynchronousAwait);
async function AsynchronousAwait(){
    try{
        let response = await fetch('https://randomuser.me/api/');
        // only proceed once promise is resolved
        let data = await response.json();
        // only proceed once second promise is resolved
        console.log(`
 firstName:${data.results[0].name.first}
 LastName:${data.results[0].name.last}
 Location:
 city: ${data.results[0].location.street}
 state:${data.results[0].location.state}
 postcode:${data.results[0].location.postcode}
 coordinates:
 latitude: ${data.results[0].location.coordinates.latitude}
 longitude:${data.results[0].location.coordinates.longitude}
 timeZone:
 offSet:${data.results[0].location.timezone.offset}
 description:${data.results[0].location.timezone.description}

`)}
    catch (e) {
        console.log(e);
    }
};
document.getElementById('observable').onclick=function(){
    const {from}=rxjs;
    const{map,flatMap,mergeAll}=rxjs.operators;
    const data$= from(fetch("https://randomuser.me/api/"));
    data$.pipe(
        flatMap(el=> el.json()),
        map(ele=>ele.results.map(element=>({name:element.name,  location:element.location})))
    ).subscribe(vl=>console.log(vl));
}();