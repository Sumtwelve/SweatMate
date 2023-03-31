var logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

// function logout() {
//     console.log("this is before the logout fetch");
//     const response = fetch('/api/users/logout', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//     }).then(() => {
//         console.log("after logout fetch, before if statement");
//         if (response.ok) {
//             document.location.replace('/');
//         } else {
//             alert(response.statusText);
//         }
//     }).catch((err) => {
//         console.error(err);
//     })
// };

document.querySelectorAll('.logout-btn').forEach((button) => button.addEventListener('click', logout));
