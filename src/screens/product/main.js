const url = 'https://dogbreeddb.p.rapidapi.com/paginated/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '02e21a2917mshb9f7023387f37a0p16f9b8jsnf44ab3717559',
		'X-RapidAPI-Host': 'dogbreeddb.p.rapidapi.com'
	}
};
const api=async ()=> {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    console.log(result.results);
    const dogbreeddb = result.results;
    dogbreeddb.forEach((e) => {
      console.log(e.id);
    });
  } catch (error) {
    console.error(error);
  }
}
api()