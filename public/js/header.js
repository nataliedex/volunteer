const greeting = document.getElementById("vol-greeting");


async function fetchGreeting() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      console.log(data.content);
      volunteerGreeting.innerText = `${data.content}`;
    } catch (error) {
      console.error("Error fetching greeting:", error);
      document.getElementById("greeting").innerText = "Hello, user! Have a great day!";
    }
  }
  
  // Call fetchGreeting on page load
//   window.onload = fetchGreeting;