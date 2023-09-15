// Tasks from https://javascript.info/async-await

// Task 1 - Rewrite using async/await

async function loadJson(url) {
    let response = await fetch(url);

    if (response.status == 200) {
        let json = await response.json();
        return json;
    }

    throw new Error(response.status);
}
  
loadJson('https://javascript.info/no-such-user.json')
    .catch(alert);  // Error: 404

// Task 2 - Rewrite 'rethrow' with async/await

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    let response = await fetch(url);

    if (response.status == 200) {
        return response.json();
    }

    throw new HttpError(response);
}

async function demoGithubUser() {

    let user;
    while(true) {
        let name = prompt('Enter a name?', 'iliakan');

        try {
            user = await loadJson(`https://api.github.com/users/${name}`);
            break;
        } catch(err) {
            if (err instanceof HttpError && err.response.status == 404) {
                alert('No such user, please reenter.');
            } else {
                throw err;
            }
        }
    }

    alert(`Full name: ${user.name}.`);
    return user;
}

demoGithubUser();

// Task 3 - Call async from non-async

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f() {
    wait().then(result => alert(result));
}

f();
