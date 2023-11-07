// event.js
document.addEventListener('DOMContentLoaded', () => {
    const eventForm = document.getElementById('event-form');

    eventForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const location = document.getElementById('location').value;

        const eventData = {
            name,
            description,
            date,
            time,
            location,
        };

        try {
            const response = await fetch('/events/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(eventData),
            });

            if (response.ok) {
                alert('Event created successfully');
                window.location.href = 'organizer/landing';
            } else {
                const data = await response.json();
                alert('Event creation failed: ' + data.error);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Event creation failed. Check the console for details.');
        }
    });
});