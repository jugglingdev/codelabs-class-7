// Normal fetch()

function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET',
        headers: { 'Content-type': 'application/json' }
    }).then(res => res.json())
}

function getUsersPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
}

getUsers().then(users => {
    users.forEach(user => {
        getUsersPosts(user.id).then(posts => {
            console.log(user.name)
            console.log(posts.length)
        })
    })
})

// Facade Pattern

function getUsers() {
    return getFetch('https://jsonplaceholder.typicode.com/users');
}

function getUsersPosts(userId) {
    return getFetch('https://jsonplaceholder.typicode.com/posts', {
        userId: userId
    });
}

getUsers().then(users => {
    users.forEach(user => {
        getUsersPosts(user.id).then(posts => {
            console.log(user.name)
            console.log(posts.length)
        })
    })
})

function getFetch(url, params = {}) {
    const queryString = Object.entries(params).map(param => {
        return `${param[0]}=${param[1]}`
    }).join('&');
    return fetch(`${url}?${queryString}`, {
        method: 'GET',
        headers: { 'Content-type': 'application/json' }
    }).then(res => res.json())
}

// Axios Implementation

/*
    function getFetch(url, params = {}) {
        const queryString = Object.entries(params).map(param => {
            return `${param[0]}=${param[1]}`
        }).join('&');
        return axios({
            url: url,
            method: 'GET',
            params: params
        }).then(res => res.data)
    }
*/