const posts=[
    {id: 'p-101', title: "Intro to React", views: 100},
    {id: 'p-102', title: "Intro to Angular", views: 200},
    {id: 'p-103', title: "Intro to Vue", views: 300},
    {id: 'p-104', title: "Intro to Svelte", views: 400}
]

const lookUpTable = posts.reduce((table,post)=>{
    table[post.id] = post;
    return table;
},{});

console.log(lookUpTable);
console.log(lookUpTable['p-103']);