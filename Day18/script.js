// Async Function

// async function greet() {
//  return console.log("Hello, This is Async Function");
//     }

// greet();

async function greet (users) {
    try {
        console.log(`Data is Fetched ${users}`);
        const response = await fetch ("https://jsonplaceholder.typicode.com/users");
        if (!response.ok){
            throw new Error(`Status Error ${response.status}`);
        }
        const userData = await response.json();
        console.log("user Data :",userData);
        return userData;
        
    } catch (error) {
        console.log("Error is Fetching from user data",error);
        
    }
}

 greet();

