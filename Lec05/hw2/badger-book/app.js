function buildStudents(studs) {
	// TODO This function is just a suggestion! I would suggest calling it after
	//      fetching the data or performing a search. It should populate the
	//      index.html with student data by using createElement and appendChild.

	fetch("https://cs571.org/rest/s25/hw2/students", {
		headers: {
			"X-CS571-ID": CS571.getBadgerId()
		}
	})
	.then(res => res.json())
	.then(data => {
		console.log(data)
		document.getElementById("num-results").innerText = data.length
	})
}


function handleSearch(e) {
	e?.preventDefault(); // You can ignore this; prevents the default form submission!

	// TODO Implement the search
}

buildStudents()
document.getElementById("search-btn").addEventListener("click", handleSearch);