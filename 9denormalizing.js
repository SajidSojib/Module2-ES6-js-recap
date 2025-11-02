//* Denormalizing Data (Client-Side)
//? When you have a flat array of data, you can denormalize it into a nested object structure.
//? This can be useful when you want to access data in a more structured way.

//? Scenario: You have an array of users and a separate array of posts.
//? You want to create a nested object structure where each user has a list of their posts.

const users = [
    { id: 101, name: "John" },
    { id: 102, name: "Jane" },
    { id: 103, name: "Bob" }
]
const posts = [
    { id: 201, userId: 101, title: "Post 1" },
    { id: 202, userId: 102, title: "Post 2" },
    { id: 203, userId: 101, title: "Post 3" },
    { id: 204, userId: 103, title: "Post 4" }
]

const postByUserId = posts.reduce((table, post) => {
    const { userId } = post;
    if (!table[userId]) {
        table[userId] = [];
    }
    table[userId].push(post);
    return table;
}, {});

const postWithUser = users.map(user => {
    user.posts = postByUserId[user.id] || [];
    return user;
});

console.dir(postWithUser, { depth: null });