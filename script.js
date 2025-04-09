const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const names = [
  "Dr. Smith",
  "Prof. Johnson",
  "Dr. Williams",
  "Prof. Brown",
  "Dr. Jones",
  "Prof. Garcia",
];
const occupations = [
  "programmer",
  "teacher",
  "driver",
  "gardener",
  "writer",
  "designer",
];

function addFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const price = Math.floor(Math.random() * 100) + 20;

  freelancers.push({ name, occupation, price });
  render();
}

function render() {
  // Update average price
  const average =
    freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0) /
    freelancers.length;
  document.getElementById(
    "average"
  ).textContent = `Average Price: $${average.toFixed(2)}`;

  // Update freelancer list
  const freelancersList = document.getElementById("freelancers");
  const freelancerElements = freelancers.map((freelancer) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${freelancer.name}</td>
      <td>${freelancer.occupation}</td>
      <td>$${freelancer.price}</td>
    `;
    return row;
  });

  freelancersList.replaceChildren(...freelancerElements);
}

// Initial render
render();

// Add new freelancer every 4 seconds
setInterval(addFreelancer, 4000);
