export const exerciseOption = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '9ec432dff2msh0653b6b348b61b6p103b5bjsnea9d3635839a'
    }
  };


export const fetchData = async (url , options) => {
    const response = await fetch (url , options);
    const data = await response.json();

    return data;
} 