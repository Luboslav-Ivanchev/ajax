function loadRepos() {

	let userElement=document.getElementById('username')

	let url=`https://api.github.com/users/${userElement.value}/repos`;
	console.log(url);

	fetch(url)
		.then(res=>res.json())
	     .then(data=>{
			 console.log(data);

			 let ul=document.getElementById('repos');

			 ul.innerHTML=data.map(x=>`<li><a href="${x.html_url}" target="_blank">${x.name}</a></li>`).join('');

		 });

}