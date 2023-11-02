document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    if (role === 'eventManagement') {
        window.location.href = '/event-management';
    } else if (role === 'vendor') {
        window.location.href = '/vendor';
    }
});
