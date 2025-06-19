//get all elements by id or class
const navItems = document.querySelectorAll(".nav-item");
const dropdownItems = document.querySelectorAll(".dropdown-item");
const responseBar = document.getElementById("responseBar");
const responseMessage = document.getElementById("response-message");
const responseTime = document.getElementById("response-time");
const responseStatus = document.getElementById("response-status");
const currentService = document.getElementById("current-service");
const serviceTitle = document.getElementById("service-title");
const serviceDescription = document.getElementById("service-description");
//Content to be displayed for each service
const serviceData = {
  compute: {
    title: "Compute Services",
    description: "Launch and manage compute capacity in the AWS cloud.",
    services: {
      ec2: "Amazon Elastic Compute Cloud",
      lambda: "AWS Lambda",
      batch: "AWS Batch",
      lightsail: "Amazon Lightsail",
    },
  },
  storage: {
    title: "Storage Services",
    description: "Store and retrieve any amount of data from anywhere.",
    services: {
      s3: "Amazon Simple Storage Service",
      ebs: "Amazon Elastic Block Store",
      efs: "Amazon Elastic File System",
      fsx: "Amazon FSx",
    },
  },
  database: {
    title: "Database Services",
    description: "Managed database services for every application.",
    services: {
      rds: "Amazon Relational Database Service",
      dynamodb: "Amazon DynamoDB",
      redshift: "Amazon Redshift",
      aurora: "Amazon Aurora",
    },
  },
  networking: {
    title: "Networking Services",
    description:
      "Connect and scale your applications with networking services.",
    services: {
      vpc: "Amazon Virtual Private Cloud",
      cloudfront: "Amazon CloudFront",
      route53: "Amazon Route 53",
      elb: "Elastic Load Balancing",
    },
  },
};

//Set event listeners for each naviation item
//update class to active when clicked and remove active class from others

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((nav) => nav.classList.remove("active"));
    item.classList.add("active");
  });
});

// Set event listeners for each dropdown item
// update class to selected when clicked and remove selected class from others

dropdownItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownItems.forEach((dropdown) => dropdown.classList.remove("selected"));
    item.classList.add("selected");
    // Get the service type and endpoint from the clicked item
    const endpoint = item.getAttribute("data-endpoint");
    const serviceType = item.closest(".nav-item").getAttribute("data-service");
    //simulate an API call
    simulateApiCall(endpoint, serviceType);
  });
});

function simulateApiCall(endpoint, serviceType) {
  showResponseBar(endpoint, serviceType);
  //wait for 3 seconds before hiding the bar
  setTimeout(() => {
    hideResponseBar();
  }, 3000);
}
//show response bar
function showResponseBar(endpoint, serviceType) {
  //getting service content from json object
  const serviceName = serviceData[serviceType].services[endpoint];
  //generating random value
  const responseTime = Math.floor(Math.random() * 150) + 50;
  //setting messages and resposne time and status code
  responseMessage.textContent = `${serviceName} endpoint called successfully`;
  document.getElementById("response-time").textContent = `${responseTime}ms`;
  responseStatus.textContent = "200";
  //showing response bar
  responseBar.classList.add("show");
}
//hide response bar
function hideResponseBar() {
  responseBar.classList.remove("show");
}

//update main content based on the service selected
function updateMainContent(service) {
  //just updating the content of the main section based on the service selected
  const data = serviceData[service];
  currentService.textContent = data.title;
  serviceTitle.textContent = data.title;
  serviceDescription.textContent = data.description;
}

//whenever the user clicks outside the navigation items,
// remove "selected" class fromm all dropdown items
document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-item")) {
    dropdownItems.forEach((item) => item.classList.remove("selected"));
  }
});

//setting the initial content to be displayed when the page loads
//we are choosing the closest item to the left edge
window.addEventListener("load", () => {
  updateMainContent("compute");
});
