let data = [
    {
        name: 'Tyler', 
        age:'33'
    },

   {
    name: 'Kendrick', 
    age:'37'
   },

    {
        name: 'Scott', 
        age:'40'
    },
    {
        name: 'Steve', 
        age:'26'
    },
   
    {
        name: 'Ravyn', 
        age:'25'
},
   
    {
        name: 'Kelela', 
        age:'41'
    }
    
];

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return (
        '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>')
    
});

info.innerHTML = details.join('\n');

function goBack() {
    window.location.href = '../index.html';
}
