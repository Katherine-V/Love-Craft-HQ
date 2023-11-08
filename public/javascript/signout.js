document.getElementById('signoutForm').addEventListener('click', async function (e) {
    e.preventDefault();
    console.log("THIS LINE IS REACHED");
    const response = await fetch(`/api/signout`, {
        method: "POST",
    });

    if (response.ok){
        window.location.replace("/");
    }

});