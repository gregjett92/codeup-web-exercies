function getLastCommitDate(username) {
    return fetch('http://api.github.com/users/${username}/events', {headers: {'Authorization: `token ${GITHUB_API_KEY}'}
    }).then(response => response.json());
    .then(events => {
        return events.filter(event => event.type === "PushEvent")[0].created_at;
    });

}

function wait(seconds) {
    seconds = seconds * 1000;
    return new Promise( resolve => {
        setTimeout(() => {
            if(seconds > 1000){
                console.log("You'LL see this after " + seconds/1000 + "seconds")
            } else {
                console.log("You'LL see this after " + seconds/1000 + "seconds")
            }
        }, seconds)
    });
}

wait(1);
wait(2);
wait(3);