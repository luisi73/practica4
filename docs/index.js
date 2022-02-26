
const plane_url='https://api.aviationstack.com/v1/flights?access_key=5da857a71607c95cb9ed25a9934f0f3c'
async function getPlanesData () {
    const response = await fetch(plane_url);
    const data=await response.json();
    console.log(data)
}

getPlanesData();