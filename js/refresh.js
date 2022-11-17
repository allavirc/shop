let refreshToken = localStorage.getItem('refresh')
if (refreshToken) {
    setNewAccessToken()
}

async function setNewAccessToken() {
    let URL = 'http://172.28.0.76:8000/auth/jwt/refresh'
    let response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"refresh": refreshToken})
    })
        .then(res => res.json())
        .then(data => {
            if (data['access']) {
                localStorage.setItem('access', data['access'])
            } else {
                console.log(data);
            }
        })
        .catch(err => {
            console.log(err);
        })
}