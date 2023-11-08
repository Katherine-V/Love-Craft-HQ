document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    const response = await fetch(`/api/login/${role}`, {
        method: "POST",
        body: JSON.stringify({
            username,
            password 
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok){
        const route = role === "vendor"?"/events/vendor/landing":"/events/organizer/landing";
        window.location.replace(route);
    }

});
