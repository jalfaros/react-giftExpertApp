
    export const getGifs = async ( category ) => {

        const URL = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=EL7xqD9yaM1USMQShZLzUWVvGx9gGCog`
        const res = await fetch(URL);
        const { data } = await res.json();
        const gifs = data.map(img => {
            return {

                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        //  console.log(gifs)
       return gifs;// Se setea con la variable que consume el API 
    }
