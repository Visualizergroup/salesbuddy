

export async function getJokes() {
    const response = await fetch("https://icanhazdadjoke.com/", {
		method: "GET",
		headers: {
        "Accept": "application/json",
      },
	}
	
	);
     const data = await response.json();
    return data
}
