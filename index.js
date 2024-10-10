 document.addEventListener('DOMContentLoaded', () => {
            const userList = document.getElementById('user-list');

            // Fetch data from the API
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(data => {
                    data.forEach(user => {
                        const userItem = document.createElement('li');
                        userItem.className = 'user';
                        userItem.innerHTML = `
                            <h2>${user.name} (${user.username})</h2>
                            <p><span>Email:</span> ${user.email}</p>
                            <p><span>Phone:</span> ${user.phone}</p>
                            <p><span>Address:</span> ${user.address.suite}, ${user.address.street}, ${user.address.city} - ${user.address.zipcode}</p>
                        `;
                        userList.appendChild(userItem);
                    });
                })
                .catch(error => console.error('Error fetching users:', error));
        });
