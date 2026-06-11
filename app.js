const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) =>{
	console.log(entry)
	if(entry.isIntersecting && entry.target.classList.contains('left-scroll')){
    entry.target.classList.add('showleft');
}
	if(entry.isIntersecting){
	entry.target.classList.add('show');
}

});
});


const hiddenElements = document.querySelectorAll('.hidden, .left-scroll');

hiddenElements.forEach((el) => observer.observe(el));