
export const loaderFunction = async ()=>{
   const fetchUrl = 'https://galleria-slideshow-server.onrender.com/data'
   const res = await fetch(fetchUrl ,  {method: "GET", headers: {"Content-Type": "application/json;charset=UTF-8"}})
   const data  = await res.json()
   return data;
}


