

const getImage = async() =>{

    try {
        const apiKey = 'cU6kN75DNF3zQXcZrC4T1jKz5icQ1cCX';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const {data} = await resp.json();
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

        console.log(data);       
    } catch (error) {
        //manejo del error
    }   
}

getImage();


